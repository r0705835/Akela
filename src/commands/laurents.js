module.exports = {
	name: 'laurents',
	aliases: ['lau', 'courland', 'chad'],
    cooldown: 5,
	description: 'Commands for laurents',
	execute(message, args) {
		const { laurents } = require('./quotes.json');
		const content = laurents[Math.floor(Math.random() * laurents.length)];
		message.channel.send(content);
	},
};