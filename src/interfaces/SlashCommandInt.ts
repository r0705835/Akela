import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from "discord.js";

export interface SlashCommandInt {
    data: SlashCommandBuilder;
    run: (interaction: CommandInteraction) => Promise<void>;
}
