<#
.SYNOPSIS
  Registers (or re-registers) the weekly "MobiControl Competitor Watch" scheduled task.

.DESCRIPTION
  schtasks.exe only accepts UTF-16 task XML, so the repo copy (kept UTF-8 to stay readable
  and diffable) is converted to a UTF-16 temp file before registration.

  Also rewrites the hardcoded repository paths in the XML to this clone's location, so the
  task is correct even if the repo moves.

.PARAMETER Unregister
  Delete the task instead of creating it.

.EXAMPLE
  powershell -ExecutionPolicy Bypass -File scripts\register-task.ps1
.EXAMPLE
  powershell -ExecutionPolicy Bypass -File scripts\register-task.ps1 -Unregister
#>
[CmdletBinding()]
param([switch]$Unregister)

$ErrorActionPreference = 'Stop'
$repo = Split-Path -Parent $PSScriptRoot
$taskName = 'MobiControl Competitor Watch'

if ($Unregister) {
  & schtasks /delete /tn $taskName /f
  exit $LASTEXITCODE
}

$xmlPath = Join-Path $repo 'task\CompetitorWatch.xml'
if (-not (Test-Path $xmlPath)) { throw "Task XML not found at $xmlPath" }

$xml = [IO.File]::ReadAllText($xmlPath)
$xml = $xml -replace 'encoding="UTF-8"', 'encoding="UTF-16"'
# Point the task at this clone wherever it lives.
$xml = $xml -replace '<WorkingDirectory>[^<]*</WorkingDirectory>', "<WorkingDirectory>$repo</WorkingDirectory>"
$xml = $xml -replace '(-File\s+&quot;|-File\s+")[^"&]*run-weekly\.ps1', ('$1' + (Join-Path $repo 'scripts\run-weekly.ps1'))

$tmp = Join-Path $env:TEMP 'CompetitorWatch.utf16.xml'
[IO.File]::WriteAllText($tmp, $xml, [Text.Encoding]::Unicode)

& schtasks /create /tn $taskName /xml $tmp /f
$code = $LASTEXITCODE
Remove-Item $tmp -ErrorAction SilentlyContinue

if ($code -eq 0) {
  Write-Output ''
  Write-Output "Registered '$taskName' for this clone: $repo"
  Write-Output "Inspect it with:  schtasks /query /tn `"$taskName`" /v /fo list"
  Write-Output "Run it now with:  schtasks /run /tn `"$taskName`""
}
exit $code
