module.exports = {
	name: 'yordi',
	aliases: ['jordi', 'yordivision'],
    cooldown: 5,
	description: 'Commands for yordi',
	execute(message, args) {
		const { yordi } = require('./quotes.json');
		const content = yordi[Math.floor(Math.random() * yordi.length)];
		message.channel.send(content);
	},
};