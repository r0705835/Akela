module.exports = {
	name: 'simon',
	aliases: ['snoggle'],
    cooldown: 5,
	description: 'Commands for simon',
	execute(message, args) {
		const { simon } = require('./quotes.json');
		const content = simon[Math.floor(Math.random() * simon.length)];
		message.channel.send(content);
	},
};