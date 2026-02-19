---
sidebar_position: 7
description: Hide or grayscale tile layers for clearer editing
---

# Filter

The Filter panel lets you hide or dim specific tile types so you can focus on what you're editing.

![Filter Panel](/img/v5/sidebar-panels/sidebar-filter.png)

## Filter Modes

| Mode | Effect |
|------|--------|
| **Hide** | Selected types become invisible |
| **Grayscale** | Selected types render in gray, making unfiltered tiles stand out |

## Background Modes

Control the map background appearance while filtering:

| Mode | Effect |
|------|--------|
| Normal | Standard background |
| Transparent | See-through background |
| Custom | Pick a custom background color |

## Filter Tabs

Select which layer types to filter:

- **Tiles** — Filter specific tile types
- **Walls** — Filter wall types
- **Liquids** — Filter water, lava, honey, shimmer
- **Wires** — Filter wire colors
- **Sprites** — Filter furniture and decorations

## Usage

1. Choose a **Filter Mode** (Hide or Grayscale)
2. Select a **Background Mode**
3. Check the items you want to filter in the tabs
4. Click **Apply**
5. Click **Disable** to restore normal view

![Filter Preview](/img/v5/sidebar-panels/sidebar-filter-preview.png)

:::tip
**Filter Clipboard** — When enabled, clipboard paste previews also respect the active filters.
:::

## Pixelmap

The Pixelmap feature renders the entire world as a color-coded image for analysis. It supports three color modes:

| Color Mode | Description |
|------------|-------------|
| **Normal** | Renders tiles using their standard map colors — the same colors you see on the in-game minimap |
| **Biome** | Colors each tile based on the biome it belongs to (Corruption, Crimson, Hallow, Jungle, Snow, Desert, etc.) — useful for visualizing biome spread and distribution |
| **Height** | Colors tiles based on their vertical position — a gradient from surface to underground to cavern, making depth and terrain shape easy to read |

Select the mode from the Pixelmap section in the Filter panel, then click **Render** to generate the view. The pixelmap is a snapshot — re-render after making edits to update it.
