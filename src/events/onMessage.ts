import { Message, Collection } from "discord.js";
import { CommandList } from "../commands/_CommandsList";
import { CommandInt } from "../interfaces/CommandInt";

const prefix: string = "$";
// Cooldowns from https://discordjs.guide/command-handling/adding-features.html#cooldowns
const cooldowns: Collection<string, Collection<string, number>> = new Collection();

function cooldown(command: CommandInt, message: Message){
    // Cooldowns from https://discordjs.guide/command-handling/adding-features.html#cooldowns
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Collection());
    }

    const now = Date.now();
    const timestamps: Collection<string, number> = cooldowns.get(command.name)!;
    const cooldownAmount = (command.cooldown || 3) * 1000;


    if (timestamps.has(message.author.id)) {
        if(!timestamps.get(message.author.id)) { return; }
        const expirationTime = timestamps.get(message.author.id)! + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`)
        }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
}

export const onMessage = async (message: Message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    for (const Command of CommandList) {
        if (message.content.startsWith(prefix + Command.name)) {
            try {
                Command.run(message);
            } catch (error) {
                console.error(error);
                message.reply('there was an error trying to execute that command!');
            }
            break;
        }
    }

    console.log(message.content);
}
