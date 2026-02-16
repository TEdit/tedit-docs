---
sidebar_position: 1
description: Writing JavaScript and Lua scripts — API reference
---

# Scripting Guide

TEdit 5 includes a built-in scripting engine for automating world edits. Write scripts in **JavaScript** (Jint) or **Lua** to batch-process tiles, search worlds, fill areas, and more.

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
