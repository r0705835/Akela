import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from "discord.js";
import { SlashCommandInt } from "../interfaces/SlashCommandInt";


export const reactionMessage: SlashCommandInt = {
    data: new SlashCommandBuilder()
        .setName("reactionMessage")
        .setDescription("Create a message that can assign roles."),
    run: async (interaction) => {
        const reactionEmbed = new MessageEmbed();
        reactionEmbed.setTitle("Role assigner");
        reactionEmbed.setDescription("React ⛏️ to this message to get the minecraft role");
        await interaction.reply({
            embeds: [reactionEmbed]
        });
    }
}
