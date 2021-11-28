import { MessageEmbed } from "discord.js";
import { CommandInt } from "../interfaces/CommandInt";

export const reactionMessage: CommandInt = {
    name: "reactionMessage",
    description: "Create a message that can assign roles",
    cooldown: 3,
    run: async (message) => {
        const { channel } = message;
        const reactionEmbed = new MessageEmbed();
        reactionEmbed.setTitle("Role assigner");
        reactionEmbed.setDescription("React ⛏️ to this message to get the minecraft role");
        await channel.send({
            embeds: [reactionEmbed]
        });
        await message.delete();

    }
}
