---
sidebar_position: 2
description: Complete scripting API reference for all TEdit objects
---

# TEdit Scripting API Reference

Complete reference for the TEdit scripting API.
Available in both JavaScript and Lua engines.

All API objects are accessed as globals: `tile`, `batch`, `geometry`, `selection`, `sprites`, `draw`, `chests`, `signs`, `npcs`, `tileEntities`, `world`, `metadata`, `log`, `finder`, `tools`.

---

## `tile` — Low-level tile read/write

| Method | Description |
|--------|-------------|
| `isActive(x, y) → bool` | Check if tile is active |
| `getTileType(x, y) → int` | Get tile type ID |
| `getWall(x, y) → int` | Get wall type ID |
| `getPaint(x, y) → int` | Get tile paint color |
| `getWallPaint(x, y) → int` | Get wall paint color |
| `getLiquidAmount(x, y) → int` | Get liquid amount (0–255) |
| `getLiquidType(x, y) → int` | Get liquid type (0=none, 1=water, 2=lava, 3=honey) |
| `getFrameU(x, y) → int` | Get sprite frame U coordinate |
| `getFrameV(x, y) → int` | Get sprite frame V coordinate |
| `getSlope(x, y) → string` | Get slope type as string |
| `getWire(x, y, color) → bool` | Check wire (1=red, 2=blue, 3=green, 4=yellow) |
| `setActive(x, y, active)` | Set tile active state |
| `setType(x, y, type)` | Set tile type (also activates tile) |
| `setWall(x, y, wallType)` | Set wall type |
| `setPaint(x, y, color)` | Set tile paint color |
| `setWallPaint(x, y, color)` | Set wall paint color |
| `setLiquid(x, y, amount, type)` | Set liquid amount and type |
| `setWire(x, y, color, enabled)` | Set wire state |
| `setSlope(x, y, slope)` | Set slope (`None`, `HalfBrick`, `SlopeTopRight`, `SlopeTopLeft`, `SlopeBottomRight`, `SlopeBottomLeft`) |
| `setFrameUV(x, y, u, v)` | Set sprite frame coordinates |
| `clear(x, y)` | Reset tile to default empty state |
| `copy(fromX, fromY, toX, toY)` | Copy all properties from one tile to another |

## `batch` — Bulk Operations

| Method | Description |
|--------|-------------|
| `forEachTile(callback)` | Iterate entire world — `callback(x, y)` |
| `forEachInSelection(callback)` | Iterate selection — `callback(x, y)` |
| `findTiles(predicate) → [{x, y}]` | Find tiles matching `predicate(x, y) → bool` (max 10,000) |
| `findTilesByType(type, anchorOnly?) → [{x, y}]` | Find by type; `anchorOnly` returns sprite origins only |
| `findTilesByWall(wallType) → [{x, y}]` | Find by wall type (max 10,000) |
| `replaceTile(from, to) → int` | Replace all tiles of one type; returns count |
| `replaceTileInSelection(from, to) → int` | Replace in selection only; returns count |
| `replaceWall(from, to) → int` | Replace all walls of one type; returns count |
| `clearTilesByType(type) → int` | Clear all tiles of type; returns count |

## `geometry` — Shapes

| Method | Description |
|--------|-------------|
| `line(x1, y1, x2, y2) → [{x, y}]` | Line coordinates |
| `rect(x, y, w, h) → [{x, y}]` | Rectangle outline |
| `ellipse(cx, cy, rx, ry) → [{x, y}]` | Ellipse outline (centered) |
| `fillRect(x, y, w, h) → [{x, y}]` | Filled rectangle |
| `fillEllipse(cx, cy, rx, ry) → [{x, y}]` | Filled ellipse (centered) |
| `setTiles(type, x, y, w, h)` | Fill rect with tiles (with undo) |
| `setWalls(type, x, y, w, h)` | Fill rect with walls (with undo) |
| `clearTiles(x, y, w, h)` | Clear tiles in rect (with undo) |

## `selection` — Selection

| Property/Method | Description |
|----------------|-------------|
| `isActive → bool` | Whether selection is active |
| `x`, `y`, `width`, `height` | Selection bounds |
| `left`, `top`, `right`, `bottom` | Selection edges (right/bottom exclusive) |
| `set(x, y, w, h)` | Create and activate selection |
| `clear()` | Deactivate selection |
| `contains(x, y) → bool` | Point-in-selection test |

## `sprites` — Multi-tile Sprite Placement

| Method | Description |
|--------|-------------|
| `listSprites() → [{tileId, name, styleCount}]` | List all sprite sheets |
| `getStyles(tileId) → [{index, name, width, height}]` | Get styles for a tile type |
| `place(tileId, styleIndex, x, y) → bool` | Place sprite by tile ID and style index |
| `placeByName(name, x, y) → bool` | Place first style matching name (case-insensitive) |

:::note
Placing a sprite automatically creates associated entities (Chest, Sign, TileEntity) at the anchor position.
:::

## `draw` — Drawing Tools

### Picker Configuration

| Method | Description |
|--------|-------------|
| `setTile(tileType)` | Set tile type to paint |
| `setWall(wallType)` | Set wall type to paint |
| `setErase(bool)` | Enable/disable eraser mode |
| `setPaintMode(mode)` | Set mode: `'tile'`/`'tileandwall'`, `'wire'`, `'liquid'` |
| `setTileColor(color)` | Set tile paint color (0 = off) |
| `setWallColor(color)` | Set wall paint color (0 = off) |
| `setBrickStyle(style)` | `'full'`, `'half'`, `'topright'`, `'topleft'`, `'bottomright'`, `'bottomleft'` |
| `setActuator(enabled, inactive?)` | Set actuator state |
| `setTileCoating(echo?, illuminant?)` | Set tile coating |
| `setWallCoating(echo?, illuminant?)` | Set wall coating |
| `setLiquid(type, amount?)` | Type: `'water'`/`'lava'`/`'honey'`/`'shimmer'`/`'none'`; amount: `'full'`/`'half'`/`'quarter'` |
| `setWire(red?, blue?, green?, yellow?)` | Set wire paint flags |
| `setTileMask(mode, tileType?)` | `'off'`, `'match'`, `'empty'`, `'notmatching'` |
| `setWallMask(mode, wallType?)` | Set wall mask mode |
| `setBrush(width, height, shape?)` | Shape: `'square'`, `'round'`, `'right'`, `'left'`, `'star'`, `'triangle'`, `'crescent'`, `'donut'`, `'cross'`/`'x'` |
| `setRotation(degrees)` | Set brush rotation in degrees |
| `setFlip(horizontal?, vertical?)` | Set brush flip state |
| `setSpray(enabled, density?, tickMs?)` | Enable spray mode (density default 50, tick default 100ms) |
| `setBrushOutline(outline, enabled)` | Set brush outline width and enable/disable |
| `reset()` | Reset tile picker and brush to defaults |

### Drawing Operations

| Method | Description |
|--------|-------------|
| `pencil(x1, y1, x2, y2)` | Draw 1px line between two points |
| `brush(x1, y1, x2, y2)` | Draw brush-width line between two points |
| `fill(x, y)` | Flood fill from point (respects selection) |
| `hammer(x1, y1, x2, y2)` | Auto-slope tiles along brush-width line |

### Wire Routing

Route wires (or tiles) along CAD-style paths. Uses the current picker configuration set by `setWire()` or `setTile()`.

| Method | Description |
|--------|-------------|
| `routeWire(x1, y1, x2, y2, mode?, direction?) → int` | Route a single wire path; returns tiles placed |
| `routeBus(wireCount, x1, y1, x2, y2, mode?, direction?) → int` | Route parallel wires; returns tiles placed |
| `routeWirePath(x1, y1, x2, y2, mode?, direction?) → [{x, y}]` | Get single wire path coordinates (no placement) |
| `routeBusPath(wireCount, x1, y1, x2, y2, mode?, direction?) → [{x, y}]` | Get bus path coordinates (no placement) |

**Parameters:**
- **mode** — `'90'` (default) for 90° elbow, `'45'` for 45° miter
- **direction** — `'auto'` (default), `'h'` for horizontal-first, `'v'` for vertical-first
- **wireCount** — Number of parallel wires (auto-converts to brush size: spacing × (count − 1) + 1)

**Spacing:** 90° mode uses 2-tile spacing (1-tile gap), 45° mode uses 3-tile spacing (2-tile gap).

```javascript
// Route red wire with 90° elbow
draw.setWire(true, false, false, false);
draw.routeWire(100, 200, 150, 220, '90', 'h');

// Route 4 parallel blue wires with 45° miter
draw.setWire(false, true, false, false);
draw.routeBus(4, 100, 200, 150, 220, '45', 'auto');

// Route tiles instead of wires
draw.setTile(1); // Stone
draw.routeWire(50, 50, 80, 70);

// Get path coordinates for custom processing
var path = draw.routeWirePath(10, 10, 30, 20, '90', 'v');
for (var i = 0; i < path.length; i++) {
    log.print(path[i].x + "," + path[i].y);
}
```

## `chests` — Chest Inventory

| Property/Method | Description |
|--------|-------------|
| `count → int` | Total chests |
| `getAll() → [{x, y, name, items}]` | All chests; items array contains `{slot, id, name, stack, prefix}` |
| `getAt(x, y) → {x, y, name, items}` | Chest at position (or null) |
| `findByItem(id) → [...]` | Find chests containing item by NetId |
| `findByItemName(name) → [...]` | Find chests containing item by name (case-insensitive substring match) |
| `setName(x, y, name)` | Set chest name/label |
| `findByName(name) → [...]` | Find chests by name (case-insensitive substring match) |
| `setItem(x, y, slot, id, stack, prefix)` | Set slot contents |
| `clearItem(x, y, slot)` | Clear slot |
| `addItem(x, y, id, stack, prefix) → bool` | Add to first empty slot; returns false if full |

## `signs` — Sign Text

| Property/Method | Description |
|--------|-------------|
| `count → int` | Total signs |
| `getAll() → [{x, y, text}]` | All signs |
| `getAt(x, y) → {x, y, text}` | Sign at position (or null) |
| `setText(x, y, text)` | Update sign text |

## `npcs` — Town NPCs

| Property/Method | Description |
|--------|-------------|
| `count → int` | Total NPCs |
| `getAll() → [{name, displayName, x, y, homeX, homeY, isHomeless}]` | All NPCs |
| `setHome(name, x, y)` | Set NPC home (matches name or displayName, case-insensitive) |

:::note
The scripting API cannot spawn new NPCs — only modify existing ones.
:::

## `tileEntities` — Tile Entity Management

Tile entities are special objects attached to certain tiles: weapon racks, item frames, mannequins, hat racks, food platters, logic sensors, training dummies, and pylons.

### Counts

| Property | Description |
|----------|-------------|
| `count → int` | Total tile entities |
| `mannequinCount → int` | Display doll / mannequin count |
| `weaponRackCount → int` | Weapon rack count |
| `hatRackCount → int` | Hat rack count |
| `itemFrameCount → int` | Item frame count |
| `foodPlatterCount → int` | Food platter count |
| `logicSensorCount → int` | Logic sensor count |
| `trainingDummyCount → int` | Training dummy count |
| `pylonCount → int` | Teleportation pylon count |

### Queries

| Method | Description |
|--------|-------------|
| `getAll() → [{x, y, type, ...}]` | All tile entities |
| `getAt(x, y) → {x, y, type, ...}` | Entity at position (or null) |
| `getAllByType(typeName) → [...]` | Get by type name (see type names below) |
| `getAllMannequins() → [...]` | All display dolls / mannequins |
| `getAllWeaponRacks() → [...]` | All weapon racks |
| `getAllHatRacks() → [...]` | All hat racks |
| `getAllItemFrames() → [...]` | All item frames |
| `getAllFoodPlatters() → [...]` | All food platters |
| `findByItem(itemId) → [...]` | Find entities containing a specific item |

**Type names** for `getAllByType`: `DisplayDoll`, `WeaponRack`, `HatRack`, `ItemFrame`, `FoodPlatter`, `LogicSensor`, `TrainingDummy`, `TeleportationPylon`, `DeadCellsDisplayJar`, `KiteAnchor`, `CritterAnchor`

### Single-Item Entities (Weapon Rack, Item Frame, Food Platter, Dead Cells Jar)

These entities hold a single item with an ID, prefix, and stack size.

| Method | Description |
|--------|-------------|
| `setItem(x, y, itemId, prefix?, stack?)` | Set item on entity (prefix default 0, stack default 1) |
| `clearItem(x, y)` | Remove item from entity |

**Return dict keys:** `x`, `y`, `type`, `itemId`, `prefix`, `stack`

```javascript
// Example: Put a Terra Blade on a weapon rack at (100, 200)
tileEntities.setItem(100, 200, 757); // 757 = Terra Blade

// Example: Find all weapon racks and list their items
var racks = tileEntities.getAllWeaponRacks();
for (var i = 0; i < racks.length; i++) {
    var r = racks[i];
    if (r.itemId > 0) {
        log.print("Rack at " + r.x + "," + r.y + " has item " + metadata.itemName(r.itemId));
    }
}
```

### Display Doll / Mannequin

Mannequins have equipment slots, dye slots, a weapon slot (Misc[0]), and a pose.

| Method | Description |
|--------|-------------|
| `setEquipment(x, y, slot, itemId, prefix?)` | Set equipment slot (0-based) |
| `clearEquipment(x, y, slot)` | Clear equipment slot |
| `setDye(x, y, slot, dyeId, prefix?)` | Set dye slot |
| `clearDye(x, y, slot)` | Clear dye slot |
| `setWeapon(x, y, itemId, prefix?)` | Set weapon (Misc[0] slot) |
| `clearWeapon(x, y)` | Clear weapon slot |
| `setPose(x, y, poseId)` | Set pose (0–8) |
| `getPose(x, y) → int` | Get current pose ID |

**Return dict keys:** `x`, `y`, `type`, `items` (equipment array), `dyes` (dye array), `pose`

### Hat Rack

| Method | Description |
|--------|-------------|
| `setHatRackItem(x, y, slot, itemId, prefix?)` | Set item in hat rack slot |
| `clearHatRackItem(x, y, slot)` | Clear hat rack item slot |
| `setHatRackDye(x, y, slot, dyeId, prefix?)` | Set dye in hat rack slot |
| `clearHatRackDye(x, y, slot)` | Clear hat rack dye slot |

**Return dict keys:** `x`, `y`, `type`, `items`, `dyes`

### Logic Sensor

| Method | Description |
|--------|-------------|
| `setLogicSensor(x, y, logicCheck, on)` | Set logic check type and on/off state |

**Return dict keys:** `x`, `y`, `type`, `logicCheck`, `on`

### Training Dummy

| Method | Description |
|--------|-------------|
| `setTrainingDummyNpc(x, y, npcId)` | Set the NPC bound to a training dummy |

**Return dict keys:** `x`, `y`, `type`, `npcId`

## `world` — World Properties

### Core

| Property | Description |
|----------|-------------|
| `width → int` | World width in tiles (read-only) |
| `height → int` | World height in tiles (read-only) |
| `title ↔ string` | World name |
| `worldId ↔ int` | World ID |
| `seed ↔ string` | World seed |
| `isFavorite ↔ bool` | Favorited in world list |
| `isChinese ↔ bool` | Chinese localization flag |
| `isConsole ↔ bool` | Console world flag |
| `fileRevision ↔ uint` | File revision counter |
| `worldGenVersion ↔ ulong` | World generation version |
| `creationTime ↔ long` | Creation timestamp |
| `lastPlayed ↔ long` | Last played timestamp |

### Spawn & Dungeon

| Property | Description |
|----------|-------------|
| `spawnX ↔ int`, `spawnY ↔ int` | Spawn coordinates |
| `dungeonX ↔ int`, `dungeonY ↔ int` | Dungeon coordinates |

### Levels

| Property | Description |
|----------|-------------|
| `surfaceLevel ↔ double` | Surface level Y |
| `rockLevel ↔ double` | Underground level Y |
| `safeGroundLayers ↔ bool` | Safe ground layers enabled |

### Time

| Property | Description |
|----------|-------------|
| `time ↔ double` | Current time value |
| `dayTime ↔ bool` | Is daytime |
| `fastForwardTime ↔ bool` | Time fast-forward active |
| `sundialCooldown ↔ byte` | Enchanted Sundial cooldown |
| `fastForwardTimeToDusk ↔ bool` | Fast-forward to dusk active |
| `moondialCooldown ↔ byte` | Enchanted Moondial cooldown |

### Moon

| Property | Description |
|----------|-------------|
| `moonPhase ↔ int` | Moon phase (0–7) |
| `bloodMoon ↔ bool` | Blood moon active |
| `moonType ↔ byte` | Moon style |
| `isEclipse ↔ bool` | Eclipse active |

### Weather

| Property | Description |
|----------|-------------|
| `isRaining ↔ bool` | Is raining |
| `tempRainTime ↔ int` | Rain time remaining |
| `tempMaxRain ↔ float` | Maximum rain intensity |
| `slimeRainTime ↔ double` | Slime rain time remaining |
| `tempMeteorShowerCount ↔ int` | Meteor shower count |
| `tempCoinRain ↔ int` | Coin rain value |
| `numClouds ↔ short` | Number of clouds |
| `windSpeedSet ↔ float` | Wind speed |
| `cloudBgActive ↔ float` | Cloud background activity |

### Sandstorm

| Property | Description |
|----------|-------------|
| `sandStormHappening ↔ bool` | Sandstorm active |
| `sandStormTimeLeft ↔ int` | Sandstorm time remaining |
| `sandStormSeverity ↔ float` | Current sandstorm severity |
| `sandStormIntendedSeverity ↔ float` | Target sandstorm severity |

### Holidays

| Property | Description |
|----------|-------------|
| `forceHalloweenForToday ↔ bool` | Force Halloween today |
| `forceXMasForToday ↔ bool` | Force Christmas today |
| `forceHalloweenForever ↔ bool` | Force Halloween permanently |
| `forceXMasForever ↔ bool` | Force Christmas permanently |

### Difficulty

| Property | Description |
|----------|-------------|
| `hardMode ↔ bool` | Hardmode enabled |
| `gameMode ↔ int` | 0=Classic, 1=Expert, 2=Master, 3=Journey |
| `spawnMeteor ↔ bool` | Meteor queued to spawn |
| `combatBookUsed ↔ bool` | Advanced Combat Techniques used |
| `combatBookVolumeTwoWasUsed ↔ bool` | Advanced Combat Techniques Vol 2 used |
| `peddlersSatchelWasUsed ↔ bool` | Peddler's Satchel used |
| `partyOfDoom ↔ bool` | Party of Doom active |

### World Seeds

| Property | Description |
|----------|-------------|
| `drunkWorld ↔ bool` | Drunk world (05162020) |
| `goodWorld ↔ bool` | For the Worthy |
| `tenthAnniversaryWorld ↔ bool` | 10th Anniversary |
| `dontStarveWorld ↔ bool` | The Constant (Don't Starve) |
| `notTheBeesWorld ↔ bool` | Not the Bees |
| `remixWorld ↔ bool` | Remix |
| `noTrapsWorld ↔ bool` | No Traps |
| `zenithWorld ↔ bool` | Zenith (Get fixed boi) |
| `skyblockWorld ↔ bool` | Skyblock |
| `vampireSeed ↔ bool` | Vampire seed |
| `infectedSeed ↔ bool` | Infected seed |
| `dualDungeonsSeed ↔ bool` | Dual dungeons seed |
| `isCrimson ↔ bool` | Crimson world (false = Corruption) |

### Ore Tiers

| Property | Description |
|----------|-------------|
| `altarCount ↔ int` | Demon altars smashed |
| `shadowOrbSmashed ↔ bool` | Shadow orb smashed |
| `shadowOrbCount ↔ int` | Shadow orbs smashed count |
| `savedOreTiersCopper ↔ int` | Copper ore tile ID (alternate: Tin) |
| `savedOreTiersIron ↔ int` | Iron ore tile ID (alternate: Lead) |
| `savedOreTiersSilver ↔ int` | Silver ore tile ID (alternate: Tungsten) |
| `savedOreTiersGold ↔ int` | Gold ore tile ID (alternate: Platinum) |
| `savedOreTiersCobalt ↔ int` | Cobalt ore tile ID (alternate: Palladium) |
| `savedOreTiersMythril ↔ int` | Mythril ore tile ID (alternate: Orichalcum) |
| `savedOreTiersAdamantite ↔ int` | Adamantite ore tile ID (alternate: Titanium) |

### Boss Progression — Pre-Hardmode

| Property | Description |
|----------|-------------|
| `downedSlimeKing ↔ bool` | King Slime defeated |
| `downedEyeOfCthulhu ↔ bool` | Eye of Cthulhu defeated |
| `downedEaterOfWorlds ↔ bool` | Eater of Worlds / Brain of Cthulhu defeated |
| `downedQueenBee ↔ bool` | Queen Bee defeated |
| `downedSkeletron ↔ bool` | Skeletron defeated |
| `downedDeerclops ↔ bool` | Deerclops defeated |

### Boss Progression — Hardmode

| Property | Description |
|----------|-------------|
| `downedDestroyer ↔ bool` | Destroyer defeated |
| `downedTwins ↔ bool` | Twins defeated |
| `downedSkeletronPrime ↔ bool` | Skeletron Prime defeated |
| `downedMechBossAny → bool` | Any mech boss defeated (read-only, computed) |
| `downedPlantera ↔ bool` | Plantera defeated |
| `downedGolem ↔ bool` | Golem defeated |
| `downedFishron ↔ bool` | Duke Fishron defeated |
| `downedLunaticCultist ↔ bool` | Lunatic Cultist defeated |
| `downedMoonlord ↔ bool` | Moon Lord defeated |
| `downedEmpressOfLight ↔ bool` | Empress of Light defeated |
| `downedQueenSlime ↔ bool` | Queen Slime defeated |

### Boss Events

| Property | Description |
|----------|-------------|
| `downedHalloweenTree ↔ bool` | Mourning Wood defeated |
| `downedHalloweenKing ↔ bool` | Pumpking defeated |
| `downedChristmasTree ↔ bool` | Everscream defeated |
| `downedSanta ↔ bool` | Santa-NK1 defeated |
| `downedChristmasQueen ↔ bool` | Ice Queen defeated |
| `downedClown ↔ bool` | Clown defeated |

### Celestial Pillars

| Property | Description |
|----------|-------------|
| `downedCelestialSolar ↔ bool` | Solar Pillar defeated |
| `downedCelestialNebula ↔ bool` | Nebula Pillar defeated |
| `downedCelestialVortex ↔ bool` | Vortex Pillar defeated |
| `downedCelestialStardust ↔ bool` | Stardust Pillar defeated |
| `celestialSolarActive ↔ bool` | Solar Pillar currently active |
| `celestialVortexActive ↔ bool` | Vortex Pillar currently active |
| `celestialNebulaActive ↔ bool` | Nebula Pillar currently active |
| `celestialStardustActive ↔ bool` | Stardust Pillar currently active |

### Events & Invasions

| Property | Description |
|----------|-------------|
| `downedGoblins ↔ bool` | Goblin army defeated |
| `downedFrost ↔ bool` | Frost Legion defeated |
| `downedPirates ↔ bool` | Pirate invasion defeated |
| `downedMartians ↔ bool` | Martian Madness defeated |
| `downedDD2InvasionT1 ↔ bool` | Old One's Army tier 1 |
| `downedDD2InvasionT2 ↔ bool` | Old One's Army tier 2 |
| `downedDD2InvasionT3 ↔ bool` | Old One's Army tier 3 |
| `invasionType ↔ int` | Current invasion type |
| `invasionSize ↔ int` | Current invasion size |
| `invasionX ↔ double` | Current invasion X position |

### NPC Rescue Flags

| Property | Description |
|----------|-------------|
| `savedGoblin ↔ bool` | Goblin Tinkerer rescued |
| `savedMech ↔ bool` | Mechanic rescued |
| `savedWizard ↔ bool` | Wizard rescued |
| `savedStylist ↔ bool` | Stylist rescued |
| `savedTaxCollector ↔ bool` | Tax Collector rescued |
| `savedBartender ↔ bool` | Tavernkeep rescued |
| `savedGolfer ↔ bool` | Golfer rescued |
| `savedAngler ↔ bool` | Angler rescued |
| `anglerQuest ↔ int` | Current Angler quest ID |

### NPC Pets

| Property | Description |
|----------|-------------|
| `boughtCat ↔ bool` | Town cat purchased |
| `boughtDog ↔ bool` | Town dog purchased |
| `boughtBunny ↔ bool` | Town bunny purchased |

### NPC Unlock Flags

| Property | Description |
|----------|-------------|
| `unlockedMerchantSpawn ↔ bool` | Merchant unlocked |
| `unlockedDemolitionistSpawn ↔ bool` | Demolitionist unlocked |
| `unlockedPartyGirlSpawn ↔ bool` | Party Girl unlocked |
| `unlockedDyeTraderSpawn ↔ bool` | Dye Trader unlocked |
| `unlockedTruffleSpawn ↔ bool` | Truffle unlocked |
| `unlockedArmsDealerSpawn ↔ bool` | Arms Dealer unlocked |
| `unlockedNurseSpawn ↔ bool` | Nurse unlocked |
| `unlockedPrincessSpawn ↔ bool` | Princess unlocked |

### Town Slimes

| Property | Description |
|----------|-------------|
| `unlockedSlimeBlueSpawn ↔ bool` | Blue town slime |
| `unlockedSlimeGreenSpawn ↔ bool` | Green town slime |
| `unlockedSlimeOldSpawn ↔ bool` | Old town slime |
| `unlockedSlimePurpleSpawn ↔ bool` | Purple town slime |
| `unlockedSlimeRainbowSpawn ↔ bool` | Rainbow town slime |
| `unlockedSlimeRedSpawn ↔ bool` | Red town slime |
| `unlockedSlimeYellowSpawn ↔ bool` | Yellow town slime |
| `unlockedSlimeCopperSpawn ↔ bool` | Copper town slime |

### Lantern Night

| Property | Description |
|----------|-------------|
| `lanternNightCooldown ↔ int` | Lantern night cooldown |
| `lanternNightManual ↔ bool` | Manually triggered lantern night |
| `lanternNightGenuine ↔ bool` | Genuine lantern night active |
| `lanternNightNextNightIsGenuine ↔ bool` | Next night will be a genuine lantern night |

### Party

| Property | Description |
|----------|-------------|
| `partyManual ↔ bool` | Manually triggered party |
| `partyGenuine ↔ bool` | Genuine party active |
| `partyCooldown ↔ int` | Party cooldown |

### Backgrounds

| Property | Description |
|----------|-------------|
| `bgOcean ↔ byte` | Ocean background style |
| `bgDesert ↔ byte` | Desert background style |
| `bgCrimson ↔ byte` | Crimson background style |
| `bgHallow ↔ byte` | Hallow background style |
| `bgSnow ↔ byte` | Snow background style |
| `bgJungle ↔ byte` | Jungle background style |
| `bgCorruption ↔ byte` | Corruption background style |
| `bgTree ↔ byte` | Forest background style 1 |
| `bgTree2 ↔ byte` | Forest background style 2 |
| `bgTree3 ↔ byte` | Forest background style 3 |
| `bgTree4 ↔ byte` | Forest background style 4 |
| `underworldBg ↔ byte` | Underworld background style |
| `mushroomBg ↔ byte` | Mushroom biome background style |
| `iceBackStyle ↔ int` | Ice background style |
| `jungleBackStyle ↔ int` | Jungle background style (cave) |
| `hellBackStyle ↔ int` | Hell background style |

### Tree & Cave Styles

| Property | Description |
|----------|-------------|
| `treeX0 ↔ int`, `treeX1 ↔ int`, `treeX2 ↔ int` | Tree style zone boundaries |
| `treeStyle0 ↔ int` – `treeStyle3 ↔ int` | Tree styles per zone |
| `treeTop1 ↔ int` – `treeTop4 ↔ int` | Tree top styles per zone |
| `caveBackX0 ↔ int`, `caveBackX1 ↔ int`, `caveBackX2 ↔ int` | Cave background zone boundaries |
| `caveBackStyle0 ↔ int` – `caveBackStyle3 ↔ int` | Cave background styles per zone |

### World Bounds

| Property | Description |
|----------|-------------|
| `topWorld ↔ float` | Top world boundary |
| `bottomWorld ↔ float` | Bottom world boundary |
| `leftWorld ↔ float` | Left world boundary |
| `rightWorld ↔ float` | Right world boundary |

### Other

| Property | Description |
|----------|-------------|
| `cultistDelay ↔ int` | Cultist respawn delay |
| `apocalypse ↔ bool` | Apocalypse mode |

## `metadata` — Game Data Lookup

| Method | Description |
|--------|-------------|
| `tileId(name) → int` | Tile ID by name, -1 if not found (case-insensitive) |
| `wallId(name) → int` | Wall ID by name, -1 if not found (case-insensitive) |
| `itemId(name) → int` | Item ID by name, -1 if not found (case-insensitive) |
| `tileName(id) → string` | Tile name by ID, empty string if not found |
| `wallName(id) → string` | Wall name by ID, empty string if not found |
| `itemName(id) → string` | Item name by ID, empty string if not found |
| `allTiles() → [{id, name}]` | All tile definitions |
| `allWalls() → [{id, name}]` | All wall definitions |
| `allItems() → [{id, name}]` | All item definitions |

## `log` — Output

| Method | Description |
|--------|-------------|
| `print(msg)` | Log info message |
| `warn(msg)` | Log warning |
| `error(msg)` | Log error |
| `progress(value)` | Update progress bar (0.0–1.0) |

## `finder` — Find Sidebar Integration

| Method | Description |
|--------|-------------|
| `clear()` | Clear all find results |
| `addResult(name, x, y, type, extraInfo?) → bool` | Add result (max 1,000); returns false if cap reached |
| `navigate(index)` | Navigate to result by index |
| `navigateFirst()` | Navigate to first result |

## `tools` — UI Tools

| Method | Description |
|--------|-------------|
| `listTools() → [string]` | Available tool names |
| `copySelection()` | Copy selection to clipboard |
| `getTilePickerTile() → int` | Current tile picker tile value |
| `getTilePickerWall() → int` | Current wall picker value |

:::note
The `tools` API is only available when running scripts in the TEdit UI. It is not available in test/headless mode.
:::
