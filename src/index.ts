require('dotenv').config();
import { Client } from "discord.js";
import { connectDatabase } from "./database/connectDatabase";
import { onMessage } from "./events/onMessage";
import { onReactionAdd } from "./events/onReactionAdd";
import { onReactionRemove } from "./events/onReactionRemove";
import { onVoiceStateUpdate } from "./events/onVoiceStateUpdate";
import { validateEnv } from "./utils/validateEnv";

(async () => {
    if (!validateEnv()) return;

    const BOT = new Client();
    BOT.on("ready", () => console.log("Connected to Discord!"));
    BOT.on("message", async (message) => await onMessage(message));
    BOT.on('messageReactionAdd', async (reaction, user) => await onReactionAdd(reaction, user));
    BOT.on('messageReactionRemove', async (reaction, user) => await onReactionRemove(reaction, user));
    BOT.on('voiceStateUpdate', async(oldState, newState) => await onVoiceStateUpdate(oldState, newState));
    await connectDatabase();
    await BOT.login(process.env.BOT_TOKEN);
})();
