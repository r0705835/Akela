import { Message } from "discord.js";

export interface CommandInt {
    name: string;
    description: string;
    cooldown: number;
    run: (message: Message) => Promise<void>;
}
