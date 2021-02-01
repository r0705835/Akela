module.exports = {
	name: 'ping',
	aliases: ['connect'],
    cooldown: 5,
	description: 'Ping!',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};