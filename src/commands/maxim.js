module.exports = {
	name: 'bas',
	aliases: ['edge muffin', 'condor'],
    cooldown: 5,
	description: 'Commands for maxim',
	execute(message, args) {
		const { maxim } = require('./quotes.json');
		const content = maxim[Math.floor(Math.random() * maxim.length)];
		message.channel.send(content);
	},
};