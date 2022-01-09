# Discord-recluse-bot

This is a basic discord bot written for a personal server using Node.js and [Discord.js](https://discord.js.org/#/).
___

The bot uses slash commands (type / into the discord chat to start it). These commands allow users to add or delete roles, get random dog/cat images, and pull random posts (text or images only) from a specified subreddit.

Usage is as follows:
* `/rw-ping`:                 Gets a response from the bot
* `/rw-addrole <rolename>`:   Adds specified role to the user
* `/rw-rmrole <rolename>`:    Removes specified role from the user
* `/rw-getdog`:               Gets a random dog image from dog.ceo
* `/rw-getcat`:               Gets a random cat image from aws.random.cat
* `/rw-getreddit <subreddit>` Gets a random post from the 'hot' category of the subreddit (_does not check if NSFW_)

*Note: This is an ongoing project and will probably be added to overtime