import { MessageEmbed } from "discord.js";
import CamperModel from "../database/models/CamperModel";
import { CommandInt } from "../interfaces/CommandInt";

export const view: CommandInt = {
    name: "view",
    description: "View your current 100 Days of Code progress",
    cooldown: 3,
    run: async (message) => {
        const { author, channel, content } = message;
        const targetCamperData = await CamperModel.findOne({ discordId: author.id });

        if (!targetCamperData) {
            await channel.send("You have not started the challenge yet.");
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
            author.username + "#" + author.discriminator,
            author.displayAvatarURL()
        );

        await channel.send({
            embeds: [camperEmbed]
        });
        await message.delete();

    }
}
