---
sidebar_position: 2
description: TEdit 全部脚本对象的完整 API 参考手册
---

# TEdit 脚本 API 参考手册

TEdit 脚本 API 的完整参考手册。
同时支持 JavaScript 与 Lua 脚本引擎。

所有 API 对象均可作为全局变量直接访问：`tile`、`batch`、`geometry`、`selection`、`sprites`、`draw`、`generate`、`chests`、`signs`、`npcs`、`tileEntities`、`world`、`metadata`、`log`、`finder`、`tools`。

:::tip TypeScript 智能补全
下载 [`tedit-api.d.ts`](/tedit-api.d.ts) 并将其放置在脚本文件同级目录下，即可在 VS Code 等编辑器中获得完整的语法提示与代码补全。详细配置说明请参阅[脚本指南](scripting-guide.md#typescript-autocomplete)。
:::

---

## `tile` — 底层物块读写

| 方法 | 说明 |
|--------|-------------|
| `isActive(x, y) → bool` | 检查图格是否有激活的物块（实体物块存在） |
| `getTileType(x, y) → int` | 获取物块类型 ID |
| `getWall(x, y) → int` | 获取墙壁类型 ID |
| `getPaint(x, y) → int` | 获取物块油漆颜色 ID |
| `getWallPaint(x, y) → int` | 获取墙壁油漆颜色 ID |
| `getLiquidAmount(x, y) → int` | 获取液体量（0–255） |
| `getLiquidType(x, y) → int` | 获取液体类型（0=无, 1=水, 2=熔岩, 3=蜂蜜） |
| `getFrameU(x, y) → int` | 获取物体帧 U 坐标（纹理 X 偏移） |
| `getFrameV(x, y) → int` | 获取物体帧 V 坐标（纹理 Y 偏移） |
| `getSlope(x, y) → string` | 获取斜坡类型字符串 |
| `getWire(x, y, color) → bool` | 检查指定颜色电线（1=红, 2=蓝, 3=绿, 4=黄） |
| `getTileEcho(x, y) → bool` | 检查物块是否涂有回声涂料（隐形） |
| `getWallEcho(x, y) → bool` | 检查墙壁是否涂有回声涂料（隐形） |
| `getTileIlluminant(x, y) → bool` | 检查物块是否涂有夜明涂料（全亮） |
| `getWallIlluminant(x, y) → bool` | 检查墙壁是否涂有夜明涂料（全亮） |
| `setActive(x, y, active)` | 设置物块激活状态（是否存在） |
| `setType(x, y, type)` | 设置物块类型（同时激活物块） |
| `setWall(x, y, wallType)` | 设置墙壁类型 |
| `setPaint(x, y, color)` | 设置物块油漆颜色 |
| `setWallPaint(x, y, color)` | 设置墙壁油漆颜色 |
| `setLiquid(x, y, amount, type)` | 设置液体量与类型 |
| `setWire(x, y, color, enabled)` | 设置指定颜色电线状态 |
| `setSlope(x, y, slope)` | 设置斜坡（`None`、`HalfBrick`、`SlopeTopRight`、`SlopeTopLeft`、`SlopeBottomRight`、`SlopeBottomLeft`） |
| `setFrameUV(x, y, u, v)` | 设置物体帧纹理坐标 |
| `setTileEcho(x, y, value)` | 设置物块回声涂料（隐形） |
| `setWallEcho(x, y, value)` | 设置墙壁回声涂料（隐形） |
| `setTileIlluminant(x, y, value)` | 设置物块夜明涂料（全亮） |
| `setWallIlluminant(x, y, value)` | 设置墙壁夜明涂料（全亮） |
| `clear(x, y)` | 重置图格为默认空白状态（清除物块、墙壁、液体、电线等） |
| `copy(fromX, fromY, toX, toY)` | 将一个图格的所有属性完整复制到另一个图格 |

## `batch` — 批量操作

| 方法 | 说明 |
|--------|-------------|
| `forEachTile(callback)` | 遍历整个世界中的所有图格 — `callback(x, y)` |
| `forEachInSelection(callback)` | 遍历当前选区内的所有图格 — `callback(x, y)` |
| `findTiles(predicate) → [{x, y}]` | 查找符合断言 `predicate(x, y) → bool` 的图格（上限 10,000） |
| `findTilesByType(type, anchorOnly?) → [{x, y}]` | 按类型查找物块；`anchorOnly` 设为 true 时仅返回多格物体的锚点坐标 |
| `findTilesByWall(wallType) → [{x, y}]` | 按墙壁类型查找图格（上限 10,000） |
| `replaceTile(from, to) → int` | 在全图替换某种类型的所有物块；返回替换数量 |
| `replaceTileInSelection(from, to) → int` | 仅在选区内替换某种类型的物块；返回替换数量 |
| `replaceWall(from, to) → int` | 在全图替换某种类型的所有墙壁；返回替换数量 |
| `clearTilesByType(type) → int` | 清除全图中指定类型的所有物块；返回清除数量 |

## `geometry` — 几何图形

| 方法 | 说明 |
|--------|-------------|
| `line(x1, y1, x2, y2) → [{x, y}]` | 计算两点之间的直线坐标列表（Bresenham 算法） |
| `rect(x, y, w, h) → [{x, y}]` | 计算矩形线框轮廓的坐标列表 |
| `ellipse(cx, cy, rx, ry) → [{x, y}]` | 计算椭圆线框轮廓的坐标列表（中心对齐） |
| `fillRect(x, y, w, h) → [{x, y}]` | 计算实心填充矩形的坐标列表 |
| `fillEllipse(cx, cy, rx, ry) → [{x, y}]` | 计算实心填充椭圆的坐标列表（中心对齐） |
| `setTiles(type, x, y, w, h)` | 用指定物块填充矩形区域（支持撤销） |
| `setWalls(type, x, y, w, h)` | 用指定墙壁填充矩形区域（支持撤销） |
| `clearTiles(x, y, w, h)` | 清空矩形区域内的物块（支持撤销） |

## `selection` — 选区管理

| 属性/方法 | 说明 |
|----------------|-------------|
| `isActive → bool` | 选区当前是否激活 |
| `x`, `y`, `width`, `height` | 选区边界尺寸（图格单位） |
| `left`, `top`, `right`, `bottom` | 选区四边缘坐标（right/bottom 为左闭右开区间） |
| `set(x, y, w, h)` | 创建并激活选区 |
| `clear()` | 取消/清除当前选区 |
| `contains(x, y) → bool` | 判断指定图格坐标是否位于选区内 |

## `sprites` — 多格物体放置

| 方法 | 说明 |
|--------|-------------|
| `listSprites() → [{tileId, name, styleCount}]` | 列出所有多格物体（家具、装饰等）的图集信息 |
| `getStyles(tileId) → [{index, name, width, height}]` | 获取指定物块类型的全部可用样式列表 |
| `place(tileId, styleIndex, x, y) → bool` | 根据物块 ID 与样式索引在指定坐标放置物体 |
| `placeByName(name, x, y) → bool` | 根据名称放置匹配的第一个样式（不区分大小写） |

:::note
放置物体时，如果该物体属于特定实体类型，会在其锚点位置自动创建对应的图格实体（宝箱 Chest、标牌 Sign、图格实体 TileEntity 等）。
:::

## `draw` — 绘制工具

### 拾色器与笔刷配置

| 方法 | 说明 |
|--------|-------------|
| `setTile(tileType)` | 设置绘制的物块类型 |
| `setWall(wallType)` | 设置绘制的墙壁类型 |
| `setErase(bool)` | 开启或关闭橡皮擦模式 |
| `setPaintMode(mode)` | 设置绘制模式：`'tile'` / `'tileandwall'`、`'wire'`、`'liquid'` |
| `setTileColor(color)` | 设置物块涂漆颜色（0 为不涂漆） |
| `setWallColor(color)` | 设置墙壁涂漆颜色（0 为不涂漆） |
| `setBrickStyle(style)` | 斜坡样式：`'full'`、`'half'`、`'topright'`、`'topleft'`、`'bottomright'`、`'bottomleft'` |
| `setActuator(enabled, inactive?)` | 设置促动器状态及虚化状态 |
| `setTileCoating(echo?, illuminant?)` | 设置物块涂料（回声涂料、夜明涂料） |
| `setWallCoating(echo?, illuminant?)` | 设置墙壁涂料（回声涂料、夜明涂料） |
| `setLiquid(type, amount?)` | 液体：类型 `'water'` / `'lava'` / `'honey'` / `'shimmer'` / `'none'`；容量 `'full'` / `'half'` / `'quarter'` |
| `setWire(red?, blue?, green?, yellow?)` | 设置各颜色电线绘制标记（布尔值） |
| `setTileMask(mode, tileType?)` | 物块遮罩模式：`'off'`、`'match'`、`'empty'`、`'notmatching'` |
| `setWallMask(mode, wallType?)` | 墙壁遮罩模式 |
| `setBrush(width, height, shape?)` | 形状：`'square'`、`'round'`、`'right'`、`'left'`、`'star'`、`'triangle'`、`'crescent'`、`'donut'`、`'cross'` / `'x'` |
| `setRotation(degrees)` | 设置笔刷旋转角度（度数） |
| `setFlip(horizontal?, vertical?)` | 设置笔刷水平/垂直翻转状态 |
| `setSpray(enabled, density?, tickMs?)` | 开启喷枪模式（密度默认 50，喷射间隔默认 100ms） |
| `setBrushOutline(outline, enabled)` | 设置笔刷线框宽度并启用/禁用线框 |
| `reset()` | 重置拾色器和笔刷设置为默认值 |

### 绘制操作

| 方法 | 说明 |
|--------|-------------|
| `pencil(x1, y1, x2, y2)` | 在两点之间绘制 1 像素宽度的铅笔线条 |
| `brush(x1, y1, x2, y2)` | 在两点之间绘制笔刷宽度的线条 |
| `fill(x, y)` | 从指定坐标进行油漆桶泛洪填充（受选区限制） |
| `hammer(x1, y1, x2, y2)` | 沿笔刷宽度的线段对物块自动进行敲锤塑形（斜坡/半砖） |

### 电线布线 {#wire-routing}

沿 CAD 风格路径布设电线（或物块）。使用通过 `setWire()` 或 `setTile()` 设置的当前拾色器配置。

| 方法 | 说明 |
|--------|-------------|
| `routeWire(x1, y1, x2, y2, mode?, direction?) → int` | 布设单条电线路径；返回布设的图格数 |
| `routeBus(wireCount, x1, y1, x2, y2, mode?, direction?) → int` | 布设多条平行总线；返回布设的图格数 |
| `routeWirePath(x1, y1, x2, y2, mode?, direction?) → [{x, y}]` | 获取单条电线路径的坐标列表（不实际执行放置） |
| `routeBusPath(wireCount, x1, y1, x2, y2, mode?, direction?) → [{x, y}]` | 获取平行总线路径的坐标列表（不实际执行放置） |

**参数说明：**
- **mode** — `'90'`（默认）为 90° 直角弯头，`'45'` 为 45° 倒角弯头
- **direction** — `'auto'`（默认自动判断），`'h'` 为水平优先，`'v'` 为垂直优先
- **wireCount** — 并行总线数量（自动换算为笔刷宽度：间距 × (数量 − 1) + 1）

**间距规则：** 90° 模式采用 2 格间距（1 格空隙），45° 模式采用 3 格间距（2 格空隙）。

```javascript
// 以 90° 直角布设红电线
draw.setWire(true, false, false, false);
draw.routeWire(100, 200, 150, 220, '90', 'h');

// 以 45° 倒角布设 4 条平行蓝电线总线
draw.setWire(false, true, false, false);
draw.routeBus(4, 100, 200, 150, 220, '45', 'auto');

// 将布线算法用于铺设物块而非电线
draw.setTile(1); // 石块 Stone
draw.routeWire(50, 50, 80, 70);

// 获取路径坐标用于自定义处理
var path = draw.routeWirePath(10, 10, 30, 20, '90', 'v');
for (var i = 0; i < path.length; i++) {
    log.print(path[i].x + "," + path[i].y);
}
```

## `generate` — 过程生成

### 树木与森林

| 方法 | 说明 |
|--------|-------------|
| `listTreeTypes() → [{name, tileId}]` | 列出所有支持的树木类型名称与物块 ID |
| `tree(type, x, y) → bool` | 在地面坐标 (x, y) 放置单棵树木；type 为类型名称字符串 |
| `forest(types[], x, y, w, h, density?) → int` | 在指定矩形内随机生成树木；密度 0.0–1.0（默认 0.15） |
| `forestInSelection(types[], density?) → int` | 在当前选区内随机生成树木森林 |
| `findSurface(x, yStart, yEnd) → int` | 向下扫描第一块实心物块表面；返回 y 坐标或 -1（未找到） |

**树木类型：** `oak`（橡树 5）、`palm`（棕榈树 323）、`mushroom`（巨型发光蘑菇 72）、`topaz`（黄玉树 583）、`amethyst`（紫晶树 584）、`sapphire`（蓝玉树 585）、`emerald`（翡翠树 586）、`ruby`（红玉树 587）、`diamond`（钻石树 588）、`amber`（琥珀树 589）、`sakura`（樱花树 596）、`willow`（黄柳 616）、`ash`（灰烬树 634）

:::note
树木会从给定的 y 坐标（地表高度）向上生长。`forest` 与 `forestInSelection` 方法在内部调用 `findSurface` 自动定位各列的实心地表。
:::

### 世界生成地形结构 {#worldgen-structures}

移植自泰拉瑞亚原版 `WorldGen` 内部方法 — 过程化地形生成的核心原语。

| 方法 | 说明 |
|--------|-------------|
| `tileRunner(x, y, strength, steps, tileType, speedX?, speedY?)` | 随机漫步笔刷：以 `tileType` 填充菱形斑块。对应原版 `WorldGen.TileRunner`。 |
| `tunnel(x, y, strength, steps, speedX?, speedY?)` | 挖掘自然洞穴隧道（沿漫步路径清除物块） |
| `lake(x, y, liquidType?, strength?)` | 生成不规则液体池。`liquidType`：`"water"`（默认水）、`"lava"`、`"honey"`、`"shimmer"`。`strength` 缩放池塘尺寸（默认 1.0）。 |
| `oreVein(oreName, x, y, size?)` | 使用预设放置指定名称的矿脉。`size`：`"small"`（0.5x）、`"medium"`（1x，默认）、`"large"`（2x）。 |
| `listOreTypes() → [{name, tileId}]` | 列出所有可用矿石名称及其物块 ID |

**矿石类型：** `copper`（铜 7）、`tin`（锡 166）、`iron`（铁 6）、`lead`（铅 167）、`silver`（银 9）、`tungsten`（钨 168）、`gold`（金 8）、`platinum`（铂金 169）、`meteorite`（陨石 37）、`hellstone`（狱石 58）、`cobalt`（钴 107）、`palladium`（钯金 221）、`mythril`（秘银 108）、`orichalcum`（山铜 222）、`adamantite`（精金 111）、`titanium`（钛金 223）、`chlorophyte`（叶绿 211）、`luminite`（夜明 408）

:::tip TileRunner 参数提示
- **strength** 控制斑块半径（矿石约 3–15，大型地貌斑块约 10–40）
- **steps** 控制漫步延伸步数（矿石约 5–20，延伸矿脉约 20–60）
- **speedX/speedY** 添加方向偏置（默认 0 为完全随机漫步）
- 漫步器填充曼哈顿距离菱形，其强度在 `steps` 次迭代中由满 `strength` 逐渐衰减至 0
- 对帧敏感的物块（家具、植物等）会自动跳过不予破坏
:::

```javascript
// 在指定坐标周围散布金矿
generate.oreVein("gold", 500, 400);
generate.oreVein("gold", 500, 400, "large");

// 挖掘一条水平走向的自然洞穴
generate.tunnel(100, 300, 8, 30, 1.0, 0.0);

// 创建一个水池
generate.lake(500, 500, "water", 1.5);

// 使用 tileRunner 生成自定义物块斑块
var dirt = metadata.tileId("Dirt Block");
generate.tileRunner(300, 300, 10, 20, dirt);

// 列出所有矿石类型
log.print(JSON.stringify(generate.listOreTypes()));
```

## `chests` — 宝箱物品栏

| 属性/方法 | 说明 |
|--------|-------------|
| `count → int` | 全图宝箱总数 |
| `getAll() → [{x, y, name, items}]` | 获取所有宝箱；items 数组包含 `{slot, id, name, stack, prefix}` |
| `getAt(x, y) → {x, y, name, items}` | 获取指定坐标处的宝箱（不存在则为 null） |
| `findByItem(id) → [...]` | 按物品 NetId 查找包含该物品的宝箱 |
| `findByItemName(name) → [...]` | 按物品名称查找包含该物品的宝箱（不区分大小写子串匹配） |
| `setName(x, y, name)` | 设置宝箱名称/标签 |
| `findByName(name) → [...]` | 按宝箱名称查找宝箱（不区分大小写子串匹配） |
| `setItem(x, y, slot, id, stack, prefix)` | 设置宝箱指定槽位的物品内容 |
| `clearItem(x, y, slot)` | 清空指定槽位的物品 |
| `addItem(x, y, id, stack, prefix) → bool` | 向第一个可用空槽位添加物品；若已满返回 false |

## `signs` — 标牌文字

| 属性/方法 | 说明 |
|--------|-------------|
| `count → int` | 全图标牌总数 |
| `getAll() → [{x, y, text}]` | 获取所有标牌列表 |
| `getAt(x, y) → {x, y, text}` | 获取指定坐标处的标牌（不存在则为 null） |
| `setText(x, y, text)` | 更新指定标牌的文本内容 |

## `npcs` — 世界 NPC 管理

管理世界中的所有 NPC，包括城镇居民、Boss、敌怪以及任何[怪物图鉴](https://terraria.wiki.gg/zh/wiki/%E6%80%AA%E7%89%A9%E5%9B%BE%E9%89%B4)条目。

| 属性/方法 | 说明 |
|--------|-------------|
| `count → int` | 全图 NPC 总数 |
| `getAll() → [{name, displayName, spriteId, x, y, homeX, homeY, isHomeless}]` | 获取所有 NPC（含重复个体） |
| `setHome(name, x, y)` | 为匹配该名称的第一个 NPC 设置住宅坐标（不区分大小写） |
| `setHome(name, x, y, index)` | 为匹配该名称的第 N 个 NPC 设置住宅坐标（索引从 0 开始） |
| `setHomeAll(name, x, y) → int` | 为匹配该名称的所有 NPC 批量设置住宅；返回设置数量 |
| `create(name, displayName, x, y)` | 通过 name、fullName、bestiaryId 或 sprite ID 创建 NPC |
| `remove(name) → bool` | 移除匹配该名称的第一个 NPC |

## `tileEntities` — 图格实体管理 {#tileentities--tile-entity-management}

图格实体是附着在特定物块上的高级游戏对象：武器架、物品框、人体模型、帽架、盘子、逻辑感应器、训练假人以及晶塔等。

### 数量统计

| 属性 | 说明 |
|----------|-------------|
| `count → int` | 全图图格实体总数 |
| `mannequinCount → int` | 人体模型数量 |
| `weaponRackCount → int` | 武器架数量 |
| `hatRackCount → int` | 帽架数量 |
| `itemFrameCount → int` | 物品框数量 |
| `foodPlatterCount → int` | 盘子数量 |
| `logicSensorCount → int` | 逻辑感应器数量 |
| `trainingDummyCount → int` | 训练假人数量 |
| `pylonCount → int` | 传送晶塔数量 |

### 查询方法

| 方法 | 说明 |
|--------|-------------|
| `getAll() → [{x, y, type, ...}]` | 获取所有图格实体列表 |
| `getAt(x, y) → {x, y, type, ...}` | 获取指定坐标处的实体（不存在则为 null） |
| `getAllByType(typeName) → [...]` | 按类型名称获取实体（类型名参见下方列表） |
| `getAllMannequins() → [...]` | 获取所有人体模型 |
| `getAllWeaponRacks() → [...]` | 获取所有武器架 |
| `getAllHatRacks() → [...]` | 获取所有帽架 |
| `getAllItemFrames() → [...]` | 获取所有物品框 |
| `getAllFoodPlatters() → [...]` | 获取所有盘子 |
| `findByItem(itemId) → [...]` | 查找包含指定物品的所有图格实体 |

**用于 `getAllByType` 的类型名称：** `DisplayDoll`、`WeaponRack`、`HatRack`、`ItemFrame`、`FoodPlatter`、`LogicSensor`、`TrainingDummy`、`TeleportationPylon`、`DeadCellsDisplayJar`、`KiteAnchor`、`CritterAnchor`

### 单物品实体 (武器架、物品框、盘子、死亡细胞展示罐)

这些实体各自容纳一个单件物品，包含 ID、前缀以及堆叠数量。

| 方法 | 说明 |
|--------|-------------|
| `setItem(x, y, itemId, prefix?, stack?)` | 设置实体上的物品（prefix 默认 0，stack 默认 1） |
| `clearItem(x, y)` | 移除实体上的物品 |

**返回对象字段：** `x`、`y`、`type`、`itemId`、`prefix`、`stack`

```javascript
// 示例：在坐标 (100, 200) 的武器架上放置一把泰拉刃
tileEntities.setItem(100, 200, 757); // 757 = 泰拉刃 Terra Blade

// 示例：查找所有武器架并列出它们展示的武器
var racks = tileEntities.getAllWeaponRacks();
for (var i = 0; i < racks.length; i++) {
    var r = racks[i];
    if (r.itemId > 0) {
        log.print("Rack at " + r.x + "," + r.y + " has item " + metadata.itemName(r.itemId));
    }
}
```

### 人体模型 {#mannequins-and-display-dolls}

人体模型拥有装备栏、染料栏、武器栏（Misc[0]）以及姿态设定。

| 方法 | 说明 |
|--------|-------------|
| `setEquipment(x, y, slot, itemId, prefix?)` | 设置装备槽位（索引从 0 开始） |
| `clearEquipment(x, y, slot)` | 清空指定装备槽位 |
| `setDye(x, y, slot, dyeId, prefix?)` | 设置染料槽位 |
| `clearDye(x, y, slot)` | 清空指定染料槽位 |
| `setWeapon(x, y, itemId, prefix?)` | 设置手持武器（Misc[0] 槽位） |
| `clearWeapon(x, y)` | 清空手持武器槽位 |
| `setPose(x, y, poseId)` | 设置人体模型姿态（0–8） |
| `getPose(x, y) → int` | 获取当前姿态 ID |

**返回对象字段：** `x`、`y`、`type`、`items`（装备数组）、`dyes`（染料数组）、`pose`

### 帽架 {#hat-rack}

| 方法 | 说明 |
|--------|-------------|
| `setHatRackItem(x, y, slot, itemId, prefix?)` | 设置帽架槽位的帽子物品 |
| `clearHatRackItem(x, y, slot)` | 清空帽架指定槽位 |
| `setHatRackDye(x, y, slot, dyeId, prefix?)` | 设置帽架槽位的染料 |
| `clearHatRackDye(x, y, slot)` | 清空帽架指定槽位的染料 |

**返回对象字段：** `x`、`y`、`type`、`items`、`dyes`

### 逻辑感应器 {#logic-sensor}

| 方法 | 说明 |
|--------|-------------|
| `setLogicSensor(x, y, logicCheck, on)` | 设置逻辑检测类型以及激活（开/关）状态 |

**返回对象字段：** `x`、`y`、`type`、`logicCheck`、`on`

### 训练假人 {#training-dummy}

| 方法 | 说明 |
|--------|-------------|
| `setTrainingDummyNpc(x, y, npcId)` | 设置绑定到训练假人的 NPC ID |

**返回对象字段：** `x`、`y`、`type`、`npcId`

## `world` — 世界属性

### 核心属性

| 属性 | 说明 |
|----------|-------------|
| `width → int` | 世界宽度（图格单位，只读） |
| `height → int` | 世界高度（图格单位，只读） |
| `title ↔ string` | 世界名称 |
| `worldId ↔ int` | 世界 ID |
| `seed ↔ string` | 世界种子码 |
| `isFavorite ↔ bool` | 在世界列表中是否标记为喜爱 |
| `isChinese ↔ bool` | 中文本地化版本标记 |
| `isConsole ↔ bool` | 主机版世界标记 |
| `fileRevision ↔ uint` | 文件版本修订计数 |
| `worldGenVersion ↔ ulong` | 世界生成器版本 |
| `creationTime ↔ long` | 世界创建时间戳 |
| `lastPlayed ↔ long` | 最后游玩时间戳 |

### 出生点与地牢

| 属性 | 说明 |
|----------|-------------|
| `spawnX ↔ int`, `spawnY ↔ int` | 世界默认出生点坐标 |
| `dungeonX ↔ int`, `dungeonY ↔ int` | 地牢入口坐标 |

### 地层标高

| 属性 | 说明 |
|----------|-------------|
| `surfaceLevel ↔ double` | 地表高度 Y |
| `rockLevel ↔ double` | 地下岩石层高度 Y |
| `safeGroundLayers ↔ bool` | 是否启用安全地层模式 |

### 时间与天候系统

| 属性 | 说明 |
|----------|-------------|
| `time ↔ double` | 当前时间数值 |
| `dayTime ↔ bool` | 是否为白天 |
| `fastForwardTime ↔ bool` | 时间快进是否激活 |
| `sundialCooldown ↔ byte` | 附魔日晷冷却剩余天数 |
| `fastForwardTimeToDusk ↔ bool` | 快进到黄昏是否激活 |
| `moondialCooldown ↔ byte` | 附魔月晷冷却剩余天数 |

### 月相与日食

| 属性 | 说明 |
|----------|-------------|
| `moonPhase ↔ int` | 月相（0–7） |
| `bloodMoon ↔ bool` | 血月是否正在发生 |
| `moonType ↔ byte` | 月亮样式外观 |
| `isEclipse ↔ bool` | 日食是否正在发生 |

### 天气

| 属性 | 说明 |
|----------|-------------|
| `isRaining ↔ bool` | 是否正在下雨 |
| `tempRainTime ↔ int` | 降雨剩余时间 |
| `tempMaxRain ↔ float` | 最大降雨强度 |
| `slimeRainTime ↔ double` | 史莱姆雨剩余时间 |
| `tempMeteorShowerCount ↔ int` | 流星雨计数 |
| `tempCoinRain ↔ int` | 硬币雨数值 |
| `numClouds ↔ short` | 云朵数量 |
| `windSpeedSet ↔ float` | 风速设置 |
| `cloudBgActive ↔ float` | 背景云层活跃度 |

### 沙尘暴

| 属性 | 说明 |
|----------|-------------|
| `sandStormHappening ↔ bool` | 沙尘暴是否正在发生 |
| `sandStormTimeLeft ↔ int` | 沙尘暴剩余时间 |
| `sandStormSeverity ↔ float` | 当前沙尘暴剧烈程度 |
| `sandStormIntendedSeverity ↔ float` | 目标沙尘暴剧烈程度 |

### 节日

| 属性 | 说明 |
|----------|-------------|
| `forceHalloweenForToday ↔ bool` | 今日强制开启万圣节 |
| `forceXMasForToday ↔ bool` | 今日强制开启圣诞节 |
| `forceHalloweenForever ↔ bool` | 永久强制开启万圣节 |
| `forceXMasForever ↔ bool` | 永久强制开启圣诞节 |

### 游戏难度与进度标记

| 属性 | 说明 |
|----------|-------------|
| `hardMode ↔ bool` | 困难模式是否已开启（肉后） |
| `gameMode ↔ int` | 难度模式：0=经典 Classic, 1=专家 Expert, 2=大师 Master, 3=旅途 Journey |
| `spawnMeteor ↔ bool` | 是否排队等待坠落陨石 |
| `combatBookUsed ↔ bool` | 是否已使用《先进战斗技术》 |
| `combatBookVolumeTwoWasUsed ↔ bool` | 是否已使用《先进战斗技术第二卷》 |
| `peddlersSatchelWasUsed ↔ bool` | 是否已使用《小贩背包》 |
| `partyOfDoom ↔ bool` | 末日派对是否激活 |

### 特殊世界种子 {#secret-world-seeds}

| 属性 | 说明 |
|----------|-------------|
| `drunkWorld ↔ bool` | 醉酒世界种子（05162020） |
| `goodWorld ↔ bool` | For the Worthy 种子 |
| `tenthAnniversaryWorld ↔ bool` | 十周年庆典种子（Celebrationmk10） |
| `dontStarveWorld ↔ bool` | 永恒领域种子（The Constant，饥荒联动） |
| `notTheBeesWorld ↔ bool` | 蜜蜂世界种子（Not the Bees） |
| `remixWorld ↔ bool` | 颠倒世界种子（Remix / Don't dig up） |
| `noTrapsWorld ↔ bool` | 陷阱世界种子（No Traps） |
| `zenithWorld ↔ bool` | 天顶世界种子（Get fixed boi） |
| `skyblockWorld ↔ bool` | 空岛世界种子（Skyblock） |
| `vampireSeed ↔ bool` | 吸血鬼种子 |
| `infectedSeed ↔ bool` | 感染种子 |
| `dualDungeonsSeed ↔ bool` | 双地牢种子 |
| `isCrimson ↔ bool` | 猩红世界（false 为腐化世界） |

### 矿石层级与祭坛

| 属性 | 说明 |
|----------|-------------|
| `altarCount ↔ int` | 已砸碎的祭坛数量 |
| `shadowOrbSmashed ↔ bool` | 是否已砸碎过暗影珠 / 猩红之心 |
| `shadowOrbCount ↔ int` | 已砸碎的暗影珠 / 猩红之心数量 |
| `savedOreTiersCopper ↔ int` | 铜矿物块 ID（替代矿物：锡矿） |
| `savedOreTiersIron ↔ int` | 铁矿物块 ID（替代矿物：铅矿） |
| `savedOreTiersSilver ↔ int` | 银矿物块 ID（替代矿物：钨矿） |
| `savedOreTiersGold ↔ int` | 金矿物块 ID（替代矿物：铂金矿） |
| `savedOreTiersCobalt ↔ int` | 钴矿物块 ID（替代矿物：钯金矿） |
| `savedOreTiersMythril ↔ int` | 秘银矿物块 ID（替代矿物：山铜矿） |
| `savedOreTiersAdamantite ↔ int` | 精金矿物块 ID（替代矿物：钛金矿） |

### Boss 击败进度 — 困难模式前 {#pre-hardmode-bosses}

| 属性 | 说明 |
|----------|-------------|
| `downedSlimeKing ↔ bool` | 击败史莱姆王 |
| `downedEyeOfCthulhu ↔ bool` | 击败克苏鲁之眼 |
| `downedEaterOfWorlds ↔ bool` | 击败世界吞噬怪 / 克苏鲁之脑 |
| `downedQueenBee ↔ bool` | 击败蜂王 |
| `downedSkeletron ↔ bool` | 击败骷髅王 |
| `downedDeerclops ↔ bool` | 击败鹿角怪 |

### Boss 击败进度 — 困难模式 {#hardmode-bosses}

| 属性 | 说明 |
|----------|-------------|
| `downedDestroyer ↔ bool` | 击败毁灭者（机械蠕虫） |
| `downedTwins ↔ bool` | 击败双子魔眼 |
| `downedSkeletronPrime ↔ bool` | 击败机械骷髅王 |
| `downedMechBossAny → bool` | 击败任意机械 Boss（只读计算属性） |
| `downedPlantera ↔ bool` | 击败世纪之花 |
| `downedGolem ↔ bool` | 击败石巨人 |
| `downedFishron ↔ bool` | 击败猪龙鱼公爵 |
| `downedLunaticCultist ↔ bool` | 击败拜月教邪教徒 |
| `downedMoonlord ↔ bool` | 击败月亮领主 |
| `downedEmpressOfLight ↔ bool` | 击败光之女皇 |
| `downedQueenSlime ↔ bool` | 击败史莱姆皇后 |

### 节日事件 Boss

| 属性 | 说明 |
|----------|-------------|
| `downedHalloweenTree ↔ bool` | 击败哀木（南瓜月） |
| `downedHalloweenKing ↔ bool` | 击败南瓜王（南瓜月） |
| `downedChristmasTree ↔ bool` | 击败常绿尖叫怪（霜月） |
| `downedSanta ↔ bool` | 击败圣诞坦克（霜月） |
| `downedChristmasQueen ↔ bool` | 击败冰雪女王（霜月） |
| `downedClown ↔ bool` | 击败小丑（血月） |

### 天界柱 {#celestial-pillars}

| 属性 | 说明 |
|----------|-------------|
| `downedCelestialSolar ↔ bool` | 击败日耀柱 |
| `downedCelestialNebula ↔ bool` | 击败星云柱 |
| `downedCelestialVortex ↔ bool` | 击败星旋柱 |
| `downedCelestialStardust ↔ bool` | 击败星尘柱 |
| `celestialSolarActive ↔ bool` | 日耀柱当前活跃在场 |
| `celestialVortexActive ↔ bool` | 星旋柱当前活跃在场 |
| `celestialNebulaActive ↔ bool` | 星云柱当前活跃在场 |
| `celestialStardustActive ↔ bool` | 星尘柱当前活跃在场 |

### 事件与入侵 {#events-and-invasions}

| 属性 | 说明 |
|----------|-------------|
| `downedGoblins ↔ bool` | 击退哥布林军队 |
| `downedFrost ↔ bool` | 击退雪人军团 |
| `downedPirates ↔ bool` | 击退海盗入侵 |
| `downedMartians ↔ bool` | 击退火星暴乱 |
| `downedDD2InvasionT1 ↔ bool` | 击退撒旦军队 一级 |
| `downedDD2InvasionT2 ↔ bool` | 击退撒旦军队 二级 |
| `downedDD2InvasionT3 ↔ bool` | 击退撒旦军队 三级（双足翼龙） |
| `invasionType ↔ int` | 当前入侵类型 ID |
| `invasionSize ↔ int` | 当前入侵剩余规模 |
| `invasionX ↔ double` | 当前入侵事件中心 X 坐标 |

### NPC 拯救标记

| 属性 | 说明 |
|----------|-------------|
| `savedGoblin ↔ bool` | 已解救哥布林工匠 |
| `savedMech ↔ bool` | 已解救机械师 |
| `savedWizard ↔ bool` | 已解救巫师 |
| `savedStylist ↔ bool` | 已解救发型师 |
| `savedTaxCollector ↔ bool` | 已解救税收官 |
| `savedBartender ↔ bool` | 已解救酒馆老板 |
| `savedGolfer ↔ bool` | 已解救高尔夫球手 |
| `savedAngler ↔ bool` | 已解救渔夫 |
| `anglerQuest ↔ int` | 当前渔夫任务 ID |

### 城镇宠物 {#town-pets}

| 属性 | 说明 |
|----------|-------------|
| `boughtCat ↔ bool` | 已购买城镇猫咪 |
| `boughtDog ↔ bool` | 已购买城镇狗狗 |
| `boughtBunny ↔ bool` | 已购买城镇兔子 |

### NPC 解锁入住标记

| 属性 | 说明 |
|----------|-------------|
| `unlockedMerchantSpawn ↔ bool` | 已解锁商人入住 |
| `unlockedDemolitionistSpawn ↔ bool` | 已解锁爆破专家入住 |
| `unlockedPartyGirlSpawn ↔ bool` | 已解锁派对女孩入住 |
| `unlockedDyeTraderSpawn ↔ bool` | 已解锁染料商入住 |
| `unlockedTruffleSpawn ↔ bool` | 已解锁松露人入住 |
| `unlockedArmsDealerSpawn ↔ bool` | 已解锁军火商入住 |
| `unlockedNurseSpawn ↔ bool` | 已解锁护士入住 |
| `unlockedPrincessSpawn ↔ bool` | 已解锁公主入住 |

### 城镇史莱姆 {#town-slimes}

| 属性 | 说明 |
|----------|-------------|
| `unlockedSlimeBlueSpawn ↔ bool` | 书呆子史莱姆已入住 |
| `unlockedSlimeGreenSpawn ↔ bool` | 酷酷史莱姆已入住 |
| `unlockedSlimeOldSpawn ↔ bool` | 长者史莱姆已入住 |
| `unlockedSlimePurpleSpawn ↔ bool` | 笨拙史莱姆已入住 |
| `unlockedSlimeRainbowSpawn ↔ bool` | 天后史莱姆已入住 |
| `unlockedSlimeRedSpawn ↔ bool` | 暴躁史莱姆已入住 |
| `unlockedSlimeYellowSpawn ↔ bool` | 神秘史莱姆已入住 |
| `unlockedSlimeCopperSpawn ↔ bool` | 侍卫史莱姆已入住 |

### 灯笼夜

| 属性 | 说明 |
|----------|-------------|
| `lanternNightCooldown ↔ int` | 灯笼夜冷却倒计时 |
| `lanternNightManual ↔ bool` | 手动触发的灯笼夜 |
| `lanternNightGenuine ↔ bool` | 自然触发的灯笼夜正在进行 |
| `lanternNightNextNightIsGenuine ↔ bool` | 明晚是否会自然发生灯笼夜 |

### 派对

| 属性 | 说明 |
|----------|-------------|
| `partyManual ↔ bool` | 手动触发的派对 |
| `partyGenuine ↔ bool` | 自然触发的派对正在进行 |
| `partyCooldown ↔ int` | 派对冷却倒计时 |

### 背景样式 {#backgrounds}

| 属性 | 说明 |
|----------|-------------|
| `bgOcean ↔ byte` | 海洋背景样式 |
| `bgDesert ↔ byte` | 沙漠背景样式 |
| `bgCrimson ↔ byte` | 猩红之地背景样式 |
| `bgHallow ↔ byte` | 神圣之地背景样式 |
| `bgSnow ↔ byte` | 雪原背景样式 |
| `bgJungle ↔ byte` | 丛林背景样式 |
| `bgCorruption ↔ byte` | 腐化之地背景样式 |
| `bgTree ↔ byte` | 森林背景样式 1 |
| `bgTree2 ↔ byte` | 森林背景样式 2 |
| `bgTree3 ↔ byte` | 森林背景样式 3 |
| `bgTree4 ↔ byte` | 森林背景样式 4 |
| `underworldBg ↔ byte` | 地狱背景样式 |
| `mushroomBg ↔ byte` | 发光蘑菇生物群系背景样式 |
| `iceBackStyle ↔ int` | 冰雪地下背景样式 |
| `jungleBackStyle ↔ int` | 丛林地下背景样式（洞穴） |
| `hellBackStyle ↔ int` | 地狱地下背景样式 |

### 树木与洞穴风格

| 属性 | 说明 |
|----------|-------------|
| `treeX0 ↔ int`, `treeX1 ↔ int`, `treeX2 ↔ int` | 树木风格分区边界 X 坐标 |
| `treeStyle0 ↔ int` – `treeStyle3 ↔ int` | 各分区的树木外观样式 |
| `treeTop1 ↔ int` – `treeTop4 ↔ int` | 各分区的树冠外观样式 |
| `caveBackX0 ↔ int`, `caveBackX1 ↔ int`, `caveBackX2 ↔ int` | 洞穴背景分区边界 X 坐标 |
| `caveBackStyle0 ↔ int` – `caveBackStyle3 ↔ int` | 各分区的洞穴背景外观样式 |

### 世界边界

| 属性 | 说明 |
|----------|-------------|
| `topWorld ↔ float` | 世界顶部边界 |
| `bottomWorld ↔ float` | 世界底部边界 |
| `leftWorld ↔ float` | 世界左侧边界 |
| `rightWorld ↔ float` | 世界右侧边界 |

### 其他属性

| 属性 | 说明 |
|----------|-------------|
| `cultistDelay ↔ int` | 拜月教徒重生倒计时 |
| `apocalypse ↔ bool` | 启示录末日模式 |

## `metadata` — 游戏数据字典查询

| 方法 | 说明 |
|--------|-------------|
| `tileId(name) → int` | 根据物块英文名称查询 ID，未找到返回 0（不区分大小写） |
| `wallId(name) → int` | 根据墙壁英文名称查询 ID，未找到返回 0（不区分大小写） |
| `itemId(name) → int` | 根据物品英文名称查询 ID，未找到返回 0（不区分大小写） |
| `tileName(id) → string` | 根据物块 ID 查询英文名称，未找到返回空字符串 |
| `wallName(id) → string` | 根据墙壁 ID 查询英文名称，未找到返回空字符串 |
| `itemName(id) → string` | 根据物品 ID 查询英文名称，未找到返回空字符串 |
| `allTiles() → [{id, name}]` | 获取所有物块定义的列表 |
| `allWalls() → [{id, name}]` | 获取所有墙壁定义的列表 |
| `allItems() → [{id, name}]` | 获取所有物品定义的列表 |

## `log` — 脚本日志输出

| 方法 | 说明 |
|--------|-------------|
| `print(msg)` | 输出常规日志信息 |
| `warn(msg)` | 输出黄色警告信息 |
| `error(msg)` | 输出红色错误信息 |
| `progress(value)` | 更新底部进度条（0.0–1.0） |

## `finder` — 侧边栏“查找”面板联动

| 方法 | 说明 |
|--------|-------------|
| `clear()` | 清除“查找”面板中的所有搜索结果 |
| `addResult(name, x, y, type, extraInfo?) → bool` | 向结果列表添加一条记录（上限 1,000 条）；若达到上限返回 false |
| `navigate(index)` | 视图直接导航居中至第 index 条结果（从 0 开始） |
| `navigateFirst()` | 视图直接导航居中至第一条搜索结果 |

## `tools` — 界面工具与文件交互

| 方法 | 说明 |
|--------|-------------|
| `listTools() → [string]` | 获取所有可用工具的名称列表 |
| `copySelection()` | 将当前选区内的物块复制到剪贴板 |
| `getTilePickerTile() → int` | 获取当前物块选择器中选中的物块 ID |
| `getTilePickerWall() → int` | 获取当前墙壁选择器中选中的墙壁 ID |
| `getFilePath() → string` | 获取当前加载的世界文件完整路径 |
| `setFilePath(path)` | 设置当前世界文件路径（仅修改变量，不实际保存） |
| `getWorldsFolder() → string` | 获取系统默认的泰拉瑞亚世界存档文件夹路径 |
| `getCloudWorldsFolders() → [{userId, path}]` | 获取所有 Steam 云存档文件夹路径及对应的用户 ID |
| `save() → bool` | 静默保存世界至当前路径（不弹出文件对话框） |
| `saveAs(filename, version?) → bool` | 静默保存世界到指定文件名（不弹出对话框，可指定保存格式版本） |
| `load(filename) → bool` | 加载指定世界文件替换当前世界（同步阻塞直到完成） |

:::tip 简短文件名支持
`saveAs` 与 `load` 支持直接传入简写文件名（例如 `"MyWorld.wld"` 甚至是 `"MyWorld"`）——若参数中不包含任何路径分隔符，将自动定位到系统默认的泰拉瑞亚存档目录。如果省略 `.wld` 扩展名，系统会自动补全。
:::

:::note
`tools` API 仅在 TEdit UI 图形界面中运行脚本时可用。在测试或无界面 (headless) 模式下不可用。
:::

```javascript
// 保存当前世界
tools.save();

// 保存到默认存档文件夹 — 直接指定文件名即可
tools.saveAs("MyWorld-Copy");

// 完整路径同样支持
tools.saveAs("C:/Users/me/Documents/My Games/Terraria/Worlds/MyWorld-Copy.wld");

// 从默认存档文件夹直接加载另一个世界
tools.load("OtherWorld");

// 列出 Steam 云存档文件夹路径
var clouds = tools.getCloudWorldsFolders();
for (var i = 0; i < clouds.length; i++) {
    log.print("Steam user " + clouds[i].userId + ": " + clouds[i].path);
}
```
