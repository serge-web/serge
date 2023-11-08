Set objShell = WScript.CreateObject("WScript.Shell")
Set lnk = objShell.CreateShortcut(objShell.SpecialFolders("Startup") & "\Serge Server Autostart.LNK")

scriptdir = CreateObject("Scripting.FileSystemObject").GetParentFolderName(WScript.ScriptFullName)

lnk.TargetPath = scriptdir & "\startUp.vbs"
lnk.Arguments = ""
lnk.Description = "Start Serge Server"
lnk.WindowStyle = "1"
lnk.WorkingDirectory = scriptdir
lnk.Save
'Clean up
Set lnk = Nothing

WScript.Echo("added link to startup folder (target: " & scriptdir & "\startUp.vbs)")
