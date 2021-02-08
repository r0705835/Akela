module.exports = {
	name: 'tim',
	aliases: ['glacialwraith', 'whitewolf0808', 'timmy'],
    cooldown: 5,
	description: 'Commands for tim',
	execute(message, args) {
		const { tim } = require('./quotes.json');
		const content = tim[Math.floor(Math.random() * tim.length)];
		message.channel.send(content);
	},
};