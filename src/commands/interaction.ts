import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
import { SlashCommandInt } from '../interfaces/SlashCommandInt';


export const interaction: SlashCommandInt = {
    data: new SlashCommandBuilder()
        .setName("interaction")
        .setDescription("A basis to experiment with interactions."),
    run: async (interaction) => {
        const interactionEmbed = new MessageEmbed();
        interactionEmbed.setTitle("Interactible embed!");
        interactionEmbed.setDescription("Press the button to embrace the copper golem inside of you!\nWARNING: redstone contraption not provided.");
        interactionEmbed.setColor("#71368A");
        await interaction.reply({
            embeds: [interactionEmbed]
        });
    }
}
