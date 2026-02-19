---
sidebar_position: 5
description: Brush size, shape, spray mode, and outline settings
---

# Brush Settings

The brush settings panel appears in the action bar when using the Brush, Morph, or Hammer tools.

![Brush Size Options](/img/v5/interface/brush-size-options.png)

## Size

- **Width** — 1 to 400 tiles (default: 20)
- **Height** — 1 to 400 tiles (default: 20)
- **Lock** — Lock width and height together so they stay equal

Use the sliders or type a number directly.

## Shape

| Shape | Description |
|-------|-------------|
| Square | Rectangular brush |
| Ellipse | Oval/circle brush |
| Diagonal Right | Right-leaning diagonal |
| Diagonal Left | Left-leaning diagonal |
| Star | Five-pointed star shape |
| Triangle | Triangle shape |
| Crescent | Crescent/moon shape |
| Donut | Ring shape (filled ring, hollow center) |

## Shape Transforms

After selecting a shape you can apply transforms to it:

| Transform | Description |
|-----------|-------------|
| **Rotation** | Rotate the shape by a set number of degrees |
| **Flip Horizontal** | Mirror the shape left-to-right |
| **Flip Vertical** | Mirror the shape top-to-bottom |

Transforms are especially useful with asymmetric shapes like Triangle and Crescent.

## Outline

When outline mode is enabled, only the border of the shape is painted, creating hollow shapes.

- **Outline thickness** — 1 to half the smallest dimension
- Toggle outline on/off with the checkbox

## Spray Mode

Spray mode makes the brush apply paint on a timer interval rather than only when the mouse moves. This creates a spray paint effect — holding the mouse button in place continues to apply paint at a set rate.

- **Enable** — Toggle the spray timer on/off with the Spray checkbox
- **Interval** — Set the time between spray applications in milliseconds (lower = faster spray)

:::tip
Spray mode is useful for creating random or textured fills — combine it with masks to limit where paint lands.
:::
