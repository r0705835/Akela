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

    const BOT = new Client({
        intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]
    });
    BOT.on("ready", () => {
        console.log("Connected to Discord!");

        const guildId = "618754163773538306";
        const guild = BOT.guilds.cache.get(guildId);

        let commands;

        if (guild) {
            commands = guild.commands;
        } else {
            BOT.application?.commands
        }

        commands?.create({
            name: 'ping',
            description: 'replies with pong'
        })
    });

    BOT.on('interactionCreate', async (interaction) => await onInteractionCreate(interaction));
    BOT.on("messageCreate", async (message) => await onMessage(message));
    BOT.on('messageReactionAdd', async (reaction, user) => await onReactionAdd(reaction, user));
    BOT.on('messageReactionRemove', async (reaction, user) => await onReactionRemove(reaction, user));
    BOT.on('voiceStateUpdate', async (oldState, newState) => await onVoiceStateUpdate(oldState, newState));
    await connectDatabase();
    await BOT.login(process.env.BOT_TOKEN);
})();
