---
sidebar_position: 1
---

# Settings

You may customize the default settings of TEdit by editing the `settings.xml` file.

## App

### Size

If you wish to change TEdit's default size when launched, edit the `<App>` Width and Height values.

### Steam Cloud

_In an upcoming release:_ When opening and saving worlds, TEdit defaults to your local world's folder. If you use Steam Cloud to save your worlds, you may uncomment the `<SteamUserId>` setting and TEdit will default to your Steam Cloud location. If you have more than one Steam user on your computer, you will need to explicitly set your Steam UserID. Example: `<SteamUserId>12345</SteamUserId>`

It is highly recommended you exit the Terraria game, not just the player/world, before editing Steam Cloud games with TEdit. Make sure you understand how TEdit manages [Saves and Backups](saves-and-backups.md).

## Shortcut Keys

The default keys for shortcuts are defined in the lines between `<ShortCutKeys>...</ShortCutKeys>`. For example:

`<Shortcut Key="`**A**`" Tool="Arrow" />`

By changing the "A" in the example above, you can change the shortcut key for the Arrow tool to another key.

## Tools

The default settings for different Tools are defined in the lines between `...`

### Paint Mode

`<Tool Name="Paint" Mode="`**Tile**`" />`

Valid Paint Modes are **Tile**, **Wall**, **TileAndWall**, **Wire** and **Liquid**.

### Tiles, Walls, Masks

`<Tool Name="Tile" Tile="`**0**`" Mask="`**0**`" Mode="Off" />`\
`<Tool Name="Wall" Wall="`**0**`" Mask="`**0**`" Mode="Off" />`\
You can change the default Tiles, Walls and Masks by changing the bolded values above. You can get those values by looking at the dropdowns within the tool.

For example, Tile 0 is Dirt Block and Wall 0 is the Sky. You can change the Tile to Stone Block by changing the Tile value from to 1, and the Wall to Wood Wall by changing the Wall value to 4.

### Mask Mode

By default, Tile and Wall Masks are disabled. You can change the setting by changing the Mode:

`<Tool Name="Tile" Tile="0" Mask="0" Mode="`**Off**`" />`\
`<Tool Name="Wall" Wall="0" Mask="0" Mode="`**Off**`" />`

The values can be **Off** (Disable Mask), **Empty** (Edit Empty Tiles) or **Tile** (Edit Matching Tiles).

### Brush

`<Tool Name="Brush" Width="`**20**`" Height="`**20**`" Outline="`**1**`" Shape="Square" />`

You can change the default brush size by editing the bolded values above.

`<Tool Name="Brush" Width="20" Height="20" Outline="1" Shape="`**Square**`" />`

You can change the default brush shape by editing the Shape value. Valid values are **Square** and **Round**.
