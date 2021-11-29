import { Interaction } from "discord.js";
import { slashCommandList } from "../commands/_CommandsList";


export const onInteractionCreate = async (interaction: Interaction) => {
	if (!interaction.isCommand()) return;

	try {
		const commandName = interaction.commandName;
		const executeableCommand = slashCommandList.get(commandName)!;
		executeableCommand.run(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
}
