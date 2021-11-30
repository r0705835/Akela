import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
import { SlashCommandInt } from '../interfaces/SlashCommandInt';


export const nicknames: SlashCommandInt = {
    data: new SlashCommandBuilder()
        .setName("nicknames")
        .setDescription("Returns the nickname of all players in the server."),
    run: async (interaction) => {
        const nicknamesEmbed = new MessageEmbed();
        nicknamesEmbed.setTitle("Nicknames!");
        nicknamesEmbed.setDescription("Names of everyone in the server.");
        nicknamesEmbed.setColor("#71368A");
        try {
            const names: string[] = [];
            const guild = interaction.guild!;
            const members = await guild.members.fetch({ time: 30000, force: true });
            members.forEach(member => {
                if (member.nickname) {
                    names.push(member.nickname);
                }
            });
            nicknamesEmbed.addField("Nicknames:", names.toString());
            await interaction.reply({
                embeds: [nicknamesEmbed]
            });
        } catch (error) {
            console.log(error);
        }
    }
}
