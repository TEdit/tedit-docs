---
sidebar_position: 3
description: Auto-save and backup management
---

# Saves and Backups

:::danger
**Always back up your world files before editing!** TEdit modifies world files directly.
:::

## Saving

- **Save** (`Ctrl+S`) — Overwrites the currently open world file
- **Save As** (`Ctrl+Shift+S`) — Save to a new file location

## Auto-Save

When enabled in [Settings](settings.md), TEdit periodically saves your work automatically. This protects against crashes and accidental data loss.

## Automatic TEdit Backups

TEdit automatically creates a `.TEdit` backup of your world file every time you save. Backups rotate with numbered suffixes — `.TEdit`, `.TEdit.2`, `.TEdit.3`, and so on — so you always have multiple recent restore points.

| Setting | Description |
|---------|-------------|
| **MaxBackups** | How many `.TEdit` backup files to keep per world (default: 10). Configure in [Settings](settings.md). |

When the backup count exceeds MaxBackups, the oldest backup is deleted automatically. Set MaxBackups to `0` to disable automatic backups.

### Finding Backups

Backup files are stored in the same folder as the world file. They also appear in the **World Browser**:

- `.TEdit` files show as **"TEdit Backup"**
- `.bak` files (Terraria's own backups) show as **"Terraria Backup"**

You can open any backup file directly from the World Browser.

## Manual Backup Tips

- Keep a copy of your original `.wld` file before editing
- Terraria world files are located at: `Documents\My Games\Terraria\Worlds`
- Use **Save As** to create named versions of your edits (e.g., `MyWorld-v2.wld`)
- Consider using the [Clipboard](../sidebar-panels/clipboard.md) to export schematics of important builds

## Undo / Redo

TEdit supports undo (`Ctrl+Z`) and redo (`Ctrl+Y`) for most operations. The undo history is stored in memory and is lost when you close the editor.
