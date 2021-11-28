import { Client } from "discord.js";


export const onceReady = async (client: Client) => {
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
}
