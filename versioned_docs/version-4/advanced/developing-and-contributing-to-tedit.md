---
sidebar_position: 1
---

# Contributing to TEdit

To modify TEdit source you will need a few things:

* C# IDE such as Visual Studio or limited debugging with VSCode. [Download Visual Studio Free](https://visualstudio.microsoft.com/vs/community/)
* [Dotnet Core SDK](https://dotnet.microsoft.com/download)
* [.Net Framework Developer Pack](https://dotnet.microsoft.com/download/dotnet-framework/thank-you/net48-developer-pack-offline-installer)

  ![dotnet downloads](/img/dotnet-download.png)

* Git - try [GitHub Desktop](https://desktop.github.com/) or [Git Extensions](https://gitextensions.github.io/)

_Note: VSCode does not support modifying the UI_

## Fork and clone the repository

See [GitHub Documents](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) for the current method of forking the TEdit repository [https://github.com/TEdit/Terraria-Map-Editor.git](https://github.com/TEdit/Terraria-Map-Editor.git).

![fork-tedit](/img/fork-tedit.png)

Use git to clone the repository to your local machine. Pick a folder and execute the following command:
`git clone https://github.com/TEdit/Terraria-Map-Editor.git`.

You can use ssh or git extensions if you have those set up. For for detailed instructions see [GitHub Cloning](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

## Open with Visual Studio

Open the folder you cloned TEdit source code, navigate to the `src` folder and double click `TEdit.sln`

![open Tedit.sln](/img/open-teditsln.png)

## Making a change

Check out these tutorials from Microsoft:

* [C# Basics](https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/)
* [WPF Basics](https://docs.microsoft.com/en-us/dotnet/framework/wpf/getting-started/walkthrough-my-first-wpf-desktop-application) - this is the user interface
* [Visual Studio Tutorials](https://docs.microsoft.com/en-us/visualstudio/debugger/?view=vs-2019)
* [Navigating the Debugger](https://docs.microsoft.com/en-us/visualstudio/debugger/navigating-through-code-with-the-debugger?view=vs-2019)

## Commit to GitHub

Follow the instructions here for how to submit your changes back to your fork of TEdit on Github: [Committing Changes](https://help.github.com/en/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)

## Submit a Pull Request

Finally, submit a pull request back to the master TEdit repo: [Submit a Pull Request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)

## Localization and Languages

Please see this PR for an example of the edits needed to add your own language: [https://github.com/TEdit/Terraria-Map-Editor/pull/1391](https://github.com/TEdit/Terraria-Map-Editor/pull/1391)
