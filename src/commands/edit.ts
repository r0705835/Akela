import { SlashCommandBuilder } from '@discordjs/builders';
import { SlashCommandInt } from "../interfaces/SlashCommandInt";


export const edit: SlashCommandInt = {
    data: new SlashCommandBuilder()
        .setName("edit")
        .addStringOption(option =>
            option.setName("messageid")
                .setDescription("The ID of a previous 100 Days of Code post in this channel.")
                .setRequired(true))
        .addStringOption(option =>
            option.setName("description")
                .setDescription("The new text for the targeted 100 Days of Code post."))
        .setDescription("Edit a previous 100 Days of Code post"),
    run: async (interaction) => {
        try {
            const user = interaction.user;
            const channel = interaction.channel!;
            const targetId = interaction.options.getString("messageid")!;
            const text = interaction.options.getString("description");
            const targetMessage = await channel!.messages.fetch(targetId);

            if (!targetMessage) {
                await interaction.reply({
                    content: "That does not appear to be a valid message ID.",
                    ephemeral: true
                });
                return;
            }

            const targetEmbed = targetMessage.embeds[0];

            if (targetEmbed.author?.name !== user.username + "#" + user.discriminator) {
                await interaction.reply({
                    content: "This does not appear to be your 100 Days of Code post. You cannot edit it.",
                    ephemeral: true
                });
                return;
            }

            if (text) {
                targetEmbed.setDescription(text);
            }

            await targetMessage.edit({
                embeds: [targetEmbed]
            });

            await interaction.reply({
                content: "Target message has normally been edited!",
                ephemeral: true
            });
            
        } catch (error) {
            console.error(error);
        }

    }
}
