---
sidebar_position: 1
---

# World Properties

If you do not see the world properties panel (located on the right-hand side of the editor) you may have to click the utilities button (also located on the right) to make it 'pop out'.

![Utilities Button](/img/v4/tedit_utilities_button.png)

## World Name and ID

![World Name](/img/v4/tedit_world_name.png)

The world name is simply whatever you called your world. It used to be the case that just editing this would allow you change your world name and it would stay that way. However, in one of the Terraria patches this changed.

To change the world name now, change this world name in TEdit and then use Save As and save the file with the exact same new name. This works for most people.

For some people for some reason it can be more complex and involves deleting (or editing if you know how) the .map file for that character-world combination as well. What may be happening is that when you load the new-named world with a character that has already been in that world the game gets confused because that character's .map file says the world should be called what it originally was - it then does you a "favour" and changes the world name back. Regardless of reason, it seems if you delete the .map file it will fix the problem, however, you will lose the associated discovered area of that world with that character. If you wish to do this you will find the .map file at `Documents\My Games\Terraria\Players\"CharacterName"` - it will have a name like 2027392058, although there may be multiple .map files for that character if that character has been to multiple worlds. Remember to do this for all characters who have already been to that world.

Regarding the world id, this is purely informative. It is not editable because we're not entirely sure what it does... although it is possibly the seed that was used to create the original terrain (and thus changing it now would be useless anyhow since the map generation is already complete).

## Moon Phase

![Moon Phase](/img/v4/tedit_moon_phase.png)

If you look carefully you will notice the ingame moon changes each night from new moon to full moon and back! This option changes the current moon - maybe your custom map is werewolf themed???

Additionally, if you check the Blood Moon checkbox the next night you are ingame will be a bloodmoon.

The "Is Eclipse" option starts a [solar eclipse](http://terraria.gamepedia.com/Solar_Eclipse) once you enter the game in Terraria (it may need to be day or wait for the next day, not tested).

## Time

![Time](/img/v4/tedit_time.png)

This scale represents the time of day/night it is ingame. Move it to where you desire. The Is Day Time checkbox allows you to switch between whether the slider represents day or night, and the slider background will change to show this. The slider basically represents a 12-hour period; that period could be the day period or it could be the night period, based on whether the checkbox is ticked or not.

## Rain

This scale represents the length of time rain will go on for.

Note: Currently, it seems checking or unchecking the box does not start or stop the rain. You can stop the rain by reducing its time, but there does not seem to be a way to start it; even if you adjust the scale accordingly.

## Clouds

Can be used in conjunction with rain. Consists of two scales, one for the number of clouds seen in the background (possibly affecting brightness from the background); and another scale for the wind speed/direction (direction needs to be confirmed).

## Smashed Orbs

![Smashed Orbs](/img/v4/tedit_smashed_orbs.png)

When 3 Shadow Orbs are smashed the Eater of Worlds comes after you, apparently he prefers to eat pesky heroes instead of worlds these days! Also, some events require a shadow orb to have been smashed.

## Spawn Meteor

![Spawn Meteor](/img/v4/tedit_spawn_meteor.png)

Like the blood moon, next night you are ingame say goodbye to your house. No no that will never happen. Spawn that meteor, go ahead.

## Surface and Bedrock Level

![Levels](/img/v4/tedit_surface_bedrock_level.png)

This setting lets you choose the y-coordinate (that is, the vertical height) where the [world layers](http://terraria.gamepedia.com/Layers) begin. The Surface Level is "Level" height in the game; above it is the surface world. Between the surface and bedrock is the Underground layer; it is the brown background area with inset stones that can not be removed (normally). The Bedrock is the top of the Cavern layer; it is the grey background area with inset stones that also can not be removed.

This setting could be useful in a totally underground map, or for one that had little underground, or for anything else that a creative soul can come up with!

## Bosses Downed

![Bosses](/img/v4/tedit_boss_dead.png)

These options tell the game if that boss has been killed or not. Some ingame events are based on this, like certain NPCs moving in, chance for Cthulhu to show up, etc. Also, if Skeletron is dead the Old Man wont show up at the dungeon point and you can't fight him again... unless you revive him with the editor!

## NPC's Saved

Like the Bosses Downed options, these tell the game if you have "saved" the NPCs listed. If they are not currently saved they will appear in the world in the appropriate places. If they are saved then this will not happen. You can add the NPCs individually from the NPC Names panel.

## Goblin Invasion

![Goblins](/img/v4/tedit_goblin_invasion.png)

The Invasion options are for goblin related mischief. The Invasion Type can be set to 0 or 1 and represents if there is an invasion or not.

The Invasion Size can range from 0 to 1000 in the editor. This represents how many goblins are left in the invasion. Set it to the number of goblins you wish to fight. Note that because of the way the game handles goblin invasions this number wont be exact, and you'll probably end up with a small minus number after the invasion is finished. This is normal and nothing to be worried about.

Invasion Position specifies the x-coordinate (the horizontal point) at which the invasion will focus on. Usually this is set at the original spawn point. This can be useful to change because this is usually where you will build a house with your npcs in, and may want to fight the invasion at an arena you have prepared somewhere else.
