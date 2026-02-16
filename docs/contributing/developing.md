---
sidebar_position: 1
description: Development setup and building from source
---

# Developing & Contributing

TEdit is open source and contributions are welcome.

## Repository

[https://github.com/TEdit/Terraria-Map-Editor](https://github.com/TEdit/Terraria-Map-Editor)

## Prerequisites

- **Visual Studio 2022** (17.8+) or **JetBrains Rider**
- **.NET 10 SDK** — [Download](https://dotnet.microsoft.com/download/dotnet/10.0)
- **Git**

## Building

```bash
git clone https://github.com/TEdit/Terraria-Map-Editor.git
cd Terraria-Map-Editor
dotnet build
```

## Running

Open `TEdit.sln` in Visual Studio or Rider and run the `TEdit` project.

## Project Structure

| Project | Description |
|---------|-------------|
| `TEdit` | Main WPF application |
| `TEdit.Editor` | Editor logic, tools, brush/paint modes |
| `TEdit.Terraria` | Terraria world file I/O and data models |
| `TEdit.Configuration` | Settings and configuration |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

Check the [GitHub Issues](https://github.com/TEdit/Terraria-Map-Editor/issues) for open tasks and bug reports.

## Community

- [Discord](https://discord.gg/SrwYZU2GDY) — Chat with other contributors
- [GitHub Discussions](https://github.com/TEdit/Terraria-Map-Editor/discussions) — Feature requests and ideas
