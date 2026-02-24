---
sidebar_position: 4
description: Highlight reel of major features in TEdit 5
---

# What's New in TEdit 5

TEdit 5 is a ground-up rewrite of the Terraria Map Editor — new rendering engine, modern UI, and a wave of new editing tools. Here are the highlights.

---

## Modern UI & Localization

TEdit 5 features a **Fluent Design** interface with native dark mode. The UI is translated into **13 languages** with community translations managed via Crowdin. Built-in **auto-update** keeps you current across Stable, Beta, and Alpha release channels.

![TEdit 5 UI](/img/v5/interface/TEdit_sNWvexY0S7.png)

[Settings](configuration/settings.md) | [Localization](configuration/localization.md) | [Auto-Update](advanced/auto-update.md)

---

## Scripting Engine

Write **JavaScript** or **Lua** scripts to automate world edits. The scripting API gives you full access to tiles, walls, liquids, wires, chests, signs, NPCs, and more. Batch-process thousands of tiles, search for items, generate structures — if you can describe it, you can script it.

![Scripting Panel](/img/v5/sidebar-panels/sidebar-scripting-example.png)

Built-in AI assistants for ChatGPT, Claude, and Gemini can help you write scripts from a plain English description.

[Scripting Guide](advanced/scripting-guide.md) | [API Reference](advanced/api-reference.md)

---

## CAD-Style Wire Routing

No more freehand wire painting. Wire routing mode gives you click-to-click CAD-style wire drawing with **90° elbow** and **45° miter** routing. Click an anchor, click a destination, and the editor calculates a clean routed path.

![Wire Routing](/img/v5/interface/wire-routing.png)

The **Brush tool** adds **bus routing** — draw multiple parallel wires filling the brush width with proper spacing. Toggle wire colors with number keys `1`–`4`.

![Bus Routing](/img/v5/interface/bus-routing.png)

[Wire Routing Guide](interface/wire-routing.md)

---

## Floating Paste with Drag & Resize

Paste operations now create a **floating preview layer** before committing. Move it by dragging, resize it by pulling corner or edge handles, and rotate or flip with keyboard shortcuts — all before a single tile is placed.

![Floating Paste](/img/v5/interface/paste.png)

Editable X, Y, W, and H fields in the paste toolbar give you pixel-perfect control. Resizing uses nearest-neighbor tile resampling so your builds scale cleanly.

[Clipboard & Floating Paste](sidebar-panels/clipboard.md#floating-paste)

---

## Advanced Brush System

Eight brush shapes — Square, Ellipse, Diagonal, Star, Triangle, Crescent, and Donut — with **rotation**, **flip**, and **outline** transforms. Spray mode applies paint on a timer for texture effects.

![Brush Settings](/img/v5/interface/brush-size-options.png)

[Brush Settings](interface/brush-settings.md)

---

## Morph Tool

Convert entire regions to a different biome with one stroke. Select a target biome (Purify, Corruption, Crimson, Hallow, Mushroom, etc.) and paint over existing terrain. Toggles let you control what gets converted: base tiles, evil tiles, moss, and sprites.

![Morph Tool](/img/v5/interface/morph-tool-options.png)

[Morph Tool](interface/toolbar.md#morph-tool)

---

## Find & Filter Panels

**Find** searches your entire world for items in chests, placed tiles, walls, or sprites. Jump between results on the map with Prev/Next.

![Find Panel](/img/v5/sidebar-panels/sidebar-search-find.png)

**Filter** hides or grayscales specific tile types so you can focus on what you're editing. Supports hide mode, grayscale mode, and custom background colors.

![Filter Panel](/img/v5/sidebar-panels/sidebar-filter-preview.png)

[Find Panel](sidebar-panels/find.md) | [Filter Panel](sidebar-panels/filter.md)

---

## Polyline Drawing

Hold **Shift** and click successive points to draw connected straight line segments. Each click anchors the end of one segment and starts the next. Works with the Pencil, Brush, and Morph tools — great for building straight walls, paths, and outlines without freehand wobble.

[Polyline Drawing](interface/toolbar.md#polyline-drawing-shiftclick)
