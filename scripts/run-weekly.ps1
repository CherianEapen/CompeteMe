<#
.SYNOPSIS
  Runs the weekly MobiControl competitor update end to end on this machine.

.DESCRIPTION
  Orchestrates the deterministic steps itself and calls Claude Code headlessly for the
  one step that needs judgement (writing report.json):

    1. npm ci                     (only when node_modules is missing)
    2. node scripts/fetch.mjs     fetch all sources, update snapshots, write runs/<date>/diff.*
    3. claude -p                  read the diff, write runs/<date>/report.json
    4. node scripts/build-docx    render reports/<date>-competitor-update.docx + .md
    5. git commit + push

  Claude is given only Read/Write/Glob/Grep, so it cannot run commands or touch git.

  Exit codes: 0 ok, 2 fetch produced no diff, 3 analysis failed or the CLI is not signed in,
  4 every source errored, 5 render failed, 6 commit failed, 7 push failed.

  This file must stay ASCII: PowerShell 5.1 reads an unsigned .ps1 as ANSI, which mangles
  non-ASCII characters in log output.

.PARAMETER RunDate
  Run folder name (UTC date by default). Use to re-run a past date.

.PARAMETER SkipAnalysis
  Skip step 3 and use an existing runs/<date>/report.json. For testing the plumbing.

.PARAMETER NoPush
  Do everything except `git push`.

.PARAMETER NoCommit
  Do everything except commit and push.

.EXAMPLE
  powershell -ExecutionPolicy Bypass -File scripts\run-weekly.ps1
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File scripts\run-weekly.ps1 -NoCommit
#>
[CmdletBinding()]
param(
  [string]$RunDate = (Get-Date).ToUniversalTime().ToString('yyyy-MM-dd'),
  [switch]$ReFetch,
  [switch]$SkipAnalysis,
  [switch]$NoPush,
  [switch]$NoCommit
)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
Set-Location $repo

$logDir = Join-Path $repo 'logs'
if (-not (Test-Path $logDir)) { New-Item -ItemType Directory -Path $logDir | Out-Null }
$logFile = Join-Path $logDir "$RunDate.log"

function Write-Log {
  param([string]$Message, [string]$Level = 'INFO')
  $line = "{0}  {1,-5}  {2}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $Level, $Message
  Write-Output $line
  Add-Content -Path $logFile -Value $line -Encoding utf8
}

function Stop-Run {
  param([string]$Message, [int]$Code = 1)
  Write-Log $Message 'ERROR'
  Write-Log "Run aborted. Log: $logFile" 'ERROR'
  exit $Code
}

# Run an external program and capture its output without letting stderr become a
# terminating error. PowerShell 5.1 wraps a native command's stderr in an ErrorRecord,
# which under ErrorActionPreference='Stop' kills the script even on exit code 0 --
# git writes progress to stderr routinely, so every native call goes through here.
function Invoke-Native {
  param([Parameter(Mandatory = $true)][string]$File, [string[]]$Arguments = @())
  $prev = $ErrorActionPreference
  $ErrorActionPreference = 'Continue'
  try {
    $out = & $File @Arguments 2>&1 | Out-String
    $code = $LASTEXITCODE
  } finally {
    $ErrorActionPreference = $prev
  }
  return [pscustomobject]@{ Output = $out; ExitCode = $code }
}

function Write-NativeOutput {
  param([string]$Text, [string]$Level = 'INFO')
  foreach ($l in ($Text -split "`r?`n")) { if ($l.Trim()) { Write-Log "  $($l.TrimEnd())" $Level } }
}

# Resolve the newest claude.exe shipped with the Claude desktop app. The version folder
# changes as the app updates (and old versions are deleted), so never hardcode it. The app
# can also be mid-update when the task fires, so this retries once and logs what it saw --
# the 21 Sep run failed here with no diagnostics and the cause could not be reconstructed.
function Find-ClaudeExe {
  $candidates = @()
  foreach ($root in @("$env:APPDATA\Claude\claude-code", "$env:LOCALAPPDATA\Claude\claude-code")) {
    if (Test-Path $root) {
      $candidates += @(Get-ChildItem -Path (Join-Path $root '*\claude.exe') -File -ErrorAction SilentlyContinue)
    }
  }
  $onPath = Get-Command claude -ErrorAction SilentlyContinue
  if ($onPath -and (Test-Path $onPath.Source)) { $candidates += @(Get-Item $onPath.Source) }
  if ($candidates.Count -eq 0) { return $null }
  # Prefer the highest version folder, falling back to newest on disk.
  $best = $candidates | Sort-Object `
    @{ Expression = { $v = $null; if ([version]::TryParse($_.Directory.Name, [ref]$v)) { $v } else { [version]'0.0.0' } }; Descending = $true }, `
    @{ Expression = { $_.LastWriteTime }; Descending = $true }
  return $best[0].FullName
}

function Get-ClaudeExe {
  $exe = Find-ClaudeExe
  if (-not $exe) {
    Write-Log 'claude.exe not found on first look -- retrying in 10s in case the app is updating' 'WARN'
    Start-Sleep -Seconds 10
    $exe = Find-ClaudeExe
  }
  if (-not $exe) {
    Write-Log "APPDATA=$env:APPDATA" 'ERROR'
    foreach ($root in @("$env:APPDATA\Claude\claude-code", "$env:LOCALAPPDATA\Claude\claude-code")) {
      if (Test-Path $root) {
        $names = (Get-ChildItem $root -ErrorAction SilentlyContinue | ForEach-Object { $_.Name }) -join ', '
        Write-Log "  $root exists; entries: $names" 'ERROR'
      } else {
        Write-Log "  $root does not exist" 'ERROR'
      }
    }
  }
  return $exe
}

Write-Log "=== Weekly competitor update: $RunDate ==="
Write-Log "Repo: $repo"

# ---------------------------------------------------------------- 1. dependencies
if (-not (Test-Path (Join-Path $repo 'node_modules'))) {
  Write-Log 'node_modules missing -- running npm ci'
  $npm = Invoke-Native 'npm' @('ci')
  if ($npm.ExitCode -ne 0) { Write-NativeOutput $npm.Output 'ERROR'; Stop-Run 'npm ci failed' }
  Write-Log 'Dependencies installed'
} else {
  Write-Log 'Dependencies present -- skipping npm ci'
}

# ---------------------------------------------------------------- 2. fetch
# fetch.mjs advances snapshots/ as soon as it succeeds. If a later step then fails and the
# run is retried, a second fetch would diff against those advanced snapshots, report no
# changes, and overwrite the real delta with an empty one -- silently losing the week.
# So an existing diff for this date is reused by default; -ReFetch forces a new fetch.
$runDir = Join-Path $repo "runs\$RunDate"
$diffMd = Join-Path $runDir 'diff.md'

if ((Test-Path $diffMd) -and -not $ReFetch) {
  Write-Log "Reusing the existing diff for $RunDate (fetched $((Get-Item $diffMd).LastWriteTime))" 'WARN'
  Write-Log 'Snapshots already advanced for this date; re-fetching would report an empty week.' 'WARN'
  Write-Log 'Pass -ReFetch to fetch again anyway (this discards the existing delta).' 'WARN'
} else {
  if ($ReFetch -and (Test-Path $diffMd)) { Write-Log "-ReFetch: discarding the existing diff for $RunDate" 'WARN' }
  Write-Log 'Fetching sources'
  $fetch = Invoke-Native 'node' @((Join-Path $repo 'scripts\fetch.mjs'), '--date', $RunDate)
  Write-NativeOutput $fetch.Output
  if (-not (Test-Path $diffMd)) { Stop-Run "fetch.mjs produced no diff.md (exit $($fetch.ExitCode))" 2 }
  if ($fetch.ExitCode -eq 3) {
    Write-Log 'At least one source errored (exit 3) -- continuing; the report records it' 'WARN'
  } elseif ($fetch.ExitCode -ne 0) {
    Write-Log "fetch.mjs exited $($fetch.ExitCode) but wrote a diff -- continuing" 'WARN'
  }
}

# Refuse to write a report off a diff where nothing was reachable: that is an
# infrastructure failure, not a quiet week, and it needs a person. Source ids are
# lower-case, so with -CaseSensitive this counts data rows only, never the "| Source |"
# header -- without it Select-String matches the header too and the guard never fires.
$rows = @(Select-String -Path $diffMd -Pattern '^\| [a-z0-9][a-z0-9-]* \|' -CaseSensitive -ErrorAction SilentlyContinue)
$errorRows = @($rows | Where-Object { $_.Line -match '\|\s*error\s*\|' })
Write-Log "Sources reported: $($rows.Count); errored: $($errorRows.Count)"
if ($rows.Count -gt 0 -and $errorRows.Count -eq $rows.Count) {
  Stop-Run "All $($rows.Count) sources errored -- no data to analyse. Check network access, then re-run. No report written." 4
}

# ---------------------------------------------------------------- 3. analysis
$reportJson = Join-Path $runDir 'report.json'
if ($SkipAnalysis) {
  Write-Log 'SkipAnalysis set -- using the existing report.json' 'WARN'
  if (-not (Test-Path $reportJson)) { Stop-Run "No report.json at $reportJson" 3 }
} else {
  $claude = Get-ClaudeExe
  if (-not $claude) { Stop-Run 'Could not find claude.exe (is the Claude desktop app installed?)' 3 }
  Write-Log "Analysing with $claude"

  $auth = Invoke-Native $claude @('auth', 'status')
  if ($auth.Output -notmatch '"loggedIn"\s*:\s*true') {
    Write-NativeOutput $auth.Output 'ERROR'
    Stop-Run "Claude Code CLI is not signed in. Run once, interactively:`n    & '$claude' auth login" 3
  }

  $prompt = @"
You are writing step 3 of the weekly MobiControl competitor update, and only that step.

The fetcher has already run. Your job: read runs/$RunDate/diff.md in full, plus
runs/$RunDate/diff.json for the full text of any item whose excerpt is truncated with an
ellipsis, then write runs/$RunDate/report.json.

Follow CLAUDE.md in this repository for the analysis rules and REPORT_SCHEMA.md for the
exact shape of report.json. examples/sample-report.json is a filled-in example.

Constraints:
- Write exactly one file: runs/$RunDate/report.json. Change nothing else.
- periodEnd must be $RunDate.
- Every item must trace to an entry in the diff. Never invent a feature, date or vendor claim.
- Record every errored source in sourceStatus and name the resulting blind spot in methodology.
- Do not run commands, render the document or touch git; the calling script does that.

Reply with one line when the file is written.
"@

  $analysis = Invoke-Native $claude @(
    '-p', $prompt,
    '--allowed-tools', 'Read', 'Write', 'Glob', 'Grep',
    '--permission-mode', 'acceptEdits',
    '--model', 'claude-opus-5'
  )
  Write-NativeOutput $analysis.Output
  if ($analysis.ExitCode -ne 0) { Stop-Run "claude -p exited $($analysis.ExitCode)" 3 }
  if (-not (Test-Path $reportJson)) { Stop-Run 'Analysis did not write report.json' 3 }
  Write-Log 'report.json written'
}

# ---------------------------------------------------------------- 4. render
# Word holds an exclusive lock on an open .docx, which would fail the render with EPERM.
$docx = Join-Path $repo "reports\$RunDate-competitor-update.docx"
if (Test-Path $docx) {
  try {
    $handle = [IO.File]::Open($docx, 'Open', 'ReadWrite', 'None')
    $handle.Close()
  } catch {
    Stop-Run "$docx is locked -- close it in Word, then re-run." 5
  }
}

Write-Log 'Rendering Word report'
$build = Invoke-Native 'node' @((Join-Path $repo 'scripts\build-docx.mjs'), "runs/$RunDate")
Write-NativeOutput $build.Output
if ($build.ExitCode -ne 0) { Stop-Run "build-docx.mjs exited $($build.ExitCode) (report.json invalid?)" 5 }
if (-not (Test-Path $docx)) { Stop-Run "Expected $docx was not created" 5 }

# ---------------------------------------------------------------- 5. commit and push
# logs/ is intentionally git-ignored and must not be staged.
if ($NoCommit) {
  Write-Log 'NoCommit set -- leaving changes uncommitted' 'WARN'
} else {
  $add = Invoke-Native 'git' @(
    'add', 'snapshots', 'reports',
    "runs/$RunDate/diff.json", "runs/$RunDate/diff.md", "runs/$RunDate/report.json"
  )
  if ($add.ExitCode -ne 0) { Write-NativeOutput $add.Output 'ERROR'; Stop-Run 'git add failed' 6 }

  $staged = (Invoke-Native 'git' @('diff', '--cached', '--name-only')).Output
  if (-not $staged.Trim()) {
    Write-Log 'Nothing to commit' 'WARN'
  } else {
    Write-NativeOutput $staged
    $commit = Invoke-Native 'git' @(
      'commit',
      '-m', "Weekly competitor update $RunDate",
      '-m', 'Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>'
    )
    if ($commit.ExitCode -ne 0) { Write-NativeOutput $commit.Output 'ERROR'; Stop-Run 'git commit failed' 6 }
    Write-Log 'Committed'

    if ($NoPush) {
      Write-Log 'NoPush set -- not pushing' 'WARN'
    } else {
      $push = Invoke-Native 'git' @('push', 'origin', 'main')
      if ($push.ExitCode -ne 0) {
        Write-NativeOutput $push.Output 'ERROR'
        Write-Log 'The commit is local; push it by hand once credentials are sorted' 'WARN'
        Stop-Run 'git push failed' 7
      }
      Write-Log 'Pushed to origin/main'
    }
  }
}

Write-Log "Report: $docx"
Write-Log '=== Done ==='
exit 0
