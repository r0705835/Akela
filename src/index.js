require('dotenv').config();
const messageService = require('./message_replies.js')
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

client.on('message', message => {
	messageService.reply(message)
}); 

client.login(process.env.TOKEN)