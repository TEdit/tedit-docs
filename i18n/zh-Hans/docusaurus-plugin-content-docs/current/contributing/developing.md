---
sidebar_position: 1
description: 开发环境搭建与源码编译指南
---

# 参与开发与贡献

TEdit 是一款开源软件，非常欢迎全球开发者为项目贡献代码！

## 官方源码仓库

[https://github.com/TEdit/Terraria-Map-Editor](https://github.com/TEdit/Terraria-Map-Editor)

## 环境准备与前置需求

- **Visual Studio 2022**（17.8 或更高版本）或 **JetBrains Rider**
- **.NET 10 SDK** — [前往微软官网下载](https://dotnet.microsoft.com/download/dotnet/10.0)
- **Git** 版本控制工具

## 源码编译步骤

```bash
git clone https://github.com/TEdit/Terraria-Map-Editor.git
cd Terraria-Map-Editor
dotnet build
```

## 本地启动与调试

在 Visual Studio 或 Rider 中打开解决方案文件 `TEdit.slnx`，将启动项目设置为 `TEdit` 并运行调试即可。

## 工程项目架构概览

| 子工程 | 目标框架 | 说明职责 |
|---|---|---|
| `TEdit` | net10.0-windows (WPF) | 主桌面客户端应用程序 |
| `TEdit5` | net10.0 (Avalonia) | 跨平台版本桌面客户端 |
| `TEdit.Editor` | net10.0 | 编辑器核心逻辑、工具链、笔刷与绘制模式 |
| `TEdit.Terraria` | net10.0 | 泰拉瑞亚世界文件底层二进制 I/O 与数据模型 |
| `TEdit.Common` | netstandard2.0 | 公共通用类型、几何运算、JSON 序列化组件 |

## 贡献流程指南

1. Fork 官方仓库到您个人的 GitHub 账号
2. 创建专属的特性分支（如 `feat/my-new-feature`）
3. 编写代码并进行本地构建验证
4. 提交 Pull Request

欢迎查阅 [GitHub Issues](https://github.com/TEdit/Terraria-Map-Editor/issues) 查看当前开放的任务需求与 Bug 反馈列表。

## 社区交流

- [Discord 官方频道](https://discord.gg/SrwYZU2GDY) — 与其他开发者实时交流讨论
- [GitHub Discussions 讨论区](https://github.com/TEdit/Terraria-Map-Editor/discussions) — 畅聊新特性设想与创意
