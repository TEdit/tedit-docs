# Tools

The tool section is located on the left of the editor, below the basic menu buttons.

![Toolbar](<../.gitbook/assets/toolbar_full.png>)

## Arrow Tool \[A]

The arrow tool looks like an arrow cursor, the same as the one your used to using when using your computer.

#### Options

| Command      | Activity                                                             |
| ------------ | -------------------------------------------------------------------- |
| `hover`      | Show tile info in [Information Bar](menu-and-info-bars.md#info-bar). |
| `rightclick` | Show chest or sign editor for tile under cursor.                     |

![](../.gitbook/assets/tedit\_arrow\_tool.png)

With the arrow tool selected it is impossible to make any accidental changes to the map and it should only display a 1x1 template. This make the arrow tool useful for getting information from individual tiles via the [Information Bar](menu-and-info-bars.md#info-bar), which is displayed in the bottom left corner.

With the arrow tool selected you can also right-click on chests and signs to see what is inside and edit them. See the [Chest Editor](https://app.gitbook.com/s/-MX8HQ4nI9YJFx-UUGZo/basics/Chest%20Editor) page for more details.

{% content-ref url="../sidebar-tools/chest-editor.md" %}
[chest-editor.md](../sidebar-tools/chest-editor.md)
{% endcontent-ref %}

{% content-ref url="menu-and-info-bars.md" %}
[menu-and-info-bars.md](menu-and-info-bars.md)
{% endcontent-ref %}

## Selection Tool \[S]

The selection tool button looks like a blue square.

![](../.gitbook/assets/tedit\_selection\_tool.png)

#### Options

| Command                  | Activity                                                                      |
| ------------------------ | ----------------------------------------------------------------------------- |
| `leftclick+drag`         | Select an area under the cursor.                                              |
| `shift+leftclick+drag`   | Expand current selection.                                                     |
| `rightclick` or `ctrl+d` | Clear selection.                                                              |
| `ctrl+rightclick`        | Restore cleared selection.                                                    |
| `ctrl+c`                 | Copy contents of selection to the [Clipboard](../sidebar-tools/clipboard.md). |

When using this tool you can select a section of the map (as a rectangle) by holding down left-click. You can also further expand the area you've already selected by holding `shift+leftclick` and dragging. If you want to clear the rectangle you can do so by right-clicking somewhere on the map while the selection tool is selected or using `ctrl+d`. You can also load your previous selection with `ctrl+rightclick`, and can even use `shift+leftclick` and drag to expand it.

Here is a selection rectangle drawn in some empty space/air:

![](../.gitbook/assets/tedit\_selection\_area.png)

While there is a selection rectangle present painting can only be done inside that area; if you want to paint elsewhere you must first remove the rectangle. You can do this by right-clicking when you are using the tool.

![](../.gitbook/assets/tedit\_selection\_drawing.png)

This tool is also used to copy part of the map. To do this select what you want to copy, then use the copy button on the toolbar, the copy function in the `menubar`, or press `ctrl+c`.

## Picker Tool \[R]

{% hint style="warning" %}
Picking furniture and sprites may lead to bugs.
{% endhint %}

#### Options

| Command      | Activity                                                                |
| ------------ | ----------------------------------------------------------------------- |
| `leftclick`  | Set the tile, wall and liquid selection from the tile under the cursor. |
| `rightclick` | Set the mask from the tile under the cursor.                            |

Also known as eye dropper, this tool "picks" things you click on. Things include tiles, walls, and liquids.&#x20;

If you right-click on things it will pick them for the mask.

#### Hold-to-Pick

You can **hold** `R` to temporarily switch to the Picker tool. While holding the key, pick a tile, then release `R` to return to your previous tool. A quick **tap** of `R` permanently switches to the Picker as usual.

The picker tool uses the [Paint Mode](active-tray.md#tile-and-wall-options) to show what you have picked.

{% content-ref url="active-tray.md" %}
[active-tray.md](active-tray.md)
{% endcontent-ref %}



## Pencil Tool \[E]

The pencil tool looks like a pencil.

![](../.gitbook/assets/tedit\_pencil\_tool.png)

The pencil tool paints only one tile at a time. This makes it exceptionally useful for painting fine details or irregular shapes.

#### Options

| Command                     | Activity                                               |
| --------------------------- | ------------------------------------------------------ |
| `leftclick+drag`            | Draw a line following cursor.                          |
| `shift+click`               | Polyline: each click draws from previous point. Shift+drag draws a single line from anchor. |
| `rightclick+drag`           | Draw a horizontal straight line from starting y value. |
| `leftclick+rightclick+drag` | Draw a vertical straight line from starting x value.   |

![](../.gitbook/assets/tedit\_pencil\_drawing.png)

#### How To: Straight Line Drawing

* **Shift+click polyline:** Hold Shift and click sequentially to draw connected line segments. Click A, click B (draws A→B), click C (draws B→C), etc. Release Shift when done. Great for placing tracks, platforms, or any point-to-point path.
* **Shift+drag:** Hold Shift and drag to draw a single straight line from the anchor point to the cursor position.
* **Left Mouse Button**: you will have free drawing - i.e. you can draw in any way you like.
* **Hold Right Mouse Button**: you can draw a straight horizontal line, perfect for bridges, tunnels, buildings, etc.
* **Hold Left AND Right Mouse Button**: at the same time you can draw vertical straight lines.&#x20;

The pencil tool uses the [Paint Mode Tray ](active-tray.md#tile-and-wall-options)to select what you paint.

{% content-ref url="active-tray.md" %}
[active-tray.md](active-tray.md)
{% endcontent-ref %}

## Brush Tool \[B]

{% hint style="info" %}
The brush tool uses the [Paint Mode Tray](active-tray.md#tile-and-wall-options) to select what you paint and the [Size Tray](active-tray.md#size-tray) to select the size and shape of your brush strokes.
{% endhint %}

#### Options

| Command                     | Activity                                               |
| --------------------------- | ------------------------------------------------------ |
| `leftclick+drag`            | Draw a line following cursor.                          |
| `shift+click`               | Polyline: each click draws from previous point. Shift+drag draws a single line from anchor. |
| `rightclick+drag`           | Draw a horizontal straight line from starting y value. |
| `leftclick+rightclick+drag` | Draw a vertical straight line from starting x value.   |

The brush tool looks like a brush.

![](../.gitbook/assets/tedit\_brush\_tool.png)

The brush tool can paint a wide area of blocks.

![](../.gitbook/assets/tedit\_brush\_drawing.png)

Like the pencil tool, the brush can use the line drawing mouse buttons.

## Fill Tool \[F]

The fill tool looks like tipped bucket with paint coming out.

![TEdit\_Fill\_Tool](../.gitbook/assets/tedit\_fill\_tool.png)

#### Options

| Command                  | Activity                                                                                              |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| `leftclick`              | Fill map tiles matching tile under cursor.                                                            |
| `leftclick in selection` | Fill map tiles matching tile under cursor limited to active [selection](toolbar.md#selection-tool-s). |

The fill tool replaces tiles, walls, liquids and empty space with other tiles, walls and liquids. Currently, you can do a contiguous fill. This means that all tiles, walls, liquids, and space of the type you have clicked on will be replaced as long as there is a connection to the original.

![TEdit\_Fill\_Contiguous\_Before](../.gitbook/assets/tedit\_fill\_contiguous\_before.png)

![TEdit\_Fill\_Contiguous\_After](../.gitbook/assets/tedit\_fill\_contiguous\_after.png)

You can also use the selection tool to contain a fill action.

![TEdit\_Fill\_Selection](../.gitbook/assets/tedit\_fill\_selection.png)

The fill tool use the [Paint Mode Tray](active-tray.md#tile-and-wall-options) to select what to paint.

## Point Tool \[P]

![Point Tool](<../.gitbook/assets/toolbar_point_tool.png>)

![Point Tool Selected](<../.gitbook/assets/active_tray_point_selected.png>)

#### Options

| Command     | Activity                                                           |
| ----------- | ------------------------------------------------------------------ |
| `leftclick` | Set position for selected spawn or NPC point to tile under cursor. |

This tool places points on the map by chooses the point from the drop down menu and left-clicking on the map where you want it. The points that the tool places look like this on the map:

![TEdit\_Spawn\_Point\_Drawing](../.gitbook/assets/tedit\_spawn\_point\_drawing.png)

The spawn point is where people first load up (if they have not set a bed). This tool is useful if your town is not near the default spawn point, or if you are doing a custom map and want them to start in a particular place. Make sure it is not placed on/near any tiles you wish to keep however, since the game destroys any tiles (but not sprites or walls) that are located at the spawn point when someone enters the game there.

The dungeon point is where the dungeon is located. I am not sure what exactly that does (the terrain determines the enemy type but perhaps for dungeons you also need the dungeon point?). I know it used to mean where the Old Man patrolled but he seemingly has his own point now. Best put this point at the start of the dungeon (if you have one). It may set the spawn of the Cultists that activate the Lunar Events, but I don't know for sure.

The NPC points are the points where those NPCs sleeps at night and tends to patrol during the day. The NPC points will appear in the dropdown menu only as appropriate, i.e., if you have no nurse there isn't much point in having her point in the menu (no pun intended).

The Old Man point is particularly useful as you can have him spawn in or near an arena you have built especially to fight his alter ego. He could even have his own room in your base if you so choose, but I wouldn't recommend talking to him at night!

## Sprite Placer Tool \[T]

This tool looks like a black square with an 'S' in the middle.

![sprite-tool](../.gitbook/assets/sprite-tool2.png)

#### Options

| Command                     | Activity                                                        |
| --------------------------- | --------------------------------------------------------------- |
| `leftclick`                 | Place a single instance of the sprite under the cursor.         |
| `leftclick+drag`            | Draw a line following cursor. **\[1]**                          |
| `shift+click`               | Polyline: each click draws from previous point. Shift+drag draws a single line from anchor. **\[1]** |
| `rightclick+drag`           | Draw a horizontal straight line from starting y value. **\[1]** |
| `leftclick+rightclick+drag` | Draw a vertical straight line from starting x value. **\[1]**   |
|                             | **\[1]** _Applies to 1x1 sprites only._                         |

The sprite placer tool is used with the panel on the right of the editor to place sprites. While most sprites can only be placed one at a time, small, 1x1 sprites such as grasses and platforms can be drawn in strokes, much like when using the pencil or brush tools. And like those tools, you can use the same straight line drawing functions for drawing horizontal (right-click), vertical (left-click + right-click) or point-to-point (Shift + left-click) lines.

Use the drop down to select a tile type, then the grid to select a style. All styles should be available.

1. Select the sprite tool.
2. Type a filter in the sprite tab.
3. Select the tile type.
4. Select the tile style.
5. place the tile in the map.

## Morph Tool

![Morph Tool](<../.gitbook/assets/toolbar_morph_tool.png>)

![Morph Tool Selected](<../.gitbook/assets/active_tray_morph_selected.png>)

#### Options

| Command                     | Activity                                               |
| --------------------------- | ------------------------------------------------------ |
| `leftclick+drag`            | Draw a line following cursor.                          |
| `shift+click`               | Polyline: each click draws from previous point. Shift+drag draws a single line from anchor. |
| `rightclick+drag`           | Draw a horizontal straight line from starting y value. |
| `leftclick+rightclick+drag` | Draw a vertical straight line from starting x value.   |

The morph tool will change whatever it is used on into the biome that is selected in the dropdown menu. It will only paint over existing tiles/walls and not empty spaces. It will only change certain types of types of tiles/walls, leaving things like ore untouched. Edge tiles will be converted into grass if applicable.

The tool will work differently at different heights. Try it out! Note that if you create enough of a biome the music will change to that biome type and monsters of that biome will spawn.

The morph tool uses the [Active Tray](active-tray.md#paint-mode-tray) to select the size and shape of your brush strokes, and also uses the same line-drawing functions as the pencil and brush tools.
