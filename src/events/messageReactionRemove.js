const client = require('../index.js').client;

client.on('messageReactionRemove', async (reaction, user) => {
    if (reaction.message.id !== process.env.roleMessage) return;

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

    const member = reaction.message.guild.members.cache.find(member => member.id === user.id);
    const roles = require("./role.json").roles;
    let role = roles.find(item => item.name === reaction.emoji.name);
    if(role) {
        await member.roles.remove(role.id);
    }
});
