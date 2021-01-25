const discordToken = require('../secret/discord_token.js')
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.login(discordToken.BOT_SECRET_TOKEN)