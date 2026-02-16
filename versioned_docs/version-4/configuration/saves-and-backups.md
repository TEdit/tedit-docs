---
sidebar_position: 2
---

# Saves and Backups

This page is for those that want information on how TEdit manages saving and backups.

When using TEdit to save there should always be some version of your world available that has not been touched by TEdit (since you last played the map in Terraria). This means that if for some reason TEdit corrupted the map so it wont load in Terraria you should still have a usable backup. The .bak files are Terraria's backups and the .TEdit files are TEdit's backups - therefore if you think TEdit has done something so your map will not start try replacing your .wld file with your .bak file.

When you save from TEdit, before overwriting any files, it copies the existing _worldname_.wld file to _worldname_.TEdit. Once the TEdit backup has been made it will then overwrite the original.

Terraria's own backup files, worldname.wld.bak, are not modified in any way by TEdit (unless you explicitly go about doing so by loading up the .bak in TEdit and saving).

Here are some steps showing the process.

* Key
  * _Italic indicates a non-edited file_
  * **Bold indicates an edited file**
* Before Editing
  * _.wld_, _.bak_ (all files should be valid)
* Open in TEdit
  * _.wld_, _.bak_ (all files should be valid)
* Save in TEdit
  * **.wld**, _.bak_, _.TEdit_ (.bak saved from Terraria and .TEdit should be valid for the rest of the steps unless* you save again)
* Save a second time, or more, in TEdit
  * **.wld**, _.bak_, **.TEdit** (.bak saved from Terraria should be valid)
* Open in Terraria
  * **.wld**, _.bak_, **.TEdit** (If you are able open the .wld file it is valid, .bak should be valid either way)
* Save in Terraria (Terraria will overwrite the .bak with the pre-save .wld file)
  * **.wld**, **.bak**, **.TEdit** (.wld saved from Terraria should be valid, .bak should be valid as well since* the pre-save .wld must have been valid)

The new .wld file made when **Terraria** saves should be a new valid version of your world (unless Terraria itself screwed up), thus re-starting the saving/backup loop. If you want to restore the world to the very original before you made any edits (in TEdit or Terraria), I recommend making a copy of the file before doing any editting and putting it in a separate directory.

Note: If the world fails to open, the .bak should still be valid. The above assumes that all saves written by Terraria (game) are valid saves. To restore a backup, simply rename the file extension to .wld.
