module.exports = {
	name: 'yoheto',
	aliases: ['hivemind'],
    cooldown: 5,
	description: 'Commands for yoheto',
	execute(message, args) {
		const { yoheto } = require('./quotes.json');
		const content = yoheto[Math.floor(Math.random() * yoheto.length)];
		message.channel.send(content);
	},
};