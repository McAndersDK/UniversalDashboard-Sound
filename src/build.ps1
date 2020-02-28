$BuildFolder = $PSScriptRoot

$powerShellGet = Import-Module PowerShellGet  -PassThru -ErrorAction Ignore
if ($powerShellGet.Version -lt ([Version]'1.6.0')) {
	Install-Module PowerShellGet -Scope CurrentUser -Force -AllowClobber
	Import-Module PowerShellGet -Force
}


Set-Location $BuildFolder

$OutputPath = "$BuildFolder\output\UniversalDashboard.sound"

Remove-Item -Path $OutputPath -Force -ErrorAction SilentlyContinue -Recurse
Remove-Item -Path "$BuildFolder\public" -Force -ErrorAction SilentlyContinue -Recurse

New-Item -Path $OutputPath -ItemType Directory

npm install
npm run build

Copy-Item $BuildFolder\public\*.bundle.js $OutputPath
Copy-Item $BuildFolder\public\*.map $OutputPath
Copy-Item $BuildFolder\UniversalDashboard.sound.psm1 $OutputPath
Copy-Item $BuildFolder\Scripts $OutputPath\Scripts -Recurse -Force

$Version = "1.0.0"

$manifestParameters = @{
	Path              = "$OutputPath\UniversalDashboard.sound.psd1"
	Author            = "Anders Andersson"
	CompanyName       = "Netcompany A/S"
	Copyright         = "2020 Netcompany A/S"
	RootModule        = "UniversalDashboard.sound.psm1"
	Description       = ""
	ModuleVersion     = $Version
	Tags              = @("universaldashboard")
	ReleaseNotes      = "initial Release"
	FunctionsToExport = @(
		"New-UDSound"
	)
}

New-ModuleManifest @manifestParameters


