---
sidebar_position: 1
description: Writing JavaScript and Lua scripts — API reference
---

# Scripting Guide

TEdit 5 includes a built-in scripting engine for automating world edits. Write scripts in **JavaScript** (Jint) or **Lua** to batch-process tiles, search worlds, fill areas, and more.

## AI Script Assistant

Use an AI chatbot to help you write TEdit scripts. Click one of the links below to open a chat, or copy the prompt and paste it into your preferred assistant.

export const aiPrompt = `You are a TEdit 5 scripting assistant. TEdit is a Terraria world editor with a built-in JavaScript (Jint) scripting engine.\n\nAPI documentation: https://docs.tedit.dev/advanced/scripting-guide\nTile/wall/item data files: https://github.com/TEdit/Terraria-Map-Editor/tree/main/src/TEdit.Terraria/Data (tiles.json, walls.json, items.json, npcs.json, prefixes.json, paints.json, etc.)\n\nKey API objects:\n- tile: read/write individual tiles (getTileType, setType, setWall, setLiquid, etc.)\n- batch: bulk operations (forEachTile, replaceTile, findTilesByType, etc.)\n- geometry: shape helpers (line, rect, ellipse, fillRect, fillEllipse, setTiles, setWalls)\n- selection: current selection bounds and point-in-selection test\n- chests: chest inventory read/write\n- signs: sign text read/write\n- npcs: NPC management\n- world: read-only world metadata (width, height, title, seed, spawnX, spawnY)\n- metadata: name/ID lookups (tileId, wallId, itemId, tileName, wallName, itemName)\n- log: output (print, warn, error, progress)\n- draw: drawing tools (pencil, brush, fill, routeWire, routeBus for CAD-style wire routing)\n- generate: procedural generation — trees (tree, forest, forestInSelection), worldgen structures (tileRunner, tunnel, lake, oreVein, listOreTypes, findSurface)\n- finder: add results to the Find sidebar panel\n- tools: UI tool access\n\nWhen writing scripts:\n- Use metadata.tileId("name") and metadata.wallId("name") to look up IDs by name\n- Always check selection.isActive before using selection-based operations\n- Use log.print() for output and log.progress() for long operations\n- Scripts have full access to the loaded world data\n- Framed tiles can be shifted UV coordinates to become another style of the same item (e.g. platforms, banners, chests). Check tiles.json for frame UV values.\n\nHelp the user write JavaScript scripts for TEdit. Ask what they want to accomplish and generate working scripts.`;

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
- draw: drawing tools (pencil, brush, fill, routeWire, routeBus for CAD wire routing)
- generate: procedural generation — trees (tree, forest, forestInSelection), worldgen structures (tileRunner, tunnel, lake, oreVein, listOreTypes, findSurface)
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

## More Examples

### Read tile information at a position

```javascript
const x = 500, y = 300;
log.print(`Active: ${tile.isActive(x, y)}`);
log.print(`Type: ${metadata.tileName(tile.getTileType(x, y))}`);
log.print(`Wall: ${metadata.wallName(tile.getWall(x, y))}`);
log.print(`Paint: ${tile.getPaint(x, y)}`);
log.print(`Liquid: type=${tile.getLiquidType(x, y)} amount=${tile.getLiquidAmount(x, y)}`);
log.print(`Frame: U=${tile.getFrameU(x, y)} V=${tile.getFrameV(x, y)}`);
log.print(`Slope: ${tile.getSlope(x, y)}`);
```

### Paint all tiles in selection

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

const paintColor = 13; // Illuminant paint
batch.forEachInSelection((x, y) => {
  if (tile.isActive(x, y)) {
    tile.setPaint(x, y, paintColor);
  }
});
log.print("Painted all tiles in selection");
```

### Paint walls in selection

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

const paintColor = 12; // Deep paint colors start around 12
batch.forEachInSelection((x, y) => {
  if (tile.getWall(x, y) > 0) {
    tile.setWallPaint(x, y, paintColor);
  }
});
log.print("Painted all walls in selection");
```

### Fill selection with water

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

batch.forEachInSelection((x, y) => {
  tile.setLiquid(x, y, 255, 1); // 255 = full, 1 = water
});
log.print("Filled selection with water");
```

### Create a lava moat

```javascript
// Draw a lava-filled trench at a position
const startX = 400, startY = 290, width = 60, depth = 6;

// Clear the trench
geometry.clearTiles(startX, startY, width, depth);

// Fill with lava
for (let x = startX; x < startX + width; x++) {
  for (let y = startY; y < startY + depth; y++) {
    tile.setLiquid(x, y, 255, 2); // 2 = lava
  }
}
log.print(`Lava moat: ${width}x${depth} at (${startX}, ${startY})`);
```

### Add slopes to a platform

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

const stoneId = metadata.tileId("Stone Block");
batch.forEachInSelection((x, y) => {
  if (tile.isActive(x, y) && tile.getTileType(x, y) === stoneId) {
    // Check if tile has air above — slope the top surface
    if (!tile.isActive(x, y - 1)) {
      // Left edge gets SlopeTopLeft, right edge gets SlopeTopRight
      if (tile.isActive(x - 1, y) && !tile.isActive(x + 1, y)) {
        tile.setSlope(x, y, "SlopeTopRight");
      } else if (!tile.isActive(x - 1, y) && tile.isActive(x + 1, y)) {
        tile.setSlope(x, y, "SlopeTopLeft");
      }
    }
  }
});
log.print("Added slopes to exposed stone edges");
```

### Wire a region with red wire

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

let count = 0;
batch.forEachInSelection((x, y) => {
  if (tile.isActive(x, y)) {
    tile.setWire(x, y, 1, true); // 1 = red wire
    count++;
  }
});
log.print(`Added red wire to ${count} tiles`);
```

### Route a wire between two points

```javascript
// Route a single red wire with a 90° elbow
draw.setWire(true, false, false, false);
draw.routeWire(100, 200, 150, 220, '90', 'h');
log.print("Routed red wire");
```

### Route a bus of parallel wires

```javascript
// Route 5 parallel green wires with 45° miter routing
draw.setWire(false, false, true, false);
const count = draw.routeBus(5, 100, 200, 200, 250, '45', 'auto');
log.print(`Placed ${count} wire tiles in 5-wire bus`);
```

### Route tile paths (platforms, tracks)

```javascript
// Route a stone block path using wire routing geometry
draw.setTile(metadata.tileId("Stone Block"));
draw.routeWire(50, 50, 100, 80, '90', 'v');
log.print("Routed stone path");
```

### Connect two points with colored wire bus

```javascript
// Red + blue bus from spawn to dungeon
draw.setWire(true, true, false, false);
draw.routeBus(3, world.spawnX, world.spawnY - 5, world.dungeonX, world.dungeonY, '90', 'auto');
log.print("Connected spawn to dungeon with wire bus");
```

### Copy a column of tiles downward

```javascript
// Duplicate the top 10 rows at x=500 downward by 10 tiles
const x = 500;
for (let y = 0; y < 10; y++) {
  tile.copy(x, y, x, y + 10);
}
log.print("Copied column");
```

### Count tiles by type in selection

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

const counts = {};
batch.forEachInSelection((x, y) => {
  if (tile.isActive(x, y)) {
    const id = tile.getTileType(x, y);
    counts[id] = (counts[id] || 0) + 1;
  }
});

// Sort and display top 10
const sorted = Object.entries(counts)
  .map(([id, n]) => ({ name: metadata.tileName(Number(id)), count: n }))
  .sort((a, b) => b.count - a.count);

for (const t of sorted.slice(0, 10)) {
  log.print(`${t.name}: ${t.count}`);
}
```

### Find tiles with a custom predicate

```javascript
// Find tiles that are painted deep red
const results = batch.findTiles((x, y) => {
  return tile.isActive(x, y) && tile.getPaint(x, y) === 12;
});

finder.clear();
for (const p of results) {
  finder.addResult("Painted tile", p.x, p.y, "tile");
}
log.print(`Found ${results.length} painted tiles (max 10,000)`);
```

### Locate multi-tile sprites (anchorOnly)

```javascript
// Find all heart crystals — anchorOnly returns one result per sprite
const heartId = metadata.tileId("Heart Crystal");
const hearts = batch.findTilesByType(heartId, true);

finder.clear();
for (const p of hearts) {
  finder.addResult("Heart Crystal", p.x, p.y, "tile");
}
log.print(`Found ${hearts.length} heart crystals`);
```

### Find and highlight tiles by wall type

```javascript
const wallId = metadata.wallId("Lihzahrd Brick Wall");
const results = batch.findTilesByWall(wallId);

finder.clear();
for (const p of results) {
  finder.addResult("Lihzahrd Wall", p.x, p.y, "wall");
}
log.print(`Found ${results.length} Lihzahrd wall tiles`);
```

### Replace walls world-wide

```javascript
const from = metadata.wallId("Dirt Wall");
const to = metadata.wallId("Stone Wall");
const count = batch.replaceWall(from, to);
log.print(`Replaced ${count} dirt walls with stone walls`);
```

### Draw a line of tiles between two points

```javascript
const points = geometry.line(100, 300, 250, 280);
const tileType = metadata.tileId("Obsidian Brick");
for (const p of points) {
  tile.setType(p.x, p.y, tileType);
}
log.print(`Placed ${points.length} tiles in a line`);
```

### Draw a rectangle outline

```javascript
const points = geometry.rect(200, 200, 40, 20);
const tileType = metadata.tileId("Gray Brick");
for (const p of points) {
  tile.setType(p.x, p.y, tileType);
}
log.print(`Drew rectangle outline: ${points.length} tiles`);
```

### Draw an ellipse ring

```javascript
const points = geometry.ellipse(300, 300, 30, 20);
const tileType = metadata.tileId("Glass Block");
for (const p of points) {
  tile.setType(p.x, p.y, tileType);
}
log.print(`Drew ellipse outline: ${points.length} tiles`);
```

### Clear tiles in a rectangular area

```javascript
geometry.clearTiles(100, 200, 50, 30);
log.print("Cleared 50x30 area");
```

### Create a selection from script

```javascript
// Select a 100x50 region starting at (200, 300)
selection.set(200, 300, 100, 50);
log.print(`Selection: (${selection.x}, ${selection.y}) ${selection.width}x${selection.height}`);
```

### Check if spawn is inside selection

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

if (selection.contains(world.spawnX, world.spawnY)) {
  log.print("Spawn point is inside the selection");
} else {
  log.print("Spawn point is outside the selection");
}
```

### List all chests and their contents

```javascript
const allChests = chests.getAll();
log.print(`Total chests: ${chests.count}`);

for (const c of allChests.slice(0, 20)) {
  log.print(`--- Chest at (${c.x}, ${c.y}): ${c.name || "Chest"} ---`);
  for (const item of c.items) {
    if (item.id > 0) {
      log.print(`  [${item.slot}] ${metadata.itemName(item.id)} x${item.stack}`);
    }
  }
}
```

### Add an item to every chest

```javascript
const itemId = metadata.itemId("Torch");
let added = 0;

for (const c of chests.getAll()) {
  if (chests.addItem(c.x, c.y, itemId, 99, 0)) {
    added++;
  }
}
log.print(`Added torches to ${added} chests`);
```

### Clear a specific slot from all chests

```javascript
let cleared = 0;
for (const c of chests.getAll()) {
  chests.clearItem(c.x, c.y, 0); // Clear slot 0 (first slot)
  cleared++;
}
log.print(`Cleared slot 0 from ${cleared} chests`);
```

### Set a chest slot to a specific item

```javascript
// Place a Zenith in slot 0 of the chest at (500, 300)
const zenithId = metadata.itemId("Zenith");
chests.setItem(500, 300, 0, zenithId, 1, 81); // prefix 81 = Legendary
log.print("Placed Legendary Zenith in chest");
```

### Find chests by name

```javascript
// Find all chests named "Loot" (case-insensitive substring match)
const results = chests.findByName("Loot");
finder.clear();
for (const c of results) {
  log.print(`"${c.name}" at (${c.x}, ${c.y})`);
  finder.addResult(c.name, c.x, c.y, "chest");
}
log.print(`Found ${results.length} chests matching "Loot"`);
```

### Rename a chest

```javascript
// Set the name/label of the chest at (500, 300)
chests.setName(500, 300, "My Storage");
log.print("Chest renamed");
```

### List all signs and their text

```javascript
log.print(`Total signs: ${signs.count}`);
for (const s of signs.getAll()) {
  const preview = s.text.substring(0, 50);
  log.print(`(${s.x}, ${s.y}): "${preview}"`);
}
```

### Update sign text at a position

```javascript
signs.setText(500, 300, "Welcome to my base!");
log.print("Sign updated");
```

### Number all signs sequentially

```javascript
const allSigns = signs.getAll();
for (let i = 0; i < allSigns.length; i++) {
  const s = allSigns[i];
  signs.setText(s.x, s.y, `Sign #${i + 1}`);
}
log.print(`Numbered ${allSigns.length} signs`);
```

### List all town NPCs

```javascript
log.print(`Total NPCs: ${npcs.count}`);
for (const npc of npcs.getAll()) {
  log.print(`${npc.name} at (${npc.x}, ${npc.y}) home: (${npc.homeX}, ${npc.homeY})`);
  finder.addResult(npc.name, npc.x, npc.y, "npc");
}
```

### Move an NPC home

```javascript
npcs.setHome("Guide", 500, 290);
log.print("Moved Guide's home to (500, 290)");
```

### Display world information

```javascript
log.print(`Title: ${world.title}`);
log.print(`Seed: ${world.seed}`);
log.print(`Size: ${world.width} x ${world.height}`);
log.print(`Spawn: (${world.spawnX}, ${world.spawnY})`);
log.print(`Surface: ${world.surfaceLevel}`);
log.print(`Rock layer: ${world.rockLevel}`);
```

### Search for items by partial name

```javascript
const keyword = "sword";
const allItems = metadata.allItems();
const matches = allItems.filter(i =>
  i.name.toLowerCase().includes(keyword.toLowerCase())
);

log.print(`Items matching "${keyword}":`);
for (const item of matches.slice(0, 20)) {
  log.print(`  [${item.id}] ${item.name}`);
}
log.print(`${matches.length} total matches`);
```

### Look up IDs by name

```javascript
log.print(`Dirt Block = tile ${metadata.tileId("Dirt Block")}`);
log.print(`Stone Wall = wall ${metadata.wallId("Stone Wall")}`);
log.print(`Zenith = item ${metadata.itemId("Zenith")}`);
log.print(`Tile 0 = ${metadata.tileName(0)}`);
log.print(`Wall 1 = ${metadata.wallName(1)}`);
log.print(`Item 1 = ${metadata.itemName(1)}`);
```

### Build results in the Find panel

```javascript
finder.clear();

// Find all demon altars
const altarId = metadata.tileId("Demon Altar");
const altars = batch.findTilesByType(altarId, true);

for (const p of altars) {
  finder.addResult("Demon Altar", p.x, p.y, "tile",
    `at depth ${p.y - world.surfaceLevel}`);
}
log.print(`Found ${altars.length} altars — check Find panel`);
finder.navigateFirst();
```

### Read the tile picker and place matching tiles

```javascript
// Place whatever tile the user has selected in the tile picker
const pickerTile = tools.getTilePickerTile();
if (pickerTile < 0) {
  log.error("No tile selected in the tile picker!");
}

if (!selection.isActive) { log.error("Select an area first!"); }

batch.forEachInSelection((x, y) => {
  tile.setType(x, y, pickerTile);
});
log.print(`Filled selection with ${metadata.tileName(pickerTile)}`);
```

### Read the current tile picker values

```javascript
const currentTile = tools.getTilePickerTile();
const currentWall = tools.getTilePickerWall();
log.print(`Tile picker: ${metadata.tileName(currentTile)} (${currentTile})`);
log.print(`Wall picker: ${metadata.wallName(currentWall)} (${currentWall})`);
```

### Build a simple house

```javascript
const x = 400, y = 290;
const w = 12, h = 7;
const wallType = metadata.tileId("Wood");
const wallBg = metadata.wallId("Wood Wall");

// Floor and ceiling
geometry.setTiles(wallType, x, y, w, 1);       // ceiling
geometry.setTiles(wallType, x, y + h - 1, w, 1); // floor

// Left and right walls
for (let dy = 0; dy < h; dy++) {
  tile.setType(x, y + dy, wallType);
  tile.setType(x + w - 1, y + dy, wallType);
}

// Background wall
geometry.setWalls(wallBg, x + 1, y + 1, w - 2, h - 2);

// Clear interior
geometry.clearTiles(x + 1, y + 1, w - 2, h - 2);

// Place platforms for a door area (3 wide in the middle of the floor)
const platId = metadata.tileId("Wood Platform");
const doorX = x + Math.floor(w / 2) - 1;
for (let dx = 0; dx < 3; dx++) {
  tile.setType(doorX + dx, y + h - 1, platId);
}

log.print(`Built ${w}x${h} house at (${x}, ${y})`);
```

### Build an NPC hotel

Builds a four-floor hotel above the spawn point with a room for every [town NPC](https://terraria.wiki.gg/wiki/NPCs#Town_NPCs) (all 26). Each room meets [housing requirements](https://terraria.wiki.gg/wiki/House): wood frame, background walls, torch, work bench, chair, and a wooden door. Existing NPCs are assigned to their rooms via `npcs.setHome()`.

:::note
The scripting API cannot spawn new NPCs — it can only manage NPCs already present in the world. Rooms are pre-built for all 26 NPCs so they have valid housing when they arrive.
:::

```javascript
// === NPC Hotel Builder ===
// Four-floor hotel — one room for every town NPC (26 total).
// 7 rooms per floor × 4 floors = 28 rooms (26 used + 2 spare).
// Each room: 12×7 exterior = 10×5 interior, well above 60-tile minimum.
// Uses sprites.placeByName() for furniture — handles multi-tile placement
// and frame UVs automatically.

// ── All 26 town NPCs (pre-Hardmode + Hardmode) ──
const townNpcNames = [
  // Pre-Hardmode (18)
  "Guide", "Merchant", "Nurse", "Demolitionist", "Dye Trader",
  "Angler", "Zoologist", "Dryad", "Painter", "Golfer",
  "Arms Dealer", "Tavernkeep", "Stylist", "Goblin Tinkerer",
  "Witch Doctor", "Clothier", "Mechanic", "Party Girl",
  // Hardmode (8)
  "Wizard", "Tax Collector", "Truffle", "Pirate",
  "Steampunker", "Cyborg", "Santa Claus", "Princess"
];
const npcCount = townNpcNames.length; // 26

// ── Layout ──
const roomW   = 12;  // room width  (including walls)
const roomH   = 7;   // room height (including floor/ceiling)
const nFloors = 4;
const perFloor = Math.ceil(npcCount / nFloors); // 7

// Adjacent rooms share a 1-tile dividing wall; floors share a ceiling/floor.
const totalW = perFloor * (roomW - 1) + 1;      // 78
const totalH = roomH * nFloors - (nFloors - 1);  // 25

// Center the hotel above spawn
const baseX = world.spawnX - Math.floor(totalW / 2);
const baseY = world.spawnY - totalH;

// ── Tile / Wall IDs ──
const wood     = metadata.tileId("Wood");
const woodWall = metadata.wallId("Wood Wall");
const PLATFORM = 19;

// ── Paint colors (Terraria paint IDs) ──
// 1=Red 2=Orange 3=Yellow 4=Lime 5=Green 6=Teal 7=Cyan 8=Sky Blue
// 9=Blue 10=Purple 11=Violet 12=Pink 13–24=Deep variants 25=Black
// 26=White 27=Gray 28=Brown
const paintColors = [
   1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28
];

log.print(`Building ${npcCount}-room hotel (${perFloor} per floor)`);
log.print(`Location: (${baseX}, ${baseY})  Size: ${totalW}×${totalH}`);

// ── 1. Select and clear build area ──
selection.set(baseX, baseY, totalW, totalH);
geometry.clearTiles(baseX, baseY, totalW, totalH);

// ── 2. Build structure (wood frame) ──
// Horizontal slabs: top ceiling, intermediate floors, ground floor
geometry.setTiles(wood, baseX, baseY, totalW, 1);
for (let f = 1; f < nFloors; f++) {
  geometry.setTiles(wood, baseX, baseY + f * (roomH - 1), totalW, 1);
}
geometry.setTiles(wood, baseX, baseY + totalH - 1, totalW, 1);

// Left and right outer walls
for (let y = baseY; y < baseY + totalH; y++) {
  tile.setType(baseX, y, wood);
  tile.setType(baseX + totalW - 1, y, wood);
}

// Dividing walls between rooms (full height)
for (let r = 1; r < perFloor; r++) {
  const wx = baseX + r * (roomW - 1);
  for (let y = baseY; y < baseY + totalH; y++) {
    tile.setType(wx, y, wood);
  }
}

// ── 3. Per-room: walls → paint → platforms → sprites → NPC ──
const existingNpcs = {};
for (const n of npcs.getAll()) { existingNpcs[n.name] = true; }

let npcIdx = 0;
let assigned = 0;
for (let f = 0; f < nFloors; f++) {
  const floorTopY = baseY + f * (roomH - 1);
  const standY    = floorTopY + roomH - 2; // row just above solid floor
  const doorTopY  = floorTopY + roomH - 4; // door anchor row (top of 1×3)

  for (let r = 0; r < perFloor; r++) {
    const rx = baseX + r * (roomW - 1);
    const ix = rx + 1; // first interior column
    const roomNum = f * perFloor + r;
    const paint = paintColors[roomNum % paintColors.length];

    // ── a. Background walls + paint ──
    // Fill full room interior; extend up into shared slab for platform walls.
    const wallTop = f > 0 ? floorTopY : floorTopY + 1;
    const wallBot = floorTopY + roomH - 2;
    for (let wy = wallTop; wy <= wallBot; wy++) {
      for (let wx = rx + 1; wx < rx + roomW - 1; wx++) {
        tile.setWall(wx, wy, woodWall);
        tile.setWallPaint(wx, wy, paint);
      }
    }

    // ── b. Platforms in shared slab (inter-floor access) ──
    if (f > 0) {
      const platX = rx + Math.floor(roomW / 2) - 1;
      for (let i = 0; i < 3; i++) {
        tile.setType(platX + i, floorTopY, PLATFORM);
        tile.setFrameUV(platX + i, floorTopY, 0, 0);
      }
    }

    // ── c. Sprites: door, torch, work bench, chair ──
    // sprites.placeByName() handles multi-tile UV layout automatically.
    // Door between adjacent rooms (in the shared dividing wall)
    if (r > 0) {
      sprites.placeByName("Wooden Door", rx, doorTopY);
    }
    // Entry door on the left outer wall
    if (r === 0) {
      sprites.placeByName("Wooden Door", baseX, doorTopY);
    }

    if (npcIdx < npcCount) {
      sprites.placeByName("Torch", ix + 7, standY);
      sprites.placeByName("Wooden Work Bench", ix + 1, standY);
      sprites.placeByName("Wooden Chair", ix + 4, standY);

      // ── d. Assign NPC home (solid tile they stand ON) ──
      // Platforms are at rx+5..rx+7, so use rx+9 (always solid).
      const npcName = townNpcNames[npcIdx];
      const homeX = ix + 8;
      const homeY = standY + 1; // the solid floor row
      if (existingNpcs[npcName]) {
        npcs.setHome(npcName, homeX, homeY);
        log.print(`Room ${npcIdx + 1}: ${npcName} (paint ${paint}) ✓`);
        assigned++;
      } else {
        log.print(`Room ${npcIdx + 1}: ${npcName} (paint ${paint}) — not yet in world`);
      }
      npcIdx++;
    }
  }
}

selection.clear();
log.print(`\nHotel complete! ${npcCount} rooms built, ${assigned} NPCs assigned.`);
```

<details>
<summary>Room layout diagram (showing 2 of 4 floors)</summary>

```
  12 tiles wide per room (shared walls)
  ├───────────┤
  ...          ...              (floors 4 & 3 above)
  WW===WWWWWWWWW===WWWWWWW  ── shared slab (platforms)
  W..........DW..........W   ┐
  W..........DW..........W   │ Floor 2 (7 tall)
  W.WW.C..T..DW.WW.C..T..W   │ WW=bench C=chair
  W..........WW..........W   │ T=torch  D=door
  WW===WWWWWWWWW===WWWWWWW  ── shared slab (platforms)
  W..........DW..........W   ┐
  W..........DW..........W   │ Floor 1 (7 tall)
  W.WW.C..T..DW.WW.C..T..W   │
  W..........WW..........W   ┘
  DWWWWWWWWWWWWWWWWWWWWWWW  ── ground floor
  D = entry door on left wall of each floor

  7 rooms per floor × 4 floors = 28 rooms (26 NPCs + 2 spare)
```

</details>

### Place a single tree

```javascript
// Place an oak tree at position (500, 300)
var placed = generate.tree("oak", 500, 300);
log.print("Tree placed: " + placed);
```

### Generate a mixed forest in selection

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

var count = generate.forestInSelection(["oak", "sakura", "diamond"], 0.15);
log.print("Placed " + count + " trees");
```

### List available tree types

```javascript
var types = generate.listTreeTypes();
for (var i = 0; i < types.length; i++) {
  log.print(types[i].name + " (tile " + types[i].tileId + ")");
}
```

### Find the surface at a column

```javascript
var surface = generate.findSurface(500, 0, world.height - 1);
if (surface >= 0) {
  log.print("Surface at y=" + surface);
  finder.clear();
  finder.addResult("Surface", 500, surface, "tile");
  finder.navigateFirst();
} else {
  log.print("No surface found");
}
```

### Checkerboard pattern in selection

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

const tileA = metadata.tileId("Ebonstone Block");
const tileB = metadata.tileId("Pearlstone Block");

batch.forEachInSelection((x, y) => {
  tile.setType(x, y, (x + y) % 2 === 0 ? tileA : tileB);
});
log.print("Checkerboard pattern applied");
```

### Drain all liquids in selection

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

let count = 0;
batch.forEachInSelection((x, y) => {
  if (tile.getLiquidAmount(x, y) > 0) {
    tile.setLiquid(x, y, 0, 0);
    count++;
  }
});
log.print(`Drained liquid from ${count} tiles`);
```

### Strip all paint in selection

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

let count = 0;
batch.forEachInSelection((x, y) => {
  if (tile.getPaint(x, y) > 0) {
    tile.setPaint(x, y, 0);
    count++;
  }
  if (tile.getWallPaint(x, y) > 0) {
    tile.setWallPaint(x, y, 0);
    count++;
  }
});
log.print(`Stripped paint from ${count} tiles/walls`);
```

### Remove all wires in selection

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

let count = 0;
batch.forEachInSelection((x, y) => {
  for (let color = 1; color <= 4; color++) {
    if (tile.getWire(x, y, color)) {
      tile.setWire(x, y, color, false);
      count++;
    }
  }
});
log.print(`Removed ${count} wire segments`);
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
| `setName(x, y, name)` | Set chest name/label |
| `findByName(name) → [...]` | Find chests by name (case-insensitive substring match) |
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

### `tileEntities` — Tile Entity Management

| Property/Method | Description |
|--------|-------------|
| `count → int` | Total tile entities |
| `weaponRackCount → int` | Weapon rack count |
| `itemFrameCount → int` | Item frame count |
| `mannequinCount → int` | Mannequin / display doll count |
| `hatRackCount → int` | Hat rack count |
| `foodPlatterCount → int` | Food platter count |
| `logicSensorCount → int` | Logic sensor count |
| `trainingDummyCount → int` | Training dummy count |
| `pylonCount → int` | Teleportation pylon count |
| `getAll() → [...]` | All tile entities |
| `getAt(x, y) → {...}` | Entity at position |
| `getAllByType(typeName) → [...]` | Get by type name |
| `getAllWeaponRacks() → [...]` | All weapon racks |
| `getAllItemFrames() → [...]` | All item frames |
| `getAllMannequins() → [...]` | All mannequins |
| `getAllHatRacks() → [...]` | All hat racks |
| `getAllFoodPlatters() → [...]` | All food platters |
| `findByItem(itemId) → [...]` | Find entities containing item |
| `setItem(x, y, itemId, prefix?, stack?)` | Set item (weapon rack, item frame, food platter) |
| `clearItem(x, y)` | Clear item from single-item entity |
| `setEquipment(x, y, slot, itemId, prefix?)` | Set mannequin equipment slot |
| `clearEquipment(x, y, slot)` | Clear mannequin equipment slot |
| `setDye(x, y, slot, dyeId, prefix?)` | Set mannequin dye slot |
| `clearDye(x, y, slot)` | Clear mannequin dye slot |
| `setWeapon(x, y, itemId, prefix?)` | Set mannequin weapon |
| `clearWeapon(x, y)` | Clear mannequin weapon |
| `setPose(x, y, poseId)` | Set mannequin pose (0–8) |
| `getPose(x, y) → int` | Get mannequin pose |
| `setHatRackItem(x, y, slot, itemId, prefix?)` | Set hat rack item |
| `clearHatRackItem(x, y, slot)` | Clear hat rack item |
| `setHatRackDye(x, y, slot, dyeId, prefix?)` | Set hat rack dye |
| `clearHatRackDye(x, y, slot)` | Clear hat rack dye |
| `setLogicSensor(x, y, logicCheck, on)` | Set logic sensor |
| `setTrainingDummyNpc(x, y, npcId)` | Set training dummy NPC |

See the [full API reference](api-reference.md#tileentities--tile-entity-management) for details and examples.

### `sprites` — Multi-tile Sprite Placement

| Method | Description |
|--------|-------------|
| `listSprites() → [{tileId, name, styleCount}]` | List all sprite sheets |
| `getStyles(tileId) → [{index, name, width, height}]` | Get styles for a tile type |
| `place(tileId, styleIndex, x, y) → bool` | Place sprite by tile ID and style |
| `placeByName(name, x, y) → bool` | Place first style matching name |

### `draw` — Drawing Tools

| Method | Description |
|--------|-------------|
| `setTile(tileType)` | Set tile type to paint |
| `setWall(wallType)` | Set wall type to paint |
| `setErase(bool)` | Enable/disable eraser mode |
| `setPaintMode(mode)` | Set mode: `'tile'`, `'wire'`, `'liquid'` |
| `setTileColor(color)` | Set tile paint color (0 = off) |
| `setWallColor(color)` | Set wall paint color (0 = off) |
| `setBrickStyle(style)` | `'full'`, `'half'`, `'topright'`, etc. |
| `setActuator(enabled, inactive?)` | Set actuator state |
| `setTileCoating(echo?, illuminant?)` | Set tile coating |
| `setWallCoating(echo?, illuminant?)` | Set wall coating |
| `setLiquid(type, amount?)` | Type: `'water'`/`'lava'`/`'honey'`/`'shimmer'` |
| `setWire(red?, blue?, green?, yellow?)` | Set wire paint flags |
| `setTileMask(mode, tileType?)` | `'off'`, `'match'`, `'empty'`, `'notMatching'` |
| `setWallMask(mode, wallType?)` | Set wall mask mode |
| `setBrush(width, height, shape?)` | Shape: `'square'`, `'round'`, `'right'`, `'left'` |
| `setBrushOutline(outline, enabled)` | Set brush outline |
| `reset()` | Reset picker and brush to defaults |
| `pencil(x1, y1, x2, y2)` | Draw 1px line |
| `brush(x1, y1, x2, y2)` | Draw brush-width line |
| `fill(x, y)` | Flood fill from point |
| `hammer(x1, y1, x2, y2)` | Auto-slope tiles along line |

### `generate` — Procedural Tree & Forest Generation

| Method | Description |
|--------|-------------|
| `listTreeTypes() → [{name, tileId}]` | List supported tree types |
| `tree(type, x, y) → bool` | Place a single tree at ground position |
| `forest(types[], x, y, w, h, density?) → int` | Place random trees in rectangle (density 0.0–1.0, default 0.15) |
| `forestInSelection(types[], density?) → int` | Place random trees in current selection |
| `findSurface(x, yStart, yEnd) → int` | Scan downward for first solid tile; returns y or -1 |

**Tree types:** `oak`, `palm`, `mushroom`, `topaz`, `amethyst`, `sapphire`, `emerald`, `ruby`, `diamond`, `amber`, `sakura`, `willow`, `ash`

