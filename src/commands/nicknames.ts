import { MessageEmbed } from 'discord.js';
import { CommandInt } from "../interfaces/CommandInt";

export const nicknames: CommandInt = {
    name: "nicknames",
    description: "Returns the nickname of all players in the server",
    cooldown: 3,
    run: async (message) => {
        const nicknamesEmbed = new MessageEmbed();
        nicknamesEmbed.setTitle("Nicknames!");
        nicknamesEmbed.setDescription("Names of everyone in the server.");
        nicknamesEmbed.setColor("#71368A");
        try {
            const names: string[] = [];
            const guild = message.guild!;
            const members = await guild.members.fetch({ time: 30000, force: true });
            members.forEach(member => {
                if (member.nickname) {
                    names.push(member.nickname);
                }
            });
            nicknamesEmbed.addField("Nicknames:", names.toString());
            await message.channel.send({
                embeds: [nicknamesEmbed]
            });
        } catch (error) {
            console.log(error);
        }

    }
}
