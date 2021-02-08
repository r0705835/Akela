module.exports = {
	name: 'hendrik',
	aliases: ['hendrick', 'henk', 'hendrik of the lake what is your wisdom'],
    cooldown: 5,
	description: 'Commands for hendrik',
	execute(message, args) {
		const { hendrik } = require('./quotes.json');
		const content = hendrik[Math.floor(Math.random() * hendrik.length)];
		message.channel.send(content);
	},
};