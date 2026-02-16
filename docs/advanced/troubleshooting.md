---
sidebar_position: 5
description: Common issues and fixes
---

# Troubleshooting

## Check the Log File

TEdit writes error logs to:

```
%AppData%\TEdit\Logs
```

Open this path in Explorer to find `log.txt`. You can also access it from the menu: **Help > View Log**.

:::tip
If `log.txt` is large, upload it to a paste site (like [pastebin](https://pastebin.com)) when asking for help.
:::

## TEdit won't start

- Make sure **.NET 10 Desktop Runtime** is installed: [Download](https://dotnet.microsoft.com/download/dotnet/10.0)
- Check that your GPU supports **DirectX 11**
- Update your graphics drivers to the latest stable version
- Try running TEdit as administrator
- Open Task Manager (`Ctrl+Shift+Esc`) and check if `TEdit.exe` appears in the process list

## No sprite textures / blank tiles

Terraria must be installed for sprite rendering. If it's installed but textures are missing:

1. Open Settings and check the **Terraria Path** setting
2. Make sure it points to `Terraria\Content` (the folder with `Images/`)
3. Steam default: `Program Files (x86)\Steam\steamapps\common\Terraria\Content`

## World won't open

- Make sure it's an unmodded `.wld` file — TEdit doesn't support tModLoader or TConfig worlds
- Try opening a different world to confirm TEdit works
- Check if the file is corrupted — see [Corrupted World Recovery](corrupted-world-recovery.md)

## Crashes or freezing

- Very large worlds may take time to load — be patient
- Check the log file at `%AppData%\TEdit\Logs\log.txt` for error details
- Try closing other memory-intensive applications
- Update to the latest TEdit version

## Performance is slow

- **Zoom out** — rendering many textures up close is GPU-intensive
- Adjust **Texture Visibility Zoom Level** in Settings to reduce texture rendering at close zoom
- Reduce **Sprite Thumbnail Size** in Settings
- Make sure your graphics drivers are up to date

## Reset TEdit

If nothing else works, try clearing TEdit's cached data:

1. Delete the cache folder: `%AppData%\TEdit`
2. Delete the settings folder: `%LocalAppData%\TEdit`
3. Reinstall TEdit from a fresh [download](https://github.com/TEdit/Terraria-Map-Editor/releases/latest)

## Still stuck?

- Join the [Discord](https://discord.gg/SrwYZU2GDY) and ask for help
- File a [GitHub Issue](https://github.com/TEdit/Terraria-Map-Editor/issues) — include your log file and steps to reproduce

## Can't find a setting

Use the **search bar** at the top of the Settings window to filter settings by name.
