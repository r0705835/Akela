import { SlashCommandBuilder } from '@discordjs/builders';
import { MessageEmbed } from "discord.js";
import CamperModel from "../database/models/CamperModel";
import { SlashCommandInt } from "../interfaces/SlashCommandInt";


export const view: SlashCommandInt = {
    data: new SlashCommandBuilder()
        .setName("view")
        .setDescription("View your current 100 Days of Code progress"),
    run: async (interaction) => {
        const user = interaction.user;
        const targetCamperData = await CamperModel.findOne({ discordId: user.id });

        if (!targetCamperData) {
            await interaction.reply("You have not started the challenge yet.");
            return;
        }

        const camperEmbed = new MessageEmbed();
        camperEmbed.setTitle("My 100DoC Progress");
        camperEmbed.setDescription(
            `Here is my 100 Days of Code progress. I last reported an update on ${new Date(
                targetCamperData.timestamp
            ).toLocaleDateString()}.`
        );
        camperEmbed.addField("Round", targetCamperData.round.toString(), true);
        camperEmbed.addField("Day", targetCamperData.day.toString(), true);
        camperEmbed.setAuthor(
            user.username + "#" + user.discriminator,
            user.displayAvatarURL()
        );

        await interaction.reply({
            embeds: [camperEmbed]
        });
    }
}
