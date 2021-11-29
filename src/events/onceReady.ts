import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Client } from "discord.js";
import dotenv from 'dotenv';
import { slashCommandList } from '../commands/_CommandsList';
dotenv.config();


export const onceReady = async (client: Client) => {
    const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN!);

    (async () => {
        try {
            console.log('Started refreshing application (/) commands.');
            const interactions = slashCommandList.map(command => command.data.toJSON());
            await rest.put(
                Routes.applicationGuildCommands(process.env.CLIENT_ID!, process.env.GUILD_ID!),
                { body: interactions },
            );

            console.log('Successfully reloaded application (/) commands.');
        } catch (error) {
            console.error(error);
        }
    })();
    console.log("Connected to Discord!");
}
