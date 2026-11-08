---
sidebar_position: 3
description: 自动保存与备份管理
---

# 存档与备份

:::danger 警告
**在编辑前请务必备份您的世界文件！** TEdit 直接对世界文件进行修改。
:::

## 保存操作

- **保存** (`Ctrl+S`) — 覆盖当前打开的世界文件
- **另存为** (`Ctrl+Shift+S`) — 保存到新的文件路径

## 自动保存 {#auto-save}

在[设置](settings.md)中启用后，TEdit 会定期自动保存您的工作内容。这有助于防止因崩溃或误操作导致的数据丢失。

## 自动 TEdit 备份 {#automatic-tedit-backups}

每次执行保存时，TEdit 都会自动为您的世界文件创建一份 `.TEdit` 备份。备份文件采用数字后缀轮转管理——`.TEdit`、`.TEdit.2`、`.TEdit.3`，依此类推——使您始终拥有多个最近的还原点。

| 设置项 | 说明解释 |
|---|---|
| **MaxBackups** | 每个世界保留的 `.TEdit` 备份文件数量上限（默认：10 份）。可在[设置](settings.md)中配置。 |

当备份数量超过 MaxBackups 时，最旧的备份将被自动删除。将 MaxBackups 设为 `0` 可禁用自动备份。

### 查找备份文件

备份文件保存在与世界文件相同的文件夹中。它们也会直接显示在**世界浏览器** 中：

- `.TEdit` 文件显示为 **"TEdit Backup"**
- `.bak` 文件（泰拉瑞亚原版备份）显示为 **"Terraria Backup"**

您可以直接从世界浏览器中打开任意备份文件。

## 手动备份建议

- 在编辑前，保留一份原始 `.wld` 文件的副本
- 泰拉瑞亚世界文件通常位于：`Documents\My Games\Terraria\Worlds`
- 使用 **另存为** 为编辑创建带版本号的命名（例如 `MyWorld-v2.wld`）
- 可以考虑使用[剪贴板](../sidebar-panels/clipboard.md)导出重要建筑的结构图

## 撤销与重做 {#undo--redo}

TEdit 对绝大多数操作均支持撤销 (`Ctrl+Z`) 和重做 (`Ctrl+Y`)。撤销历史记录存储在内存中，关闭编辑器后将会丢失。
