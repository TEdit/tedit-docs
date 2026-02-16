---
sidebar_position: 1
description: What changed from TEdit 4 to TEdit 5
---

# Upgrading from TEdit 4

TEdit 5 is a major rewrite with a modernized UI and new features. Here's what changed.

## New Features

| Feature | Description |
|---------|-------------|
| **Fluent Design** | Modern dark-mode UI built on WPF-UI |
| **Scripting** | JavaScript and Lua scripting engine with full world API |
| **Find Panel** | Search worlds for items, tiles, walls, sprites |
| **Filter Panel** | Hide or grayscale tile layers |
| **Localization** | 13 language translations |
| **Auto-Update** | Built-in update system with Stable/Beta/Alpha channels |
| **Modernized Settings** | Searchable, categorized settings window |
| **Hammer Tool** | New area-based hammer tool |
| **World Analysis** | World statistics sidebar |

## UI Changes

- **Toolbar** — Same tools, refreshed icons. The vertical toolbar remains on the left.
- **Active Tray → Action Bar** — The top option bar has been redesigned but works the same way.
- **Sidebar Tools → Sidebar Panels** — Right-side panels are now tabbed. New panels added (Find, Filter, Scripting).
- **Settings** — Moved from XML-based config to a modern settings window with search.
- **Plugins → Scripting** — The old plugin system is replaced by the scripting engine. See the [Scripting Guide](../advanced/scripting-guide.md).

## Runtime Changes

| | TEdit 4 | TEdit 5 |
|---|---------|---------|
| **Framework** | .NET Framework 4.8 | .NET 10 |
| **DirectX** | DirectX 11 | DirectX 11 |
| **OS** | Windows 10 x64 | Windows 10/11 x64 |

## Schematic Compatibility

TEdit 5 can open `.TEditSch` schematic files from TEdit 4. Your existing schematics should work without changes.

## Settings Migration

TEdit 5 uses a new settings format. Your TEdit 4 `settings.xml` is not automatically migrated. Reconfigure your preferences in the new Settings window.
