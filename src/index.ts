import { Client } from "discord.js";
import { connectDatabase } from "./database/connectDatabase";
import { onMessage } from "./events/onMessage";
import { validateEnv } from "./utils/validateEnv";

(async () => {
    if (!validateEnv()) return;

    const BOT = new Client();
    BOT.on("ready", () => console.log("Connected to Discord!"));
    BOT.on("message", async (message) => await onMessage(message));
    await connectDatabase();
    await BOT.login(process.env.BOT_TOKEN);
})();