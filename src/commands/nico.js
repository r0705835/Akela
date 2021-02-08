module.exports = {
	name: 'nico',
	aliases: ['nicolas', 'zeefir'],
    cooldown: 5,
	description: 'Commands for nico',
	execute(message, args) {
		const { nico } = require('./quotes.json');
		const content = nico[Math.floor(Math.random() * nico.length)];
		message.channel.send(content);
	},
};