---
sidebar_position: 2
---

# House Generator Plugin

:::warning
This plugin is under development and features may change or be added.
:::

![](/img/v4/house-gen%20(1).png)

The house gen plugin adds a system to generate random versions of structures, or other arbitrary features, from a specially formatted schematic template. The schematic template consists of two separate files, a `.TEditHGSch` file and a `.JSON` file. The files must be named identically except for their associated extension.

There are currently two [sample schematic templates](https://github.com/TEdit/Terraria-Map-Editor/tree/master/schematics) provided by reddit user [u/Tgn2_Tgn2](https://www.reddit.com/user/Tgn2_Tgn2).

The JSON file contains the following entries:

Count - the number of variations present in the schematic.

Rooms - an array of objects with each object having the following fields. Name: room name, can be anything, currently only used in error reporting. X: the number of tiles between the left edge of the schematic and the left edge of the room. Y: the number of tiles between the top edge of the schematic and the top of the room. Width: the rooms tile width. Height: the rooms tile height.

Roofs - an array of objects representing the roof sections, roofs currently function identically to rooms. (This may change in the future.)

The `.TEditHGSch` files can be created in TEdit itself by creating the various versions of a schematic and then stacking the versions directly on top of one another. The combined schematic can then be exported and renamed as `filename.TEditHGSch`

![](/img/v4/house-gen-schematic.png)

A `filename.JSON` file must then be written to let the generator know where each room is located in relation to the left and top edge of a single instance of the structure.
