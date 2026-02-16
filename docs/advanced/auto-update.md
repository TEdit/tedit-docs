---
sidebar_position: 4
description: Update channels and automatic updates
---

# Auto-Update

TEdit 5 uses Velopack for automatic updates directly from GitHub releases.

## Update Channels

| Channel | Description |
|---------|-------------|
| **Stable** | Tested releases — recommended for most users |
| **Beta** | Preview features, may have minor bugs |
| **Alpha** | Bleeding edge, expect rough edges |

## How It Works

1. On startup, TEdit checks for new releases (if enabled)
2. If an update is available, you'll be prompted to download
3. After downloading, click **Apply and Restart** to install

## Changing Channel

1. Open **Edit > Settings**
2. Find **Update Channel**
3. Select Stable, Beta, or Alpha
4. TEdit will check the selected channel for updates

:::info
Switching from a higher channel (Alpha/Beta) to a lower one (Stable) may require a downgrade if you're on a newer pre-release version.
:::

## Disabling Updates

Toggle **Check Updates** off in Settings to disable automatic update checks. You can always download releases manually from [GitHub](https://github.com/TEdit/Terraria-Map-Editor/releases).
