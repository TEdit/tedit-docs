---
sidebar_position: 5
description: Common issues and fixes
---

# Troubleshooting

## TEdit won't start

- Make sure **.NET 9 Desktop Runtime** is installed: [Download](https://dotnet.microsoft.com/download/dotnet/9.0)
- Check that your GPU supports **DirectX 11**
- Update your graphics drivers to the latest stable version
- Try running TEdit as administrator

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
- Check the log file for error details (located in the TEdit installation folder)
- Try closing other memory-intensive applications
- Update to the latest TEdit version

## Performance is slow

- **Zoom out** — rendering many textures up close is GPU-intensive
- Adjust **Texture Visibility Zoom Level** in Settings to reduce texture rendering at close zoom
- Reduce **Sprite Thumbnail Size** in Settings
- Make sure your graphics drivers are up to date

## Can't find a setting

Use the **search bar** at the top of the Settings window to filter settings by name.
