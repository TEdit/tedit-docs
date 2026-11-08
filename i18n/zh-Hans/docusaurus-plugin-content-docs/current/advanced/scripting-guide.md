---
sidebar_position: 1
description: 编写 JavaScript 与 Lua 自动化脚本指南及实战范例
---

# 脚本自动化指南

TEdit 5 内置了强大的脚本自动化引擎。支持使用 **JavaScript** (Jint) 或 **Lua** 编写脚本，批量处理物块、搜索世界、程序化填充结构等。

## AI 辅助编写脚本

你可以借助 AI 聊天助手快速生成 TEdit 脚本。点击下方链接直接发起对话，或复制预设 Prompt 粘贴到你常用的 AI 工具中。

export const aiPrompt = `You are a TEdit 5 scripting assistant. TEdit is a Terraria world editor with a built-in JavaScript (Jint) scripting engine.\n\nAPI documentation: https://docs.tedit.dev/advanced/scripting-guide\nTile/wall/item data files: https://github.com/TEdit/Terraria-Map-Editor/tree/main/src/TEdit.Terraria/Data (tiles.json, walls.json, items.json, npcs.json, prefixes.json, paints.json, etc.)\n\nKey API objects:\n- tile: read/write individual tiles (getTileType, setType, setWall, setLiquid, etc.)\n- batch: bulk operations (forEachTile, replaceTile, findTilesByType, etc.)\n- geometry: shape helpers (line, rect, ellipse, fillRect, fillEllipse, setTiles, setWalls)\n- selection: current selection bounds and point-in-selection test\n- chests: chest inventory read/write\n- signs: sign text read/write\n- npcs: NPC management\n- world: read-only world metadata (width, height, title, seed, spawnX, spawnY)\n- metadata: name/ID lookups (tileId, wallId, itemId, tileName, wallName, itemName)\n- log: output (print, warn, error, progress)\n- draw: drawing tools (pencil, brush, fill, routeWire, routeBus for CAD-style wire routing)\n- generate: procedural generation — trees (tree, forest, forestInSelection), worldgen structures (tileRunner, tunnel, lake, oreVein, listOreTypes, findSurface)\n- finder: add results to the Find sidebar panel\n- tools: UI tool access, file operations (save, saveAs, load, getFilePath, setFilePath)\n\nWhen writing scripts:\n- Use metadata.tileId("name") and metadata.wallId("name") to look up IDs by name\n- Always check selection.isActive before using selection-based operations\n- Use log.print() for output and log.progress() for long operations\n- Scripts have full access to the loaded world data\n- Framed tiles can be shifted UV coordinates to become another style of the same item (e.g. platforms, banners, chests). Check tiles.json for frame UV values.\n\nHelp the user write JavaScript scripts for TEdit. Ask what they want to accomplish and generate working scripts.`;

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
<summary>复制适用于 Claude 或 Gemini 的 Prompt 提示词</summary>

由于 Claude 和 Gemini 暂不支持通过 URL 预填 Prompt，请直接复制下方提示词粘贴到对话框中开始：

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

## 基础入门

脚本在运行时拥有对当前已加载世界数据的完整访问权限。[脚本侧边栏](../sidebar-panels/scripting.md)提供了带有语法高亮的代码编辑器、脚本文件管理功能以及运行日志输出控制台。

### 你好，世界

```javascript
log.print("Hello from TEdit scripting!");
log.print(`World: ${world.title} (${world.width}x${world.height})`);
```

```lua
log.print("Hello from TEdit scripting!")
log.print("World: " .. world.title)
```

## TypeScript 代码智能补全 {#typescript-autocomplete}

TEdit 随附提供了官方 TypeScript 类型声明文件（`tedit-api.d.ts`），可以在 VS Code 或任何支持 TypeScript 的代码编辑器中为您提供完整的语法提示与文档注释——即使是普通的纯 `.js` 脚本同样生效！

### 配置方法

1. **获取类型声明文件** — 该文件已经内置保存在您的 TEdit Scripts 脚本文件夹中（点击脚本侧边栏中的 **Open Scripts Folder** 按钮即可直接打开）。您也可以直接在此处下载：

   **[下载 tedit-api.d.ts](/tedit-api.d.ts)**

2. **添加文件引用** — 在您的 `.js` 脚本文件最顶部添加以下这一行：

   ```javascript
   /// <reference path="tedit-api.d.ts" />
   ```

   只要 `tedit-api.d.ts` 与您的脚本处于同一目录下（默认即处于同一目录），VS Code 就会自动加载它。

3. **享受代码补全** — 编写代码时即可获得所有 API 全局对象的 IntelliSense 补全（`tile`、`batch`、`world`、`tools`、`draw`、`generate` 等）。将鼠标悬停在任意方法上即可查看其功能说明与参数类型。

:::tip
`/// <reference>` 注释在 TEdit 的脚本引擎执行时会被自动忽略——它仅供代码编辑器识别使用。无论是否包含该行，脚本的实际运行效果完全一致。
:::

## 常用配方范例

### 替换选区内的物块

```javascript
if (!selection.isActive) {
  log.error("Select an area first!");
}

const from = metadata.tileId("Dirt Block");
const to = metadata.tileId("Stone Block");
const count = batch.replaceTileInSelection(from, to);
log.print(`Replaced ${count} tiles`);
```

### 用墙壁填充矩形区域

```javascript
geometry.setWalls(metadata.wallId("Stone Wall"), 100, 200, 50, 30);
log.print("Filled 50x30 area with stone walls");
```

### 查找包含特定物品的所有宝箱

```javascript
const chests = chests.findByItemName("Zenith");
for (const c of chests) {
  log.print(`Found at (${c.x}, ${c.y}): ${c.name || "Chest"}`);
  finder.addResult("Zenith Chest", c.x, c.y, "chest");
}
log.print(`Found ${chests.length} chests with Zenith`);
```

### 用物块绘制圆形

```javascript
const points = geometry.fillEllipse(500, 300, 25, 25);
const tileType = metadata.tileId("Glass Block");
for (const p of points) {
  tile.setType(p.x, p.y, tileType);
}
log.print(`Placed ${points.length} glass tiles`);
```

### 清除某种类型的所有物块

```javascript
const count = batch.clearTilesByType(metadata.tileId("Sand Block"));
log.print(`Cleared ${count} sand blocks`);
```

### 为耗时操作显示进度条

```javascript
const total = world.width * world.height;
let processed = 0;

batch.forEachTile((x, y) => {
  // ... 在此编写您的业务逻辑 ...
  processed++;
  if (processed % 100000 === 0) {
    log.progress(processed / total);
  }
});
log.progress(1.0);
log.print("Done!");
```

## 更多实战范例

### 读取指定坐标的图格信息

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

### 为选区内的所有物块涂漆

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

const paintColor = 13; // 13 = 深红 (Deep Red)
batch.forEachInSelection((x, y) => {
  if (tile.isActive(x, y)) {
    tile.setPaint(x, y, paintColor);
  }
});
log.print("Painted all tiles in selection");
```

### 为选区内的墙壁涂漆

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

const paintColor = 12; // 深色系涂漆 ID 从 12 附近开始
batch.forEachInSelection((x, y) => {
  if (tile.getWall(x, y) > 0) {
    tile.setWallPaint(x, y, paintColor);
  }
});
log.print("Painted all walls in selection");
```

### 在选区内注满水

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

batch.forEachInSelection((x, y) => {
  tile.setLiquid(x, y, 255, 1); // 255 = 满格, 1 = 水
});
log.print("Filled selection with water");
```

### 挖掘一条熔岩护城河

```javascript
// 在指定位置挖掘一条充满熔岩的护城河
const startX = 400, startY = 290, width = 60, depth = 6;

// 清理沟渠区域的物块
geometry.clearTiles(startX, startY, width, depth);

// 注入熔岩
for (let x = startX; x < startX + width; x++) {
  for (let y = startY; y < startY + depth; y++) {
    tile.setLiquid(x, y, 255, 2); // 2 = 熔岩
  }
}
log.print(`Lava moat: ${width}x${depth} at (${startX}, ${startY})`);
```

### 为平台边缘添加斜坡

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

const stoneId = metadata.tileId("Stone Block");
batch.forEachInSelection((x, y) => {
  if (tile.isActive(x, y) && tile.getTileType(x, y) === stoneId) {
    // 检查物块上方是否为空气 — 对暴露的顶部进行敲锤塑形
    if (!tile.isActive(x, y - 1)) {
      // 左边缘设为 SlopeTopLeft，右边缘设为 SlopeTopRight
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

### 用红电线铺设整个区域

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

let count = 0;
batch.forEachInSelection((x, y) => {
  if (tile.isActive(x, y)) {
    tile.setWire(x, y, 1, true); // 1 = 红电线
    count++;
  }
});
log.print(`Added red wire to ${count} tiles`);
```

### 在两点之间布设单条电线

```javascript
// 以 90° 直角布设单条红电线
draw.setWire(true, false, false, false);
draw.routeWire(100, 200, 150, 220, '90', 'h');
log.print("Routed red wire");
```

### 布设多条平行电线总线

```javascript
// 以 45° 倒角布设 5 条平行绿电线总线
draw.setWire(false, false, true, false);
const count = draw.routeBus(5, 100, 200, 200, 250, '45', 'auto');
log.print(`Placed ${count} wire tiles in 5-wire bus`);
```

### 沿布线路径铺设物块 (平台、轨道等)

```javascript
// 使用布线几何算法铺设一条石块走道
draw.setTile(metadata.tileId("Stone Block"));
draw.routeWire(50, 50, 100, 80, '90', 'v');
log.print("Routed stone path");
```

### 用彩色电线总线连接出生点与地牢

```javascript
// 从世界出生点到地牢布设 3 根红蓝双色总线
draw.setWire(true, true, false, false);
draw.routeBus(3, world.spawnX, world.spawnY - 5, world.dungeonX, world.dungeonY, '90', 'auto');
log.print("Connected spawn to dungeon with wire bus");
```

### 向下复制整列物块

```javascript
// 将 x=500 处顶部 10 行物块向下复制 10 格
const x = 500;
for (let y = 0; y < 10; y++) {
  tile.copy(x, y, x, y + 10);
}
log.print("Copied column");
```

### 统计选区内各种物块的数量

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

const counts = {};
batch.forEachInSelection((x, y) => {
  if (tile.isActive(x, y)) {
    const id = tile.getTileType(x, y);
    counts[id] = (counts[id] || 0) + 1;
  }
});

// 排序并展示数量排名前 10 的物块
const sorted = Object.entries(counts)
  .map(([id, n]) => ({ name: metadata.tileName(Number(id)), count: n }))
  .sort((a, b) => b.count - a.count);

for (const t of sorted.slice(0, 10)) {
  log.print(`${t.name}: ${t.count}`);
}
```

### 使用自定义条件查找物块

```javascript
// 查找所有涂有深红油漆的物块
const results = batch.findTiles((x, y) => {
  return tile.isActive(x, y) && tile.getPaint(x, y) === 12;
});

finder.clear();
for (const p of results) {
  finder.addResult("Painted tile", p.x, p.y, "tile");
}
log.print(`Found ${results.length} painted tiles (max 10,000)`);
```

### 定位多格物体 (anchorOnly)

```javascript
// 查找所有生命水晶 — anchorOnly 使每个多格物体仅返回一个锚点结果
const heartId = metadata.tileId("Heart Crystal");
const hearts = batch.findTilesByType(heartId, true);

finder.clear();
for (const p of hearts) {
  finder.addResult("Heart Crystal", p.x, p.y, "tile");
}
log.print(`Found ${hearts.length} heart crystals`);
```

### 按墙壁类型查找并高亮物块

```javascript
const wallId = metadata.wallId("Lihzahrd Brick Wall");
const results = batch.findTilesByWall(wallId);

finder.clear();
for (const p of results) {
  finder.addResult("Lihzahrd Wall", p.x, p.y, "wall");
}
log.print(`Found ${results.length} Lihzahrd wall tiles`);
```

### 在全图范围内替换墙壁

```javascript
const from = metadata.wallId("Dirt Wall");
const to = metadata.wallId("Stone Wall");
const count = batch.replaceWall(from, to);
log.print(`Replaced ${count} dirt walls with stone walls`);
```

### 在两点之间绘制一条物块线

```javascript
const points = geometry.line(100, 300, 250, 280);
const tileType = metadata.tileId("Obsidian Brick");
for (const p of points) {
  tile.setType(p.x, p.y, tileType);
}
log.print(`Placed ${points.length} tiles in a line`);
```

### 绘制矩形线框轮廓

```javascript
const points = geometry.rect(200, 200, 40, 20);
const tileType = metadata.tileId("Gray Brick");
for (const p of points) {
  tile.setType(p.x, p.y, tileType);
}
log.print(`Drew rectangle outline: ${points.length} tiles`);
```

### 绘制椭圆形线框轮廓

```javascript
const points = geometry.ellipse(300, 300, 30, 20);
const tileType = metadata.tileId("Glass Block");
for (const p of points) {
  tile.setType(p.x, p.y, tileType);
}
log.print(`Drew ellipse outline: ${points.length} tiles`);
```

### 清空矩形区域内的物块

```javascript
geometry.clearTiles(100, 200, 50, 30);
log.print("Cleared 50x30 area");
```

### 通过脚本创建选区

```javascript
// 从 (200, 300) 开始创建一个 100x50 的选区
selection.set(200, 300, 100, 50);
log.print(`Selection: (${selection.x}, ${selection.y}) ${selection.width}x${selection.height}`);
```

### 检测出生点是否位于选区内

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

if (selection.contains(world.spawnX, world.spawnY)) {
  log.print("Spawn point is inside the selection");
} else {
  log.print("Spawn point is outside the selection");
}
```

### 列出所有宝箱及其物品内容

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

### 向每个宝箱中添加一件物品

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

### 清空所有宝箱的指定槽位

```javascript
let cleared = 0;
for (const c of chests.getAll()) {
  chests.clearItem(c.x, c.y, 0); // 清空 0 号槽位（第一个物品槽）
  cleared++;
}
log.print(`Cleared slot 0 from ${cleared} chests`);
```

### 将宝箱指定槽位设置为特定物品

```javascript
// 在坐标 (500, 300) 处宝箱的 0 号槽位放置一把传奇天顶剑
const zenithId = metadata.itemId("Zenith");
chests.setItem(500, 300, 0, zenithId, 1, 81); // 81 = 传奇 Legendary 前缀
log.print("Placed Legendary Zenith in chest");
```

### 按名称搜索宝箱

```javascript
// 查找所有名称包含 "Loot" 的宝箱（不区分大小写子串匹配）
const results = chests.findByName("Loot");
finder.clear();
for (const c of results) {
  log.print(`"${c.name}" at (${c.x}, ${c.y})`);
  finder.addResult(c.name, c.x, c.y, "chest");
}
log.print(`Found ${results.length} chests matching "Loot"`);
```

### 重命名宝箱

```javascript
// 设置坐标 (500, 300) 处宝箱的名称/标签
chests.setName(500, 300, "My Storage");
log.print("Chest renamed");
```

### 列出所有标牌及其文字内容

```javascript
log.print(`Total signs: ${signs.count}`);
for (const s of signs.getAll()) {
  const preview = s.text.substring(0, 50);
  log.print(`(${s.x}, ${s.y}): "${preview}"`);
}
```

### 更新指定坐标标牌的文字

```javascript
signs.setText(500, 300, "Welcome to my base!");
log.print("Sign updated");
```

### 依序为所有标牌按序号编号

```javascript
const allSigns = signs.getAll();
for (let i = 0; i < allSigns.length; i++) {
  const s = allSigns[i];
  signs.setText(s.x, s.y, `Sign #${i + 1}`);
}
log.print(`Numbered ${allSigns.length} signs`);
```

### 列出所有城镇 NPC

```javascript
log.print(`Total NPCs: ${npcs.count}`);
for (const npc of npcs.getAll()) {
  log.print(`${npc.name} at (${npc.x}, ${npc.y}) home: (${npc.homeX}, ${npc.homeY})`);
  finder.addResult(npc.name, npc.x, npc.y, "npc");
}
```

### 调整 NPC 的入住住宅

```javascript
npcs.setHome("Guide", 500, 290);
log.print("Moved Guide's home to (500, 290)");
```

### 显示世界元数据信息

```javascript
log.print(`Title: ${world.title}`);
log.print(`Seed: ${world.seed}`);
log.print(`Size: ${world.width} x ${world.height}`);
log.print(`Spawn: (${world.spawnX}, ${world.spawnY})`);
log.print(`Surface: ${world.surfaceLevel}`);
log.print(`Rock layer: ${world.rockLevel}`);
```

### 按名称模糊搜索物品

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

### 按名称查询 ID

```javascript
log.print(`Dirt Block = tile ${metadata.tileId("Dirt Block")}`);
log.print(`Stone Wall = wall ${metadata.wallId("Stone Wall")}`);
log.print(`Zenith = item ${metadata.itemId("Zenith")}`);
log.print(`Tile 0 = ${metadata.tileName(0)}`);
log.print(`Wall 1 = ${metadata.wallName(1)}`);
log.print(`Item 1 = ${metadata.itemName(1)}`);
```

### 在“查找”面板中生成搜索结果

```javascript
finder.clear();

// 查找所有恶魔祭坛
const altarId = metadata.tileId("Demon Altar");
const altars = batch.findTilesByType(altarId, true);

for (const p of altars) {
  finder.addResult("Demon Altar", p.x, p.y, "tile",
    `at depth ${p.y - world.surfaceLevel}`);
}
log.print(`Found ${altars.length} altars — check Find panel`);
finder.navigateFirst();
```

### 读取物块选择器并放置对应物块

```javascript
// 放置用户当前在物块选择器中选中的物块
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

### 读取当前选择器的设定数值

```javascript
const currentTile = tools.getTilePickerTile();
const currentWall = tools.getTilePickerWall();
log.print(`Tile picker: ${metadata.tileName(currentTile)} (${currentTile})`);
log.print(`Wall picker: ${metadata.wallName(currentWall)} (${currentWall})`);
```

### 建造一间简易房屋

```javascript
const x = 400, y = 290;
const w = 12, h = 7;
const wallType = metadata.tileId("Wood");
const wallBg = metadata.wallId("Wood Wall");

// 地板与天花板
geometry.setTiles(wallType, x, y, w, 1);       // 天花板
geometry.setTiles(wallType, x, y + h - 1, w, 1); // 地板

// 左右两侧墙壁
for (let dy = 0; dy < h; dy++) {
  tile.setType(x, y + dy, wallType);
  tile.setType(x + w - 1, y + dy, wallType);
}

// 铺设背景墙
geometry.setWalls(wallBg, x + 1, y + 1, w - 2, h - 2);

// 清理室内空间
geometry.clearTiles(x + 1, y + 1, w - 2, h - 2);

// 在地板中间放置 3 格宽度的木平台作为出入口
const platId = metadata.tileId("Wood Platform");
const doorX = x + Math.floor(w / 2) - 1;
for (let dx = 0; dx < 3; dx++) {
  tile.setType(doorX + dx, y + h - 1, platId);
}

log.print(`Built ${w}x${h} house at (${x}, ${y})`);
```

### 建造一座 NPC 居民公寓楼

在出生点正上方建造一座四层公寓楼，为所有 26 位[城镇 NPC](https://terraria.wiki.gg/zh/wiki/NPC#%E5%9F%8E%E9%95%87_NPC)各提供一间标准房间。每间房均完全符合[房屋判定要求](https://terraria.wiki.gg/zh/wiki/%E6%88%BF%E5%B1%8B)：木质外框、背景墙、火把（光源）、工作台（桌类）、木椅（椅类）以及木门（出入口）。世界中现存的 NPC 会通过 `npcs.setHome()` 自动入住对应房间。

:::note
脚本 API 无法凭空生成新的 NPC — 它只能管理当前世界中已经存在的 NPC。该脚本为全部 26 位 NPC 预先建好合法房屋，以便它们在入驻世界后能立即分配到有效住宅。
:::

```javascript
// === NPC 公寓楼建造脚本 ===
// 四层公寓楼 — 为全部 26 位城镇 NPC 各建一间独立标准房（共 28 间，2 间备用）。
// 外径 12×7 = 内径 10×5，连同边框与背景墙完全满足原版房屋 60 格空间要求。
// 家具使用 sprites.placeByName() 放置 — 自动处理多格物体对齐与 UV 帧。

// ── 全部 26 位城镇 NPC（肉前 18 + 肉后 8） ──
const townNpcNames = [
  // 肉山前 (18)
  "Guide", "Merchant", "Nurse", "Demolitionist", "Dye Trader",
  "Angler", "Zoologist", "Dryad", "Painter", "Golfer",
  "Arms Dealer", "Tavernkeep", "Stylist", "Goblin Tinkerer",
  "Witch Doctor", "Clothier", "Mechanic", "Party Girl",
  // 肉山后 (8)
  "Wizard", "Tax Collector", "Truffle", "Pirate",
  "Steampunker", "Cyborg", "Santa Claus", "Princess"
];
const npcCount = townNpcNames.length; // 26

// ── 尺寸规划 ──
const roomW   = 12;  // 单间宽度（含外墙）
const roomH   = 7;   // 单间高度（含地板/天花板）
const nFloors = 4;
const perFloor = Math.ceil(npcCount / nFloors); // 每层 7 间

// 相邻房间共用 1 格隔断墙；楼层共用天花板/地板
const totalW = perFloor * (roomW - 1) + 1;      // 总宽 78 格
const totalH = roomH * nFloors - (nFloors - 1);  // 总高 25 格

// 将建筑居中置于世界出生点上方
const baseX = world.spawnX - Math.floor(totalW / 2);
const baseY = world.spawnY - totalH;

// ── 物块与墙壁 ID ──
const wood     = metadata.tileId("Wood");
const woodWall = metadata.wallId("Wood Wall");
const PLATFORM = 19;

// ── 油漆颜色（泰拉瑞亚油漆 ID） ──
// 1=红漆 2=橙漆 3=黄漆 4=橙绿漆 5=绿漆 6=青绿漆 7=青漆 8=天蓝漆
// 9=蓝漆 10=紫漆 11=蓝紫漆 12=粉漆 13–24=深色变体（13 为深红漆） 25=黑漆
// 26=白漆 27=灰漆 28=棕漆
const paintColors = [
   1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12,
  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28
];

log.print(`Building ${npcCount}-room hotel (${perFloor} per floor)`);
log.print(`Location: (${baseX}, ${baseY})  Size: ${totalW}×${totalH}`);

// ── 1. 框选并清空建筑区域 ──
selection.set(baseX, baseY, totalW, totalH);
geometry.clearTiles(baseX, baseY, totalW, totalH);

// ── 2. 建造主体结构（木质框架） ──
// 水平楼板：顶部天花板、楼层间共用楼板、地面层
geometry.setTiles(wood, baseX, baseY, totalW, 1);
for (let f = 1; f < nFloors; f++) {
  geometry.setTiles(wood, baseX, baseY + f * (roomH - 1), totalW, 1);
}
geometry.setTiles(wood, baseX, baseY + totalH - 1, totalW, 1);

// 左右外墙
for (let y = baseY; y < baseY + totalH; y++) {
  tile.setType(baseX, y, wood);
  tile.setType(baseX + totalW - 1, y, wood);
}

// 房间之间的隔断墙（全高）
for (let r = 1; r < perFloor; r++) {
  const wx = baseX + r * (roomW - 1);
  for (let y = baseY; y < baseY + totalH; y++) {
    tile.setType(wx, y, wood);
  }
}

// ── 3. 逐房间处理：墙壁 → 涂漆 → 平台 → 物体家具 → 分配 NPC ──
const existingNpcs = {};
for (const n of npcs.getAll()) { existingNpcs[n.name] = true; }

let npcIdx = 0;
let assigned = 0;
for (let f = 0; f < nFloors; f++) {
  const floorTopY = baseY + f * (roomH - 1);
  const standY    = floorTopY + roomH - 2; // 站在实心地板之上的那一格
  const doorTopY  = floorTopY + roomH - 4; // 木门锚点行（1×3 的顶格）

  for (let r = 0; r < perFloor; r++) {
    const rx = baseX + r * (roomW - 1);
    const ix = rx + 1; // 室内第一列
    const roomNum = f * perFloor + r;
    const paint = paintColors[roomNum % paintColors.length];

    // ── a. 铺设背景墙并涂漆 ──
    const wallTop = f > 0 ? floorTopY : floorTopY + 1;
    const wallBot = floorTopY + roomH - 2;
    for (let wy = wallTop; wy <= wallBot; wy++) {
      for (let wx = rx + 1; wx < rx + roomW - 1; wx++) {
        tile.setWall(wx, wy, woodWall);
        tile.setWallPaint(wx, wy, paint);
      }
    }

    // ── b. 在共用楼板铺设平台（用于上下楼层通行） ──
    if (f > 0) {
      const platX = rx + Math.floor(roomW / 2) - 1;
      for (let i = 0; i < 3; i++) {
        tile.setType(platX + i, floorTopY, PLATFORM);
        tile.setFrameUV(platX + i, floorTopY, 0, 0);
      }
    }

    // ── c. 放置物体家具：门、火把、工作台、木椅 ──
    // 相邻房间之间的隔断门
    if (r > 0) {
      sprites.placeByName("Wooden Door", rx, doorTopY);
    }
    // 最左侧外墙的入口门
    if (r === 0) {
      sprites.placeByName("Wooden Door", baseX, doorTopY);
    }

    if (npcIdx < npcCount) {
      sprites.placeByName("Torch", ix + 7, standY);
      sprites.placeByName("Wooden Work Bench", ix + 1, standY);
      sprites.placeByName("Wooden Chair", ix + 4, standY);

      // ── d. 分配 NPC 入住（站在实心地板上方） ──
      const npcName = townNpcNames[npcIdx];
      const homeX = ix + 8;
      const homeY = standY + 1; // 实心地板所在行
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
<summary>房间布局结构图（展示 4 层中的下 2 层）</summary>

```
  每间房间外宽 12 格（共用隔断墙）
  ├───────────┤
  ...          ...              （上方为第 3、4 层）
  WW===WWWWWWWWW===WWWWWWW  ── 共用楼板（中间为木平台）
  W..........DW..........W   ┐
  W..........DW..........W   │ 第 2 层（高 7 格）
  W.WW.C..T..DW.WW.C..T..W   │ WW=工作台 C=椅子
  W..........WW..........W   │ T=火把    D=木门
  WW===WWWWWWWWW===WWWWWWW  ── 共用楼板（中间为木平台）
  W..........DW..........W   ┐
  W..........DW..........W   │ 第 1 层（高 7 格）
  W.WW.C..T..DW.WW.C..T..W   │
  W..........WW..........W   ┘
  DWWWWWWWWWWWWWWWWWWWWWWW  ── 地面一层
  D = 每层最左侧外墙的入口门

  每层 7 间房 × 4 层 = 28 间房（26 位城镇 NPC + 2 间备用）
```

</details>

### 放置单棵树木

```javascript
// 在坐标 (500, 300) 处放置一棵橡树
var placed = generate.tree("oak", 500, 300);
log.print("Tree placed: " + placed);
```

### 在选区内生成混交林

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

var count = generate.forestInSelection(["oak", "sakura", "diamond"], 0.15);
log.print("Placed " + count + " trees");
```

### 列出所有可用树木类型

```javascript
var types = generate.listTreeTypes();
for (var i = 0; i < types.length; i++) {
  log.print(types[i].name + " (tile " + types[i].tileId + ")");
}
```

### 查找某一列的地表高度

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

### 在选区内铺设棋盘格图案

```javascript
if (!selection.isActive) { log.error("Select an area first!"); }

const tileA = metadata.tileId("Ebonstone Block");
const tileB = metadata.tileId("Pearlstone Block");

batch.forEachInSelection((x, y) => {
  tile.setType(x, y, (x + y) % 2 === 0 ? tileA : tileB);
});
log.print("Checkerboard pattern applied");
```

### 排干选区内的所有液体

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

### 刮除选区内的所有油漆涂料

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

### 拆除选区内的所有电线

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

## API 参考速查

### `tile` — 物块底层读写

| 方法 | 说明 |
|--------|-------------|
| `isActive(x, y) → bool` | 检查图格是否有激活的实体物块 |
| `getTileType(x, y) → int` | 获取物块类型 ID |
| `getWall(x, y) → int` | 获取墙壁类型 ID |
| `getPaint(x, y) → int` | 获取物块油漆颜色 ID |
| `getWallPaint(x, y) → int` | 获取墙壁油漆颜色 ID |
| `getLiquidAmount(x, y) → int` | 获取液体量（0–255） |
| `getLiquidType(x, y) → int` | 获取液体类型（0=无, 1=水, 2=熔岩, 3=蜂蜜） |
| `getFrameU(x, y) → int` | 获取物体帧 U 坐标 |
| `getFrameV(x, y) → int` | 获取物体帧 V 坐标 |
| `getSlope(x, y) → string` | 获取斜坡类型字符串 |
| `getWire(x, y, color) → bool` | 检查指定颜色电线（1=红, 2=蓝, 3=绿, 4=黄） |
| `getTileEcho(x, y) → bool` | 检查物块是否涂有回声涂料（隐形） |
| `getWallEcho(x, y) → bool` | 检查墙壁是否涂有回声涂料（隐形） |
| `getTileIlluminant(x, y) → bool` | 检查物块是否涂有夜明涂料（全亮） |
| `getWallIlluminant(x, y) → bool` | 检查墙壁是否涂有夜明涂料（全亮） |
| `setActive(x, y, active)` | 设置物块激活状态 |
| `setType(x, y, type)` | 设置物块类型（同时激活物块） |
| `setWall(x, y, wallType)` | 设置墙壁类型 |
| `setPaint(x, y, color)` | 设置物块油漆颜色 |
| `setWallPaint(x, y, color)` | 设置墙壁油漆颜色 |
| `setLiquid(x, y, amount, type)` | 设置液体量与类型 |
| `setWire(x, y, color, enabled)` | 设置指定颜色电线状态 |
| `setSlope(x, y, slope)` | 设置斜坡（None, HalfBrick, SlopeTopRight 等） |
| `setFrameUV(x, y, u, v)` | 设置物体帧纹理坐标 |
| `setTileEcho(x, y, value)` | 设置物块回声涂料（隐形） |
| `setWallEcho(x, y, value)` | 设置墙壁回声涂料（隐形） |
| `setTileIlluminant(x, y, value)` | 设置物块夜明涂料（全亮） |
| `setWallIlluminant(x, y, value)` | 设置墙壁夜明涂料（全亮） |
| `clear(x, y)` | 重置图格为默认空白状态 |
| `copy(fromX, fromY, toX, toY)` | 完整复制图格属性 |

### `batch` — 批量操作

| 方法 | 说明 |
|--------|-------------|
| `forEachTile(callback)` | 遍历整个世界 — `callback(x, y)` |
| `forEachInSelection(callback)` | 遍历当前选区 — `callback(x, y)` |
| `findTiles(predicate) → [{x, y}]` | 查找符合断言条件的图格（上限 10,000） |
| `findTilesByType(type, anchorOnly?) → [{x, y}]` | 按类型查找物块；anchorOnly 为 true 时仅返回多格物体锚点 |
| `findTilesByWall(wallType) → [{x, y}]` | 按墙壁类型查找图格（上限 10,000） |
| `replaceTile(from, to) → int` | 全图替换指定类型物块；返回替换数 |
| `replaceTileInSelection(from, to) → int` | 仅在选区内替换指定类型物块；返回替换数 |
| `replaceWall(from, to) → int` | 全图替换指定类型墙壁；返回替换数 |
| `clearTilesByType(type) → int` | 清除全图中指定类型的所有物块；返回清除数 |

### `geometry` — 几何图形

| 方法 | 说明 |
|--------|-------------|
| `line(x1, y1, x2, y2) → [{x, y}]` | 两点之间的直线坐标 |
| `rect(x, y, w, h) → [{x, y}]` | 矩形线框轮廓坐标 |
| `ellipse(cx, cy, rx, ry) → [{x, y}]` | 椭圆线框轮廓坐标 |
| `fillRect(x, y, w, h) → [{x, y}]` | 实心矩形坐标 |
| `fillEllipse(cx, cy, rx, ry) → [{x, y}]` | 实心椭圆坐标 |
| `setTiles(type, x, y, w, h)` | 用指定物块填充矩形区域 |
| `setWalls(type, x, y, w, h)` | 用指定墙壁填充矩形区域 |
| `clearTiles(x, y, w, h)` | 清空矩形区域内的物块 |

### `selection` — 选区管理

| 属性/方法 | 说明 |
|----------------|-------------|
| `isActive → bool` | 选区是否处于激活状态 |
| `x`, `y`, `width`, `height` | 选区边界尺寸（图格单位） |
| `left`, `top`, `right`, `bottom` | 选区四边缘坐标 |
| `set(x, y, w, h)` | 创建并激活选区 |
| `clear()` | 取消/移除选区 |
| `contains(x, y) → bool` | 点是否在选区内 |

### `chests` — 宝箱物品栏

| 方法 | 说明 |
|--------|-------------|
| `count → int` | 全图宝箱总数 |
| `getAll() → [...]` | 获取所有宝箱列表 |
| `getAt(x, y) → {...}` | 获取指定坐标处的宝箱 |
| `findByItem(id) → [...]` | 按物品 NetId 查找宝箱 |
| `findByItemName(name) → [...]` | 按物品名称查找宝箱 |
| `setName(x, y, name)` | 设置宝箱名称/标签 |
| `findByName(name) → [...]` | 按名称查找宝箱（不区分大小写子串匹配） |
| `setItem(x, y, slot, id, stack, prefix)` | 设置指定槽位的物品 |
| `clearItem(x, y, slot)` | 清空指定槽位 |
| `addItem(x, y, id, stack, prefix) → bool` | 向第一个空槽位添加物品 |

### `signs` — 标牌文字

| 方法 | 说明 |
|--------|-------------|
| `count → int` | 全图标牌总数 |
| `getAll() → [...]` | 获取所有标牌列表 |
| `getAt(x, y) → {...}` | 获取指定坐标处的标牌 |
| `setText(x, y, text)` | 更新标牌文字内容 |

### `npcs` — 城镇 NPC

| 方法 | 说明 |
|--------|-------------|
| `count → int` | 全图 NPC 总数 |
| `getAll() → [...]` | 获取所有 NPC 及其坐标信息 |
| `setHome(name, x, y)` | 设置 NPC 的入住住宅 |

### `world` — 世界元数据（只读）

| 属性 | 说明 |
|----------|-------------|
| `width`, `height` | 世界尺寸（图格单位） |
| `title` | 世界名称 |
| `seed` | 世界种子码 |
| `spawnX`, `spawnY` | 世界出生点坐标 |
| `surfaceLevel`, `rockLevel` | 地层分界高度 |

### `metadata` — 游戏数据查询

| 方法 | 说明 |
|--------|-------------|
| `tileId(name) → int` | 根据英文名查询物块 ID（未找到返回 0） |
| `wallId(name) → int` | 根据英文名查询墙壁 ID |
| `itemId(name) → int` | 根据英文名查询物品 ID |
| `tileName(id) → string` | 根据物块 ID 查询英文名称 |
| `wallName(id) → string` | 根据墙壁 ID 查询英文名称 |
| `itemName(id) → string` | 根据物品 ID 查询英文名称 |
| `allTiles()`, `allWalls()`, `allItems()` | 获取全部游戏定义列表 |

### `log` — 脚本日志输出

| 方法 | 说明 |
|--------|-------------|
| `print(msg)` | 输出常规日志 |
| `warn(msg)` | 输出警告信息 |
| `error(msg)` | 输出错误信息 |
| `progress(value)` | 更新进度条（0.0–1.0） |

### `finder` — 侧边栏“查找”面板联动

| 方法 | 说明 |
|--------|-------------|
| `clear()` | 清除搜索结果 |
| `addResult(name, x, y, type, extraInfo?)` | 添加一条结果记录（上限 1,000 条） |
| `navigate(index)` | 视图居中导航至第 index 条结果 |
| `navigateFirst()` | 视图居中导航至第一条结果 |

### `tools` — 界面工具

| 方法 | 说明 |
|--------|-------------|
| `listTools() → [string]` | 可用工具名称列表 |
| `copySelection()` | 将选区内容复制到剪贴板 |
| `getTilePickerTile() → int` | 当前物块选择器中选中的物块 ID |
| `getTilePickerWall() → int` | 当前墙壁选择器中选中的墙壁 ID |

### `tileEntities` — 图格实体管理

| 属性/方法 | 说明 |
|--------|-------------|
| `count → int` | 全图图格实体总数 |
| `weaponRackCount → int` | 武器架数量 |
| `itemFrameCount → int` | 物品框数量 |
| `mannequinCount → int` | 人体模型数量 |
| `hatRackCount → int` | 帽架数量 |
| `foodPlatterCount → int` | 盘子数量 |
| `logicSensorCount → int` | 逻辑感应器数量 |
| `trainingDummyCount → int` | 训练假人数量 |
| `pylonCount → int` | 传送晶塔数量 |
| `getAll() → [...]` | 获取所有图格实体列表 |
| `getAt(x, y) → {...}` | 获取指定坐标处的实体 |
| `getAllByType(typeName) → [...]` | 按类型名称获取实体 |
| `getAllWeaponRacks() → [...]` | 获取所有武器架 |
| `getAllItemFrames() → [...]` | 获取所有物品框 |
| `getAllMannequins() → [...]` | 获取所有人体模型 |
| `getAllHatRacks() → [...]` | 获取所有帽架 |
| `getAllFoodPlatters() → [...]` | 获取所有盘子 |
| `findByItem(itemId) → [...]` | 查找包含指定物品的实体 |
| `setItem(x, y, itemId, prefix?, stack?)` | 设置单物品实体（武器架、物品框、盘子）上的物品 |
| `clearItem(x, y)` | 移除单物品实体上的物品 |
| `setEquipment(x, y, slot, itemId, prefix?)` | 设置人体模型装备槽位 |
| `clearEquipment(x, y, slot)` | 清空人体模型装备槽位 |
| `setDye(x, y, slot, dyeId, prefix?)` | 设置人体模型染料槽位 |
| `clearDye(x, y, slot)` | 清空人体模型染料槽位 |
| `setWeapon(x, y, itemId, prefix?)` | 设置人体模型手持武器 |
| `clearWeapon(x, y)` | 清空人体模型手持武器 |
| `setPose(x, y, poseId)` | 设置人体模型姿态（0–8） |
| `getPose(x, y) → int` | 获取人体模型当前姿态 ID |
| `setHatRackItem(x, y, slot, itemId, prefix?)` | 设置帽架槽位物品 |
| `clearHatRackItem(x, y, slot)` | 清空帽架槽位物品 |
| `setHatRackDye(x, y, slot, dyeId, prefix?)` | 设置帽架槽位染料 |
| `clearHatRackDye(x, y, slot)` | 清空帽架槽位染料 |
| `setLogicSensor(x, y, logicCheck, on)` | 设置逻辑感应器检测类型与开/关状态 |
| `setTrainingDummyNpc(x, y, npcId)` | 设置绑定到训练假人的 NPC ID |

完整的方法说明与详细代码示例请参阅 [API 参考手册完整版](api-reference.md#tileentities--tile-entity-management)。

### `sprites` — 多格物体放置

| 方法 | 说明 |
|--------|-------------|
| `listSprites() → [{tileId, name, styleCount}]` | 列出所有多格物体图集 |
| `getStyles(tileId) → [{index, name, width, height}]` | 获取物块类型的样式列表 |
| `place(tileId, styleIndex, x, y) → bool` | 按物块 ID 与样式放置物体 |
| `placeByName(name, x, y) → bool` | 按名称放置匹配的第一个样式 |

### `draw` — 绘制工具

| 方法 | 说明 |
|--------|-------------|
| `setTile(tileType)` | 设置绘制的物块类型 |
| `setWall(wallType)` | 设置绘制的墙壁类型 |
| `setErase(bool)` | 开启/关闭橡皮擦模式 |
| `setPaintMode(mode)` | 设置绘制模式：`'tile'`, `'wire'`, `'liquid'` |
| `setTileColor(color)` | 设置物块涂漆颜色（0 为不涂漆） |
| `setWallColor(color)` | 设置墙壁涂漆颜色（0 为不涂漆） |
| `setBrickStyle(style)` | 斜坡样式：`'full'`, `'half'`, `'topright'` 等 |
| `setActuator(enabled, inactive?)` | 设置促动器状态及虚化状态 |
| `setTileCoating(echo?, illuminant?)` | 设置物块涂料（回声涂料、夜明涂料） |
| `setWallCoating(echo?, illuminant?)` | 设置墙壁涂料（回声涂料、夜明涂料） |
| `setLiquid(type, amount?)` | 液体类型：`'water'` / `'lava'` / `'honey'` / `'shimmer'` |
| `setWire(red?, blue?, green?, yellow?)` | 设置各颜色电线绘制标记 |
| `setTileMask(mode, tileType?)` | 物块遮罩：`'off'`, `'match'`, `'empty'`, `'notMatching'` |
| `setWallMask(mode, wallType?)` | 墙壁遮罩模式 |
| `setBrush(width, height, shape?)` | 笔刷形状：`'square'`, `'round'`, `'right'`, `'left'` 等 |
| `setBrushOutline(outline, enabled)` | 设置笔刷线框宽度及是否仅绘制边框 |
| `reset()` | 重置选择器与笔刷设置为默认值 |
| `pencil(x1, y1, x2, y2)` | 绘制 1 像素宽度的线条 |
| `brush(x1, y1, x2, y2)` | 绘制笔刷宽度的线条 |
| `fill(x, y)` | 泛洪填充 |
| `hammer(x1, y1, x2, y2)` | 沿线自动敲锤物块斜坡 |

### `generate` — 树木与森林过程生成

| 方法 | 说明 |
|--------|-------------|
| `listTreeTypes() → [{name, tileId}]` | 列出所有支持的树木类型名称与物块 ID |
| `tree(type, x, y) → bool` | 在地面坐标放置单棵树木 |
| `forest(types[], x, y, w, h, density?) → int` | 在矩形区域内随机生成树木（密度 0.0–1.0，默认 0.15） |
| `forestInSelection(types[], density?) → int` | 在当前选区内随机生成树木混交林 |
| `findSurface(x, yStart, yEnd) → int` | 向下扫描第一块实心物块表面；返回 y 坐标或 -1 |

**树木类型：** `oak`（橡树）、`palm`（棕榈树）、`mushroom`（巨型发光蘑菇）、`topaz`（黄玉树）、`amethyst`（紫晶树）、`sapphire`（蓝玉树）、`emerald`（翡翠树）、`ruby`（红玉树）、`diamond`（钻石树）、`amber`（琥珀树）、`sakura`（樱花树）、`willow`（黄柳）、`ash`（灰烬树）
