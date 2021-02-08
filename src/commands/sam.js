module.exports = {
	name: 'sam',
	aliases: ['armorcrow', 'crow'],
    cooldown: 5,
	description: 'Commands for sam',
	execute(message, args) {
		const { sam } = require('./quotes.json');
		const content = sam[Math.floor(Math.random() * sam.length)];
		message.channel.send(content);
	},
};