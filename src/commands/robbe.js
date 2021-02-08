module.exports = {
	name: 'robbe',
	aliases: ['haubourdyn', 'moose', 'robbedoes'],
    cooldown: 5,
	description: 'Commands for robbe',
	execute(message, args) {
		const { robbe } = require('./quotes.json');
		const content = robbe[Math.floor(Math.random() * robbe.length)];
		message.channel.send(content);
	},
};