module.exports = {
	name: 'karel',
	aliases: ['keral', "thatgp", "thatgoldpiece", "kerel"],
    cooldown: 5,
	description: 'Commands for karel',
	execute(message, args) {
		const { karel } = require('./quotes.json');
		const content = karel[Math.floor(Math.random() * karel.length)];
		message.channel.send(content);
	},
};