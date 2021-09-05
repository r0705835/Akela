import { CommandInt } from "../interfaces/CommandInt";

export const edit: CommandInt = {
    name: "edit",
    description: "Edit a previous 100 Days of Code post",
    run: async (message) => {
        const { author, channel, content } = message;
        const [, targetId, ...text] = content.split(" ");
        const targetMessage = await channel.messages.fetch(targetId);

        if(!targetMessage) {
            await channel.send("That does not appear to be a valid message ID.");
            return;
        }

        const targetEmbed = targetMessage.embeds[0];

        if (targetEmbed.author?.name !== author.username + "#" + author.discriminator) {
            await channel.send("This does not appear to be your 100 DAys of Code post. You cannot edit it.");
            return;
        }

        targetEmbed.setDescription(text.join(" "));
        
        await targetMessage.edit(targetEmbed);
        await message.delete();
    }
}
