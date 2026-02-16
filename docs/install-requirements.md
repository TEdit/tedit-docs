---
sidebar_position: 2
---

# Install Requirements

Download the latest release from [https://github.com/TEdit/Terraria-Map-Editor/releases/latest](https://github.com/TEdit/Terraria-Map-Editor/releases/latest).

:::info
On Mac, Linux, or Mobile? Try the browser editor at [https://www.terraria-map-editor.com](https://www.terraria-map-editor.com).
:::

## Installation

1. Download the `TEdit-x.x.x-win-x64.zip` from the latest release
2. Unzip to an empty folder with write access, such as `C:\Games\TEdit`
3. Launch `TEdit.exe`

:::warning
Delete old versions from the folder before extracting a new release.
:::

## Requirements

- **Windows 10/11 x64** (earlier versions are not supported)
- **.NET 9 Desktop Runtime** — [Download here](https://dotnet.microsoft.com/download/dotnet/9.0)
- **DirectX 11** compatible GPU with up-to-date drivers

## Sprite Viewing

For sprite/texture rendering, Terraria must be installed or its content files must be accessible:

- **Steam**: `Program Files (x86)\Steam\steamapps\common\Terraria\Content`
- **GOG**: Check your GOG install directory

If Terraria isn't installed locally, TEdit still works — you just won't see sprite previews. You can point to a custom content path in [Settings](configuration/settings.md).

## Known Limitations

- Not compatible with modded world files (tModLoader, TConfig)
- Sprite textures require a Steam or GOG copy of Terraria
- Some older integrated graphics may have rendering issues
