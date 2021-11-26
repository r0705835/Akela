import { CommandInt } from "../interfaces/CommandInt";
import { MessageEmbed } from 'discord.js';

export const interaction: CommandInt = {
    name: "interaction",
    description: "A basis to experiment with interactions",
    cooldown: 3,
    run: async (message) => {
        const interactionEmbed = new MessageEmbed();
        interactionEmbed.setTitle("Interactible embed!");
        interactionEmbed.setDescription("Press the button to embrace the copper golem inside of you!\nWARNING: redstone contraption not provided.");
        interactionEmbed.setColor("#71368A");
        await message.channel.send(interactionEmbed);
    }
}
