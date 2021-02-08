module.exports = {
	name: 'daan',
	aliases: ['dan', 'mesreg', 'notasimp'],
    cooldown: 5,
	description: 'Commands for daan',
	execute(message, args) {
		const { daan } = require('./quotes.json');
		const content = daan[Math.floor(Math.random() * daan.length)];
		message.channel.send(content);
	},
};