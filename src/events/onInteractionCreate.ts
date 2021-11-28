import { CacheType, CommandInteraction, Interaction } from "discord.js";


export const onInteractionCreate = async (interaction: Interaction) => {
    if(!interaction.isCommand) { 
        return;
    }

    const command = interaction as CommandInteraction;

    const { commandName, options } = command;

    if (commandName === 'ping') {
        command.reply({
            content: 'pong',
        })
    }
}
