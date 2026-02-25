---
sidebar_position: 1.5
description: Tile and wall picker with mask configuration
---

# Palette

The Palette panel provides a browsable view of all available tiles and walls, along with mask configuration for controlling where paint operations take effect.

## Tile Picker

![Palette — Tile Picker](/img/v5/interface/palette-tile.png)

Browse and select tiles and walls from categorized lists. The selected tile and wall are used by the Pencil, Brush, and Fill tools in Tile/Wall paint mode.

- **Search** — Filter tiles or walls by name
- **Tile selector** — Click to set the active tile type
- **Wall selector** — Click to set the active wall type

The selected tile/wall ID is also shown in the action bar dropdowns. Changes in the Palette panel are reflected in the action bar and vice versa.

## Masks

![Palette — Masks](/img/v5/interface/palette-mask.png)

Masks restrict where painting operations take effect. The Palette panel provides dedicated mask controls for both tiles and walls.

### Tile Mask

| Mode | Effect |
|------|--------|
| **Disable Mask** | Paint tiles anywhere |
| **Edit Empty** | Only place tiles in empty space |
| **Edit Matching** | Only replace tiles matching the mask type |

Set the tile mask type from the dropdown — it lists all available tile types.

### Wall Mask

| Mode | Effect |
|------|--------|
| **Disable Mask** | Paint walls anywhere |
| **Edit Empty** | Only place walls in empty space |
| **Edit Matching** | Only replace walls matching the mask type |

Set the wall mask type from the dropdown — it lists all available wall types.

:::tip
Use the [Picker tool](../interface/toolbar.md#picker-tool-r) and right-click a tile on the map to quickly set it as the mask type.
:::
