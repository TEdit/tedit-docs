---
sidebar_position: 6
description: CAD-style wire routing for precise wiring with the Pencil and Brush tools
---

# Wire Routing

Wire routing mode provides CAD-style click-to-click wire drawing. Instead of freehand painting, you click an anchor point and then click a destination — the editor calculates a clean routed path between the two points.

Wire routing works with both the **Pencil Tool** (single wire) and the **Brush Tool** (multi-wire bus).

## Entering Wire Mode

| Shortcut | Action |
|----------|--------|
| `Shift+W` | Cycle wire mode: Off → 90° Elbow → 45° Miter → Off |
| `Shift+Q` | Cycle direction override: Auto → Horizontal-first → Vertical-first → Auto |
| `Escape` | Cancel current anchor (stays in wire mode) or exit wire mode entirely |

Wire mode works when **Wire** paint mode is selected. The status bar shows the current routing mode and direction.

## Wire Color Shortcuts

While in wire paint mode, press a number key to toggle the corresponding wire color:

| Key | Wire Color |
|-----|------------|
| `1` | Red |
| `2` | Blue |
| `3` | Green |
| `4` | Yellow |

These shortcuts are always active in wire paint mode, whether or not wire routing is enabled.

## Single Wire Routing (Pencil Tool)

Select the **Pencil Tool** `[E]` and enter wire mode with `Shift+W`.

![Wire Routing](/img/v5/interface/wire-routing.png)

1. **First click** — Sets the anchor point (shown as a bright marker)
2. **Move the mouse** — A preview path appears showing the routed wire
3. **Second click** — Commits the wire and chains the anchor to the new endpoint
4. **Right-click** — Cancels the current anchor without committing

The anchor chains automatically: after committing a segment, the endpoint becomes the new anchor for the next segment. This lets you draw polyline wire runs with precise corners.

### Routing Modes

| Mode | Path Shape | Description |
|------|-----------|-------------|
| **90° Elbow** | L-shaped | Straight run on one axis, then a 90° turn to the destination |
| **45° Miter** | Straight–diagonal–straight | Straight run, staircase diagonal section, then straight run to destination |

All paths are **4-connected** — every tile shares an edge with its neighbor (no diagonal-only connections). This ensures wires function correctly in Terraria.

### Direction Override

The direction override (`Shift+Q`) controls which axis runs first:

| Setting | Behavior |
|---------|----------|
| **Auto** | Picks vertical-first when the angle is steeper than 45°, horizontal-first otherwise |
| **Horizontal-first** `↔` | Horizontal leg first, then vertical |
| **Vertical-first** `↕` | Vertical leg first, then horizontal |

## Bus Routing (Brush Tool)

Select the **Brush Tool** `[B]`, set a brush size larger than 1×1, and enter wire mode with `Shift+W`.

![Bus Routing](/img/v5/interface/bus-routing.png)

Bus routing draws **multiple parallel wires** that fill the brush area. The number of wires and their spacing are calculated from the brush width and height.

1. **First click** — Sets the bus anchor at the brush center
2. **Move the mouse** — Preview shows all parallel wire paths
3. **Second click** — Commits all wires and chains the anchor

### Wire Spacing

| Routing Mode | Wire Spacing | Gap Between Wires |
|-------------|-------------|-------------------|
| 90° Elbow | 2 tiles | 1 tile gap |
| 45° Miter | 3 tiles | 2 tile gap |

The wider spacing in miter mode prevents the staircase patterns from touching on the sides.

### Bus Layout

- **Wire count** is determined by the brush dimensions and spacing
- Wires are **centered** within the brush area
- **Start positions** are placed at the opposite edge of the brush from the movement direction
- **End positions** are spread along the perpendicular axis at the destination, ensuring no two wires overlap or cross at turns
- A **1×1 brush** falls through to single-wire routing, identical to the Pencil tool

:::tip
Use the direction override (`Shift+Q`) to control whether bus wires run horizontally or vertically first. This determines which edge of the brush the wires start from and which edge they arrive at.
:::

## Scripting API

Wire routing is also available through the [scripting API](../advanced/api-reference.md#wire-routing). Use `draw.routeWire()` for single wires and `draw.routeBus()` for parallel buses:

```javascript
// Route red wire with 90° elbow
draw.setWire(true, false, false, false);
draw.routeWire(100, 200, 150, 220, '90', 'h');

// Route 4 parallel green wires with 45° miter
draw.setWire(false, false, true, false);
draw.routeBus(4, 100, 200, 200, 250, '45', 'auto');
```
