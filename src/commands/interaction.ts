import { CommandInt } from "../interfaces/CommandInt";
import CamperModel from "../database/models/CamperModel";
import { MessageEmbed } from 'discord.js';

export const interaction: CommandInt = {
    name: "interaction",
    description: "A basis to experiment with interactions",
    cooldown: 3,
    run: async (message) => {
        
    }
}
