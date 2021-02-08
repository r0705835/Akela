module.exports = {
	name: 'ilse',
	aliases: ['lisse', 'nadekyou'],
    cooldown: 5,
	description: 'Commands for ilse',
	execute(message, args) {
		const { ilse } = require('./quotes.json');
		const content = ilse[Math.floor(Math.random() * ilse.length)];
		message.channel.send(content);
	},
};