---
description: Drawing and paint mode reference
---

# Paint Modes

The Paint Mode dropdown in the active tray controls what the pencil and brush tools paint. Each mode has its own set of options that appear in the tray when selected.

All paint modes support the **Eraser** toggle (top-left button). When active, drawing removes the selected element type instead of placing it.

## Drawing Controls

These controls apply to all paint modes when using the pencil or brush tool:

| Input | Action |
|-------|--------|
| Left-click drag | Freehand drawing |
| Shift+drag | Draw a straight line from the anchor point to the cursor |
| Shift+click, click, click | Polyline: each click draws a segment from the previous point to the new point. Release Shift to finish. |
| Ctrl+drag | Constrain to horizontal, vertical, or 45° diagonal |

**Shift behavior:** Shift+click (click and release without dragging) advances the start point after each segment, creating a connected polyline. Shift+drag (hold and move) draws a single line from the anchor point — the start does not advance. This makes Shift+click ideal for placing sequential track segments or platform runs point by point.

The Ctrl constraint direction is auto-detected from your initial mouse movement. Once locked, the line stays on that axis until you release.

## Tile and Wall

The default paint mode. Places tiles (blocks) and/or walls simultaneously.

### Tile Options
- **Tile checkbox** — enable/disable tile painting
- **Tile selector** — choose which tile type to place (dirt, stone, etc.)
- **Mask Mode** — control where tiles can be painted:
  - *Disable Mask* — paint anywhere
  - *Edit Empty Tiles* — only paint where no tile exists
  - *Edit Matching Tiles* — only paint over tiles matching the mask type
  - *Not Matching* — only paint over tiles that don't match the mask
- **Mask selector** — the tile type used for mask comparison

### Wall Options
Same structure as tiles but for background walls. Walls exist on a separate layer and don't interfere with tiles.

### Extras
- **Brick Style** — set the block shape: Full, Half Brick, or one of four slope directions
- **Actuator** — place actuators on tiles
- **Inactive** — toggle tiles to their inactive (non-solid) state

### Paint Colors
Apply paint colors to tiles and walls, just like the Painter NPC's paint in-game.

### Coatings
Apply Echo (invisible) or Illuminant (glowing) coatings to tiles and walls.

## Liquid

Places or removes liquids.

- **Liquid Type** — Water, Lava, Honey, Shimmer, or None
- **Liquid Amount** — percentage fill level (25%, 50%, 75%, 100%)

Liquids cannot occupy the same space as solid tiles. When loaded in-game, liquids obey gravity and will flow/settle.

## Wire

Places or removes the four wire colors (Red, Blue, Green, Yellow) and junction boxes.

### Wire Placement
Toggle which wire colors to place. Multiple colors can be active simultaneously since each color is on its own layer.

### Junction Boxes
Junction boxes control how crossing wires interact. Select the junction box type from the dropdown.

### Wire Replace
Replace one wire color with another. Enable the source color checkbox and select the replacement color from the dropdown. Useful for bulk rewiring.

## Track

The Track paint mode handles minecart tracks, boosters, pressure plates, and platforms.

### Sub-Modes

Select the track sub-mode from the dropdown:

| Sub-Mode | Description |
|----------|-------------|
| **Track** | Place minecart tracks with auto-connection. Tracks automatically connect to adjacent tracks, including diagonal slopes. |
| **Booster** | Add speed boosters to existing tracks. Detects slope direction and places the correct uphill/downhill booster variant. Use with Eraser to remove boosters only. |
| **Pressure** | Add pressure plates to existing tracks. Use with Eraser to remove plates only. |
| **Hammer** | Cycle through track switch variants at intersections and endpoints. Changes which direction a track junction routes to. |
| **Platform** | Place platforms with auto-framing. Platforms connect to adjacent platforms horizontally. Use **Ctrl+drag diagonally** to place stair platforms: drag up-right for right-facing stairs, up-left for left-facing stairs. Stair tiles are locked and won't be overwritten by neighbor reframing. Select the platform style from the dropdown to choose the visual variant (Wood, Stone, etc.). |

### Track Drawing Tips

- **Diagonal tracks**: Drag at a 45° angle or use Ctrl+drag to constrain. Track mode uses a thin line algorithm that places exactly one track per tile column, matching Terraria's native slope track pattern.
- **Shift+click polyline**: Hold Shift and click sequentially to draw connected track segments point by point. Click point A, click point B (draws A→B), click point C (draws B→C), and so on. Release Shift when done. Each segment is a separate undo operation.
- **Shift+drag**: Hold Shift and drag to draw a single straight line from the anchor point.
- **Auto-connection**: When you place a track, adjacent tracks automatically update their connections. The track system supports flat, slope-up, and slope-down connections.

### Tunnel Clearing

When in **Track** sub-mode, the **Tunnel** toggle button clears blocks above placed tracks to create minecart clearance.

- **Height slider (H)** — how many blocks above the track to clear (1-10, default 4). A minecart needs about 3-4 blocks of clearance.
- Existing tracks above are preserved (not cleared).
- All cleared tiles are included in the undo buffer.

### Smooth Slopes

The **Smooth** toggle button (requires Tunnel to be enabled) auto-hammers the floor and ceiling blocks at tunnel edges when a slope is detected. This creates polished ramp surfaces instead of blocky stair-steps.

The slope detection uses a 3x3 neighbor check — the same algorithm as the Hammer Area tool — to determine the correct brick style. Both sides of the slope must be clear for the hammer to take effect.

## Sprites (Eraser Only)

The Sprites paint mode is erase-only. It removes placed sprites (furniture, trees, decorations, etc.) without affecting underlying tiles or walls. The eraser is automatically enabled when this mode is selected.

To **place** sprites, use the dedicated [Sprite Tool](toolbar.md) from the toolbar instead.
