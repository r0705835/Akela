const { roleMessage, partyGamesId, ShooterId, CrafterId, EndervilleId } = require('../../config.json');
const client = require('../index.js').client;

client.on('messageReactionAdd', async (reaction, user) => {
    const member = reaction.message.guild.members.cache.find(member => member.id === user.id);

    switch (reaction.emoji.name) {
        case "🎉":
            await member.roles.add(partyGamesId);
            break;
        case "🔫":
            await member.roles.add(ShooterId);
            break;
        case "⛏️":
            await member.roles.add(CrafterId);
            break;
        case "🎥":
            await member.roles.add(EndervilleId);
            break;
        default:
            break;
    }
});

client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.id !== roleMessage) return;

    // When we receive a reaction we check if the reaction is partial or not
	if (reaction.partial) {
		// If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message: ', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
    }

	// Now the message has been cached and is fully available
	console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
	// The reaction is now also fully available and the properties will be reflected accurately:
	console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
});
