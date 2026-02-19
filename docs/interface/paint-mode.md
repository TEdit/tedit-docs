---
sidebar_position: 4
description: Tile, wall, wire, liquid, track, platform, and sprite paint modes
---

# Paint Mode

The paint mode dropdown controls what the Pencil, Brush, and Fill tools affect. Switch modes to paint different layer types.

## Tile/Wall Mode

![Tile Mode](/img/v5/interface/brush-tile-mode-options.png)

The default mode. Select a tile type and/or wall type from the dropdowns. The ID number is shown next to each selection.

**Eraser toggle** — When enabled (highlighted), painting removes tiles/walls instead of placing them.

### Masks

Masks control *where* painting takes effect:

| Mask Mode | Effect |
|-----------|--------|
| Disable Mask | Paint anywhere |
| Edit Empty | Only paint over empty space |
| Edit Matching | Only paint over tiles/walls matching the mask type |

Set the mask type in the Mask dropdown — it has the same tile/wall options as the main selector.

### Coatings

You can also apply paint colors and coatings (Echo, Illuminant, Full Bright) to tiles and walls.

## Wire Mode

![Wire Mode](/img/v5/interface/brush-wire-mode-options.png)

Place or remove wires. Select which wire color(s) to paint: Red, Blue, Green, Yellow. You can also place actuators in this mode.

## Liquid Mode

![Liquid Mode](/img/v5/interface/brush-liquid-mode-options.png)

Place or remove liquids: Water, Lava, Honey, Shimmer.

## Platform Mode

Place platform stairs diagonally. When Platform paint mode is active, hold **Ctrl** and paint diagonally to create stair-step platform runs automatically.

| Action | Result |
|--------|--------|
| Paint normally | Place individual platforms |
| `Ctrl` + diagonal drag | Place a diagonal stair run of platforms |

This works with the Pencil and Brush tools. The stair direction follows the drag direction (up-right, down-right, up-left, down-left).

## Track Mode

![Track Mode](/img/v5/interface/brush-track-mode-options.png)

Place minecart tracks and related components:

| Track Type | Description |
|-----------|-------------|
| Track | Standard minecart rail |
| Booster | Speed booster track |
| Pressure Plate | Track-mounted pressure plate |
| Hammer | Cycles track junctions |

### Track Sub-modes

Two additional sub-modes automate common track patterns:

| Sub-mode | Description |
|----------|-------------|
| **Tunnel** | Automatically carves out a tunnel while placing track — removes tiles above and below to create a clear path for the minecart |
| **Smooth** | Places track with gentle curves and transitions instead of hard corners, producing smoother-looking rail lines |

Select the sub-mode from the track options in the action bar while Track Mode is active.

## Sprite Mode

![Sprite Mode](/img/v5/interface/brush-sprite-mode-options.png)

Used with the Sprite tool. Select sprites from the [Sprites sidebar panel](../sidebar-panels/sprites.md).
