---
sidebar_position: 2
---

# 安装与系统要求

:::info
使用 Mac、Linux 或移动设备？您可以直接体验网页端地图编辑器：[https://www.terraria-map-editor.com](https://www.terraria-map-editor.com)。
:::

## 安装说明

TEdit 5 使用 [Velopack](https://velopack.io/) 进行程序安装和自动更新。

1. 从 [最新发布页面](https://github.com/TEdit/Terraria-Map-Editor/releases/latest) 下载 `TEdit-Setup.exe`。
2. 运行安装程序 — TEdit 将自动安装到您的本地 AppData 目录中。
3. 从“开始”菜单或桌面快捷方式启动 TEdit。

安装完成！后续新版本将自动在后台下载并应用（详见 [自动更新](advanced/auto-update.md)）。

### Windows SmartScreen 提示

如果弹出 **Windows Defender SmartScreen** 拦截窗口，请依次点击 **“更多信息”** 然后点击 **“仍要运行”** 继续安装。TEdit 是开源软件，目前尚未进行代码签名，因此 Windows 可能会提示安装程序无法识别。

![Windows SmartScreen 对话框 — 点击更多信息，然后点击仍要运行](/img/v5/advanced/smartscreen.png)

### 修复安装

若系统中已安装过 TEdit，运行安装程序将提供 **修复** 选项。该操作会清理当前安装并将最新版本重新安装到 `%LocalAppData%\TEdit`。

![TEdit 修复安装对话框](/img/v5/advanced/repair.png)

:::tip 从旧版 `%AppData%` 安装路径迁移
如果您之前将 TEdit 安装在 `%AppData%\TEdit`（旧版默认路径），请选择 **Repair** 切换到现代化的 `%LocalAppData%\TEdit` 路径。在确认新安装运行正常后，您可以安全删除旧的 `%AppData%\TEdit` 文件夹。
:::

:::tip
如果您此前使用的是免安装绿色版 zip，也可以随时换用 Velopack 安装程序。确认新版正常运行后，旧的文件夹直接删除即可。
:::

### 便携版安装

如果您更偏好免安装便携版：

1. 从最新发布页面下载 `TEdit-x.x.x-win-x64.zip`。
2. 解压到具有读写权限的任意空白文件夹中（如 `C:\Games\TEdit`）。
3. 运行 `TEdit.exe` 启动。

:::warning 注意
绿色便携版不支持自动更新。后续有新版本发布时需要您手动下载解压。
:::

## 系统环境要求

- **Windows 10/11 x64**（不支持 32 位及更早版本的 Windows 系统）
- **.NET 10 Desktop Runtime** — Velopack 安装程序已内置携带。若使用绿色便携版，可[在此处单独下载安装](https://dotnet.microsoft.com/download/dotnet/10.0)。
- 支持 **DirectX 11** 的独立或核心显卡，并配备最新显卡驱动。

## 物体渲染预览

若要渲染物体与贴图，必须已安装泰拉瑞亚本体或能够访问其游戏内容资源文件：

- **Steam 版**：`Program Files (x86)\Steam\steamapps\common\Terraria\Content`
- **GOG 版**：请查看您的 GOG 安装目录

如果本地未安装泰拉瑞亚，TEdit 依然可以正常运行与编辑地图 — 只是无法看到物体（家具、装饰）的具体贴图外观。您可以在[应用程序设置](configuration/settings.md)中自定义指定内容目录路径。

## 已知限制

- 不直接兼容包含 Mod 专属物块的模组存档（tModLoader、TConfig 等）
- 物体贴图显示依赖 Steam 或 GOG 原版泰拉瑞亚游戏资源
- 某些老旧核心显卡可能会存在渲染兼容性问题
