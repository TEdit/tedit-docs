---
sidebar_position: 5
description: 常见问题与解决方法
---

# 疑难解答

## 查看日志文件

TEdit 将错误日志写入以下位置：

```
%AppData%\TEdit\Logs
```

在资源管理器中打开此路径即可找到 `log.txt`。您也可以从菜单栏访问：**帮助 > 查看日志**。

:::tip 提示
如果 `log.txt` 较大，在寻求帮助时建议将其上传到文本粘贴网站（如 [Pastebin](https://pastebin.com)）。
:::

## TEdit 无法启动

- 确保已安装 **.NET 10 Desktop Runtime**：[下载链接](https://dotnet.microsoft.com/download/dotnet/10.0)
- 检查您的显卡是否支持 **DirectX 11**
- 将显卡驱动程序更新至最新稳定版本
- 尝试以管理员身份运行 TEdit
- 打开任务管理器（`Ctrl+Shift+Esc`），检查 `TEdit.exe` 是否出现在进程列表中

## 缺少物体贴图 / 显示为空白物块

渲染物体需要已安装泰拉瑞亚。如果已安装但缺少贴图：

1. 打开“设置”，检查 **Terraria Path** 设置项
2. 确保其指向 `Terraria\Content`（包含 `Images/` 的文件夹）
3. Steam 默认路径：`Program Files (x86)\Steam\steamapps\common\Terraria\Content`

## 无法打开世界

- 确保是未加 Mod 的纯净 `.wld` 文件 — TEdit 不支持 tModLoader 或 TConfig 世界
- 尝试打开其他世界以确认 TEdit 本身运行正常
- 检查文件是否损坏 — 请参阅[损坏世界修复](corrupted-world-recovery.md)

## 崩溃或卡死

- 超大世界可能需要一定时间加载 — 请耐心等待
- 检查 `%AppData%\TEdit\Logs\log.txt` 日志文件中的错误详情
- 尝试关闭其他占用内存较多的应用程序
- 更新到最新版本的 TEdit

## 性能缓慢

- **缩小视图** — 在近距离渲染大量贴图会消耗较多 GPU 资源
- 在“设置”中调整 **Texture Visibility Zoom Level**，以减少近距离下的贴图渲染
- 在“设置”中调小 **Sprite Thumbnail Size**（物体缩略图尺寸）
- 确保显卡驱动程序为最新版本

## 重置 TEdit

如果其他方法均无效，请尝试清除 TEdit 的缓存数据：

1. 删除缓存文件夹：`%AppData%\TEdit`
2. 删除设置文件夹：`%LocalAppData%\TEdit`
3. 从[最新下载页面](https://github.com/TEdit/Terraria-Map-Editor/releases/latest)重新安装 TEdit

## 仍未解决？

- 加入官方 [Discord](https://discord.gg/SrwYZU2GDY) 寻求帮助
- 提交 [GitHub Issue](https://github.com/TEdit/Terraria-Map-Editor/issues) — 请附带日志文件和复现步骤

## 找不到某项设置？

使用“设置”窗口顶部的**搜索栏**可按名称快速筛选设置项。
