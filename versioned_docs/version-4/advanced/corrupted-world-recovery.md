---
sidebar_position: 3
---

# Corrupted World Recovery

## Load a Backup

Do you have a broken world file? Try your backup first. Terraria and TEdit both make backups of world files, Try locating your .wld, .bak and .TEdit files the following locations:

* `%USERPROFILE%\Documents\My Games\Terraria\Worlds`
* [Steam Cloud Support](https://support.steampowered.com/kb_article.php?ref=6736-QEIG-8941)
  * **Windows**: `C:\Program Files (x86)\Steam\userdata\<userID>\105600\remote\worlds`
  * **Mac**: `~/Library/Application Support/Steam/userdata/<userID>/105600/remote/worlds`
  * **Linux**: `~/.local/share/Steam/userdata/<userID>/105600/remote/worlds`

## TEdit Recovery Process

TEdit has the capability to load partial or corrupted world files due to bad saves, crashes or power outages. You can use this feature to recover parts of your world if you have a bad file that will not load in Terraria.

Note: .bak files are nearly always better to use as a recovery, but in the case you don't have the .bak or otherwise need to recover a file you may use this method.

1. Open the file in TEdit, you will receive a prompt similar to the following

   ![recovery-prompt](/img/v4/recovery-load.png)

2. TEdit will load what data is available and render the map. This may result in some portions of the map not being rendered if they are missing from the file. Here is an example where the file was cut off mid save, and only some of the tile data was in the file.

   ![partial world](/img/v4/recovery-render.png)

3. Note: file data has tiles before chests, so if your file is cut off mid-tile stream bestiary, signs, chests, mannequin, items frames, etc will be empty.
4. Once you locate the data you wish to recovery, use the clipboard to copy/paste your build to a new world. You can use Terraria to regenerate the terrian by copying the seed from TEdit.

   ![](/img/v4/recovery-seed.png)
