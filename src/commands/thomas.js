module.exports = {
	name: 'thomas',
	aliases: ['toto', 'reus'],
    cooldown: 5,
	description: 'Commands for thomas',
	execute(message, args) {
		const { thomas } = require('./quotes.json');
		const content = thomas[Math.floor(Math.random() * thomas.length)];
		message.channel.send(content);
	},
};