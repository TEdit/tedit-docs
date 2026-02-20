---
sidebar_position: 1
description: Writing JavaScript and Lua scripts — API reference
---

# Scripting Guide

TEdit 5 includes a built-in scripting engine for automating world edits. Write scripts in **JavaScript** (Jint) or **Lua** to batch-process tiles, search worlds, fill areas, and more.

## AI Script Assistant

Use an AI chatbot to help you write TEdit scripts. Click one of the links below to open a chat, or copy the prompt and paste it into your preferred assistant.

export const aiPrompt = `You are a TEdit 5 scripting assistant. TEdit is a Terraria world editor with a built-in JavaScript (Jint) scripting engine.\n\nAPI documentation: https://docs.tedit.dev/advanced/scripting-guide\nTile/wall/item data files: https://github.com/TEdit/Terraria-Map-Editor/tree/main/src/TEdit.Terraria/Data (tiles.json, walls.json, items.json, npcs.json, prefixes.json, paints.json, etc.)\n\nKey API objects:\n- tile: read/write individual tiles (getTileType, setType, setWall, setLiquid, etc.)\n- batch: bulk operations (forEachTile, replaceTile, findTilesByType, etc.)\n- geometry: shape helpers (line, rect, ellipse, fillRect, fillEllipse, setTiles, setWalls)\n- selection: current selection bounds and point-in-selection test\n- chests: chest inventory read/write\n- signs: sign text read/write\n- npcs: NPC management\n- world: read-only world metadata (width, height, title, seed, spawnX, spawnY)\n- metadata: name/ID lookups (tileId, wallId, itemId, tileName, wallName, itemName)\n- log: output (print, warn, error, progress)\n- finder: add results to the Find sidebar panel\n- tools: UI tool access\n\nWhen writing scripts:\n- Use metadata.tileId("name") and metadata.wallId("name") to look up IDs by name\n- Always check selection.isActive before using selection-based operations\n- Use log.print() for output and log.progress() for long operations\n- Scripts have full access to the loaded world data\n- Framed tiles can be shifted UV coordinates to become another style of the same item (e.g. platforms, banners, chests). Check tiles.json for frame UV values.\n\nHelp the user write JavaScript scripts for TEdit. Ask what they want to accomplish and generate working scripts.`;

<div className="ai-buttons">
  <a className="ai-btn ai-btn--chatgpt" href="https://chatgpt.com/g/g-6998742288b481919bfd63193f833e92-tedit-api-assistant" target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
    TEdit API Assistant (GPT)
  </a>
  <a className="ai-btn ai-btn--chatgpt" href={`https://chatgpt.com/?q=${encodeURIComponent(aiPrompt)}`} target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
    ChatGPT
  </a>
  <a className="ai-btn ai-btn--claude" href="https://claude.ai/new" target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"/></svg>
    Claude
  </a>
  <a className="ai-btn ai-btn--gemini" href="https://gemini.google.com/app" target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/></svg>
    Gemini
  </a>
</div>

<details>
<summary>Copy prompt for Claude or Gemini</summary>

Since Claude and Gemini don't support URL-based prompt prefill, copy the prompt below and paste it to start your chat:

```text
You are a TEdit 5 scripting assistant. TEdit is a Terraria world editor with a
built-in JavaScript (Jint) scripting engine.

API documentation: https://docs.tedit.dev/advanced/scripting-guide
Tile/wall/item data files:
https://github.com/TEdit/Terraria-Map-Editor/tree/main/src/TEdit.Terraria/Data
(tiles.json, walls.json, items.json, npcs.json, prefixes.json, paints.json, etc.)

Key API objects:
- tile: read/write individual tiles (getTileType, setType, setWall, setLiquid, etc.)
- batch: bulk operations (forEachTile, replaceTile, findTilesByType, etc.)
- geometry: shape helpers (line, rect, ellipse, fillRect, fillEllipse, setTiles, setWalls)
- selection: current selection bounds and point-in-selection test
- chests: chest inventory read/write
- signs: sign text read/write
- npcs: NPC management
- world: read-only world metadata (width, height, title, seed, spawnX, spawnY)
- metadata: name/ID lookups (tileId, wallId, itemId, tileName, wallName, itemName)
- log: output (print, warn, error, progress)
- finder: add results to the Find sidebar panel
- tools: UI tool access

When writing scripts:
- Use metadata.tileId("name") and metadata.wallId("name") to look up IDs by name
- Always check selection.isActive before using selection-based operations
- Use log.print() for output and log.progress() for long operations
- Scripts have full access to the loaded world data
- Framed tiles can be shifted UV coordinates to become another style of the same item
  (e.g. platforms, banners, chests). Check tiles.json for frame UV values.

Help me write a JavaScript script for TEdit that:
```

</details>

## Basics

Scripts run with full access to the loaded world data. The [Scripting sidebar](../sidebar-panels/scripting.md) provides a code editor with syntax highlighting, script management, and an output log.

### Hello World

```javascript
log.print("Hello from TEdit scripting!");
log.print(`World: ${world.title} (${world.width}x${world.height})`);
```

```lua
log.print("Hello from TEdit scripting!")
log.print("World: " .. world.title)
```

## Common Recipes

### Replace tiles in selection

```javascript
if (!selection.isActive) {
  log.error("Select an area first!");
}

const from = metadata.tileId("Dirt Block");
const to = metadata.tileId("Stone Block");
const count = batch.replaceTileInSelection(from, to);
log.print(`Replaced ${count} tiles`);
```

### Fill a rectangle with walls

```javascript
geometry.setWalls(metadata.wallId("Stone Wall"), 100, 200, 50, 30);
log.print("Filled 50x30 area with stone walls");
```

### Find all chests containing a specific item

```javascript
const chests = chests.findByItemName("Zenith");
for (const c of chests) {
  log.print(`Found at (${c.x}, ${c.y}): ${c.name || "Chest"}`);
  finder.addResult("Zenith Chest", c.x, c.y, "chest");
}
log.print(`Found ${chests.length} chests with Zenith`);
```

### Draw a circle of tiles

```javascript
const points = geometry.fillEllipse(500, 300, 25, 25);
const tileType = metadata.tileId("Glass Block");
for (const p of points) {
  tile.setType(p.x, p.y, tileType);
}
log.print(`Placed ${points.length} glass tiles`);
```

### Clear all of a tile type

```javascript
const count = batch.clearTilesByType(metadata.tileId("Sand Block"));
log.print(`Cleared ${count} sand blocks`);
```

### Show progress for long operations

```javascript
const total = world.width * world.height;
let processed = 0;

batch.forEachTile((x, y) => {
  // ... your logic here ...
  processed++;
  if (processed % 100000 === 0) {
    log.progress(processed / total);
  }
});
log.progress(1.0);
log.print("Done!");
```

---

## API Reference

### `tile` — Tile Read/Write

| Method | Description |
|--------|-------------|
| `isActive(x, y) → bool` | Check if tile is active |
| `getTileType(x, y) → int` | Get tile type ID |
| `getWall(x, y) → int` | Get wall type ID |
| `getPaint(x, y) → int` | Get tile paint color |
| `getWallPaint(x, y) → int` | Get wall paint color |
| `getLiquidAmount(x, y) → int` | Get liquid amount (0–255) |
| `getLiquidType(x, y) → int` | Get liquid type (0=none, 1=water, 2=lava, 3=honey) |
| `getFrameU(x, y) → int` | Get sprite frame U |
| `getFrameV(x, y) → int` | Get sprite frame V |
| `getSlope(x, y) → string` | Get slope type |
| `getWire(x, y, color) → bool` | Check wire (1=red, 2=blue, 3=green, 4=yellow) |
| `setActive(x, y, active)` | Set tile active state |
| `setType(x, y, type)` | Set tile type (activates tile) |
| `setWall(x, y, wallType)` | Set wall type |
| `setPaint(x, y, color)` | Set tile paint color |
| `setWallPaint(x, y, color)` | Set wall paint color |
| `setLiquid(x, y, amount, type)` | Set liquid amount and type |
| `setWire(x, y, color, enabled)` | Set wire state |
| `setSlope(x, y, slope)` | Set slope (None, HalfBrick, SlopeTopRight, etc.) |
| `setFrameUV(x, y, u, v)` | Set sprite frame coordinates |
| `clear(x, y)` | Reset tile to empty |
| `copy(fromX, fromY, toX, toY)` | Copy tile properties |

### `batch` — Bulk Operations

| Method | Description |
|--------|-------------|
| `forEachTile(callback)` | Iterate entire world — `callback(x, y)` |
| `forEachInSelection(callback)` | Iterate selection — `callback(x, y)` |
| `findTiles(predicate) → [{x, y}]` | Find tiles matching predicate (max 10,000) |
| `findTilesByType(type, anchorOnly?) → [{x, y}]` | Find by type; anchorOnly returns sprite origins |
| `findTilesByWall(wallType) → [{x, y}]` | Find by wall type (max 10,000) |
| `replaceTile(from, to) → int` | Replace all tiles of one type |
| `replaceTileInSelection(from, to) → int` | Replace in selection only |
| `replaceWall(from, to) → int` | Replace all walls of one type |
| `clearTilesByType(type) → int` | Clear all tiles of type |

### `geometry` — Shapes

| Method | Description |
|--------|-------------|
| `line(x1, y1, x2, y2) → [{x, y}]` | Line coordinates |
| `rect(x, y, w, h) → [{x, y}]` | Rectangle outline |
| `ellipse(cx, cy, rx, ry) → [{x, y}]` | Ellipse outline |
| `fillRect(x, y, w, h) → [{x, y}]` | Filled rectangle |
| `fillEllipse(cx, cy, rx, ry) → [{x, y}]` | Filled ellipse |
| `setTiles(type, x, y, w, h)` | Fill rect with tiles |
| `setWalls(type, x, y, w, h)` | Fill rect with walls |
| `clearTiles(x, y, w, h)` | Clear tiles in rect |

### `selection` — Selection

| Property/Method | Description |
|----------------|-------------|
| `isActive → bool` | Whether selection is active |
| `x`, `y`, `width`, `height` | Selection bounds |
| `left`, `top`, `right`, `bottom` | Selection edges |
| `set(x, y, w, h)` | Create selection |
| `clear()` | Remove selection |
| `contains(x, y) → bool` | Point-in-selection test |

### `chests` — Chest Inventory

| Method | Description |
|--------|-------------|
| `count → int` | Total chests |
| `getAll() → [...]` | All chests |
| `getAt(x, y) → {...}` | Chest at position |
| `findByItem(id) → [...]` | Find by item ID |
| `findByItemName(name) → [...]` | Find by item name |
| `setItem(x, y, slot, id, stack, prefix)` | Set slot contents |
| `clearItem(x, y, slot)` | Clear slot |
| `addItem(x, y, id, stack, prefix) → bool` | Add to first empty slot |

### `signs` — Sign Text

| Method | Description |
|--------|-------------|
| `count → int` | Total signs |
| `getAll() → [...]` | All signs |
| `getAt(x, y) → {...}` | Sign at position |
| `setText(x, y, text)` | Update text |

### `npcs` — Town NPCs

| Method | Description |
|--------|-------------|
| `count → int` | Total NPCs |
| `getAll() → [...]` | All NPCs with positions |
| `setHome(name, x, y)` | Set NPC home |

### `world` — World Metadata (read-only)

| Property | Description |
|----------|-------------|
| `width`, `height` | World size in tiles |
| `title` | World name |
| `seed` | World seed |
| `spawnX`, `spawnY` | Spawn coordinates |
| `surfaceLevel`, `rockLevel` | Layer boundaries |

### `metadata` — Game Data Lookup

| Method | Description |
|--------|-------------|
| `tileId(name) → int` | Tile ID by name (-1 if not found) |
| `wallId(name) → int` | Wall ID by name |
| `itemId(name) → int` | Item ID by name |
| `tileName(id) → string` | Tile name by ID |
| `wallName(id) → string` | Wall name by ID |
| `itemName(id) → string` | Item name by ID |
| `allTiles()`, `allWalls()`, `allItems()` | All definitions |

### `log` — Output

| Method | Description |
|--------|-------------|
| `print(msg)` | Log info |
| `warn(msg)` | Log warning |
| `error(msg)` | Log error |
| `progress(value)` | Update progress bar (0.0–1.0) |

### `finder` — Find Sidebar Integration

| Method | Description |
|--------|-------------|
| `clear()` | Clear results |
| `addResult(name, x, y, type, extraInfo?)` | Add result (max 1,000) |
| `navigate(index)` | Navigate to result |
| `navigateFirst()` | Go to first result |

### `tools` — UI Tools

| Method | Description |
|--------|-------------|
| `listTools() → [string]` | Available tool names |
| `copySelection()` | Copy selection to clipboard |
| `getTilePickerTile() → int` | Current tile picker value |
| `getTilePickerWall() → int` | Current wall picker value |
| `setTilePickerTile(type)` | Set tile picker |
| `setTilePickerWall(type)` | Set wall picker |

