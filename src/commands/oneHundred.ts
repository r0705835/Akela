import { MessageEmbed } from 'discord.js';
import CamperModel from "../database/models/CamperModel";
import { CommandInt } from "../interfaces/CommandInt";

export const oneHundred: CommandInt = {
    name: "100",
    description: "Creates a 100 Days of Code update",
    cooldown: 3,
    run: async (message) => {
        const { author, channel, content } = message;
        const text = content.split("").slice(1).join(" ");

        let targetCamperData = await CamperModel.findOne({ discordId: author.id });
        
        if (!targetCamperData) {
            targetCamperData = await CamperModel.create({
                discordId: author.id,
                round: 1,
                day: 0,
                timestamp: Date.now()
            });
        }

        targetCamperData.day++;
        if (targetCamperData.day > 100) {
            targetCamperData.day = 1;
            targetCamperData.round++;
            targetCamperData.timestamp = Date.now();
            await targetCamperData.save();
        }

        const oneHundredEmbed = new MessageEmbed();
        oneHundredEmbed.setTitle("100 Days of Code");
        oneHundredEmbed.setDescription(text);
        oneHundredEmbed.setAuthor(author.username + "#" + author.discriminator, author.displayAvatarURL());
        oneHundredEmbed.addField("Round", targetCamperData.round.toString(), true);
        oneHundredEmbed.addField("Day", targetCamperData.day.toString(), true);
        oneHundredEmbed.setFooter("Day completed: " + new Date(targetCamperData.timestamp).toLocaleDateString());

        await channel.send({
            embeds: [oneHundredEmbed]
        });
        await message.delete();
    }
}
