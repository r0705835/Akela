import { Client, Intents } from "discord.js";
import dotenv from 'dotenv';
import { connectDatabase } from "./database/connectDatabase";
import { onInteractionCreate } from './events/onInteractionCreate';
import { onMessage } from "./events/onMessage";
import { onReactionAdd } from "./events/onReactionAdd";
import { onReactionRemove } from "./events/onReactionRemove";
import { onVoiceStateUpdate } from "./events/onVoiceStateUpdate";
import { validateEnv } from "./utils/validateEnv";
dotenv.config();

(async () => {
    if (!validateEnv()) return;

    const client = new Client({
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]
    });
    client.on("ready", () => {
        console.log("Connected to Discord!");

        const guildId = "618754163773538306";
        const guild = client.guilds.cache.get(guildId);

        let commands;

        if (guild) {
            commands = guild.commands;
        } else {
            client.application?.commands
        }

        commands?.create({
            name: 'ping',
            description: 'replies with pong'
        })
    });

    client.on('interactionCreate', async (interaction) => await onInteractionCreate(interaction));
    client.on("messageCreate", async (message) => await onMessage(message));
    client.on('messageReactionAdd', async (reaction, user) => await onReactionAdd(reaction, user));
    client.on('messageReactionRemove', async (reaction, user) => await onReactionRemove(reaction, user));
    client.on('voiceStateUpdate', async (oldState, newState) => await onVoiceStateUpdate(oldState, newState));
    await connectDatabase();
    await client.login(process.env.BOT_TOKEN);
})();
