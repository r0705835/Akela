module.exports = {
	name: 'bas',
	aliases: ['broeraroem'],
    cooldown: 5,
	description: 'Commands for bas',
	execute(message, args) {
		const { bas } = require('./quotes.json');
		const content = bas[Math.floor(Math.random() * bas.length)];
		message.channel.send(content);
	},
};