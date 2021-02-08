module.exports = {
	name: 'jorrit',
	aliases: ['coolgastj', 'gamedesigner'],
    cooldown: 5,
	description: 'Commands for jorrit',
	execute(message, args) {
		const { jorrit } = require('./quotes.json');
		const content = jorrit[Math.floor(Math.random() * jorrit.length)];
		message.channel.send(content);
	},
};