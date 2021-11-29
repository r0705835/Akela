import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
import { SlashCommandInt } from '../interfaces/SlashCommandInt';
import { slashCommandList } from "./_CommandsList";


export const help: SlashCommandInt = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Returns information on the bots available commands."),
    run: async (interaction) => {
        const helpEmbed = new MessageEmbed();
        helpEmbed.setTitle("Available Commands!");
        helpEmbed.setDescription("These are the available commands for this bot.");
        helpEmbed.addField("Commands:",
            slashCommandList.map((command) => `\`${command.data.name}\`: ${command.data.description}`).join("\n"));
        await interaction.reply({
            embeds: [helpEmbed], ephemeral: true
        });
    }
}
