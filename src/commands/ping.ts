import { SlashCommandBuilder } from '@discordjs/builders';
import { SlashCommandInt } from '../interfaces/SlashCommandInt';

export const ping: SlashCommandInt = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!'),
    run: async (interaction) => {
        await interaction.reply({
            content: "Pong!", ephemeral: true
        });
    }
}
