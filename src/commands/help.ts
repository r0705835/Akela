import { CommandInt } from "../interfaces/CommandInt";
import { MessageEmbed } from 'discord.js';
import { CommandList } from "./_CommandsList";

export const help: CommandInt = {
    name: "help",
    description: "Returns information on the bots available commands.",
    cooldown: 3,
    run: async (message) => {
        const helpEmbed = new MessageEmbed();
        helpEmbed.setTitle("Available Commands!");
        helpEmbed.setDescription("These are the available commands for this bot.");
        helpEmbed.addField("Commands:",
        CommandList.map((el) => `\`$${el.name}\`: ${el.description}`).join("\n"));
        await message.channel.send(helpEmbed);
    }
}
