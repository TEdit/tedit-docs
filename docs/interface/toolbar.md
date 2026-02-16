---
sidebar_position: 2
description: Tool selector — all editing tools
---

# Toolbar

The toolbar is on the left side of the editor. Select a tool, then interact with the map canvas.

![Toolbar](/img/v5/interface/toolbar-all-labeled.png)

## Arrow Tool `[A]`

The default cursor tool. Use it to inspect tiles without making changes.

| Action | Result |
|--------|--------|
| Hover | Shows tile info in the [status bar](status-bar.md) |
| Right-click | Opens chest, sign, or tile entity editor |

## Selection Tool `[S]`

Draw a rectangle selection on the map.

| Action | Result |
|--------|--------|
| Left-click + drag | Select area |
| Shift + left-click + drag | Expand selection |
| Right-click or `Ctrl+D` | Clear selection |
| Ctrl + right-click | Restore cleared selection |
| `Ctrl+C` | Copy selection to [clipboard](../sidebar-panels/clipboard.md) |

While a selection is active, painting is restricted to inside the selection.

## Picker Tool `[R]`

Also known as the eyedropper. Picks tile/wall/liquid properties from the map.

| Action | Result |
|--------|--------|
| Left-click | Pick tile, wall, and liquid |
| Right-click | Pick as mask |

**Hold-to-pick:** Hold `R` to temporarily switch to the Picker, pick a tile, then release `R` to return to your previous tool. A quick tap of `R` switches to Picker permanently.

## Pencil Tool `[E]`

Places one tile at a time. Great for fine detail work.

| Action | Result |
|--------|--------|
| Left-click + drag | Freehand draw |
| Shift + left-click | Straight line between two points |
| Right-click + drag | Horizontal line |
| Left + right-click + drag | Vertical line |

## Brush Tool `[B]`

Paints with a configurable brush size and shape. See [Brush Settings](brush-settings.md).

Same drawing controls as the Pencil tool, but affects an area based on brush size.

## Fill Tool `[F]`

Flood fills connected tiles of the same type.

| Action | Result |
|--------|--------|
| Left-click | Fill connected matching tiles |
| Left-click in selection | Fill limited to selection area |

## Point Tool `[P]`

Places spawn points and NPC home locations.

![Special Interest Points](/img/v5/interface/special-interest-points.png)

Select a point type from the dropdown (Spawn, Dungeon, NPC homes, Team spawns), then left-click on the map to place it.

## Sprite Tool `[T]`

Places furniture, decorations, and other multi-tile sprites.

| Action | Result |
|--------|--------|
| Left-click | Place sprite |
| Left-click + drag | Draw 1x1 sprites in a line |

Use the [Sprites sidebar](../sidebar-panels/sprites.md) to pick the sprite type and style.

## Morph Tool

Converts tiles and walls to a selected biome type.

![Morph Options](/img/v5/interface/morph-tool-options.png)

Only affects existing tiles — doesn't fill empty space. Behavior changes with depth (sky, dirt, rock, hell layers).

Options:
- **Target Biome** — Purify, Corruption, Crimson, Hallow, etc.
- **Base Tiles** / **Evil Tiles** / **Moss** / **Sprites** — Toggle what gets converted

## Hammer Tool

Area-based hammer tool. Applies hammer actions across the brush area. Uses the same brush size/shape as the Brush tool.
