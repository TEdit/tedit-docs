---
sidebar_position: 2
---

# Troubleshooting

## Step 1: Check the Error Log

Logs are located in `%appdata%\TEdit\Logs`

![Logs Path](/img/troubleshooting_logs_path.png)

## Step 2: Check Requirements

* Check the [Install Requirements](../install-requirements.md) page for the requirements to run the editor.
* If installing from a zip and not an installer, be sure you extracted all the contents of the zip file.
* Make sure you have the latest version.
* If you have a blank window, try re-installing Terraria through Steam.
* Open task manager (CTRL+SHIFT+ESC), switch to the processes tab, sort by name and watch for TEdit.exe to verify the process starts.

## Step 3: Delete Cache

1. Delete the cache folder `%appdata%\tedit`
2. Delete the settings folder `%localappdata%\tedit`
3. Delete the folder you have unzipped TEdit into and download a fresh copy from [releases](https://github.com/TEdit/Terraria-Map-Editor/releases).
4. Unzip the new download into an empty folder, such as `c:\games\tedit`.

## Step 4: Discord or GitHub Issue

Join the [Discord Support Channel](https://discord.gg/SrwYZU2GDY) and ask for help!

If it still doesn't work, create a ticket with the contents/link of your error log on [GitHub](http://github.com/BinaryConstruct/Terraria-Map-Editor/issues).

Include in your ticket any further information you can give that leads up to the problem as this may help narrow down the issue.

You can find your log through TEdit's View Log option under Help, or in the `%appdata%\TEdit\Logs`. If the contents of `log.txt` is quite large it may be more useful to upload it to one of the paste sites.
