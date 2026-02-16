---
sidebar_position: 4
---

# Image Schematics

## Warning

These schematics do not contain all data for a tile. Only use them if there is no other option or you want an image to display.

File Format: 24 bit PNG Image

## Examples

False Color

![falsecolor](/img/v4/falsecolor.png)

Real Color

![falsecolor](/img/v4/realcolor.png)

False color png uses color channels to store tile data, so you can add liquid, walls, wires etc. Note, the importer will ignored sprite tile ids and other tile ids that require UV coordinates.

Channel Data:

* Red: Tile ID (0 = dirt, etc) - accepts 0-149
* Green: Wall ID - accepts 0-32
* Blue: Liquid Level - accepts 0-255
* Alpha: Flags

## Alpha Channel

Alpha channel is used to store tile flags, e.g. is active (there is a brick here), is lava, and has wire. The bitmask for the alpha byte is as follows:

* `0x80 (10000000)` = Always on, so you can see stuff
* `0x40 (01000000)` = IsActive (tile has a brick)
* `0x20 (00100000)` = IsLava
* `0x10 (00010000)` = Has Wire

### Alpha Values

| IsActive | IsLava | HasWire | Binary | Decimal | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
|  |  |  | 10000000 | 128 | Default |
| X |  |  | 11000000 | 192 | A solid tile |
| X | X |  | 11100000 | 224 | Uncommon (lava doesn't normally coexist with tiles, some furniture may be possible) |
| X |  | X | 11010000 | 208 | Wire over a solid tile |
| X | X | X | 11110000 | 240 | Uncommon, see above |
|  | X |  | 10100000 | 160 | Lava |
|  | X | X | 10110000 | 176 | A wire in lava |
|  |  | X | 10010000 | 144 | A wire in empty space |
