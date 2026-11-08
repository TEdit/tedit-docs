---
sidebar_position: 8
description: JavaScript 与 Lua 自动化脚本侧边栏
---

# 脚本面板

脚本面板让您可以直接在编辑器内编写并执行 JavaScript 或 Lua 脚本，实现各种高度自定义的自动化地图编辑。

![脚本面板](/img/v5/sidebar-panels/sidebar-scripting.png)

## 快速上手

1. 在右侧侧边栏中切换到脚本面板。
2. 选择脚本执行引擎：**JavaScript** 或 **Lua**。
3. 在内置代码编辑器中输入您的脚本逻辑。
4. 点击 **运行** 按钮即可执行。

底部的控制台输出日志会实时显示 `print()` 打印内容、运行状态、警告与错误信息。

![脚本面板实测示例](/img/v5/sidebar-panels/sidebar-scripting-example.png)

## 脚本文件管理

- **新建** — 新建一份空白脚本
- **保存** — 将当前代码保存到本地文件
- **打开目录** — 在系统资源管理器中打开 TEdit 的用户脚本存储文件夹
- 使用顶部下拉菜单可在保存的多份脚本之间快速切换

## 快速示例代码

以下示例展示如何将当前选区内的所有泥土块替换为石块：

```javascript
const sel = selection;
if (!sel.isActive) { log.error("No selection active!"); }

batch.forEachTile(sel.x, sel.y, sel.width, sel.height, (x, y) => {
  if (tile.getTileType(x, y) === metadata.tileId("Dirt Block")) {
    tile.setType(x, y, metadata.tileId("Stone Block"));
  }
});
log.print("Done!");
```

关于完整的脚本 API 函数文档和更多高级示例，请参阅 [脚本自动化指南](../advanced/scripting-guide.md)。
