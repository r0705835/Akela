import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from 'discord.js';
import CamperModel from "../database/models/CamperModel";
import { SlashCommandInt } from '../interfaces/SlashCommandInt';


export const oneHundred: SlashCommandInt = {
    data: new SlashCommandBuilder()
        .setName("100")
        .addStringOption(option =>
            option.setName("description")
                .setDescription("The description of your 100 Days of Code update."))
        .setDescription("Creates a 100 Days of Code update."),
    run: async (interaction) => {
        const user = interaction.user;
        let targetCamperData = await CamperModel.findOne({ discordId: user.id });

        if (!targetCamperData) {
            targetCamperData = await CamperModel.create({
                discordId: user.id,
                round: 1,
                day: 0,
                timestamp: Date.now()
            });
        }

        targetCamperData.day++;
        if (targetCamperData.day > 100) {
            targetCamperData.day = 1;
            targetCamperData.round++;
        }
        targetCamperData.timestamp = Date.now();
        await targetCamperData.save();

        try {
            const oneHundredEmbed = new MessageEmbed();
            oneHundredEmbed.setTitle("100 Days of Code");

            if (interaction.options.getString("description")) {
                oneHundredEmbed.setDescription(interaction.options.getString("description")!);
            }
            oneHundredEmbed.setAuthor(user.username + "#" + user.discriminator, user.displayAvatarURL());
            oneHundredEmbed.addField("Round", targetCamperData.round.toString(), true);
            oneHundredEmbed.addField("Day", targetCamperData.day.toString(), true);
            oneHundredEmbed.setFooter("Day completed: " + new Date(targetCamperData.timestamp).toLocaleDateString());

            await interaction.reply({
                embeds: [oneHundredEmbed],
            });
        } catch (error) {
            console.error(error);
        }

    }
}
