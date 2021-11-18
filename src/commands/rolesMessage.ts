import { MessageEmbed } from 'discord.js';

const message: string = "**Welcome to the PUB!**\n" +
"\n" +
"**You can opt-in (or out) for different subjects of interest**\n" +
"―――――――――――――――――――――――――\n" +
"Simply reply to this message with one of the emoji's below.\n" +
" 🎉: For party games like among us, jackbox, etc.\n" +
" 🔫: For shooter games like Valorant, Star Wars Battlefront, Borderlands, etc.\n" +
" ⛏️: For anything Minecraft related.\n" +
" 🎥: For Enderville, a full-scale minecraft video series.\n" +
" ☕: For the workspace, where you can work quietly or go the meeting room to have a casual chat.\n" +
" 🎴: For card games like magic the gathering.\n" +
" 🏎️: For racing games like Formula 1, Mario kart, etc. \n" +
" 🧍: For the Stand-up. Enable visionary convergence! \n" +


"\n" +
"**Bot commands**\n" +
"―――――――――――――――――――――――――\n" +
"Akela: $help for more info.\n" +
"Statbot: s?help for more info.\n" +
"Hydra: .help for more info.\n";

const rolesEmbed = new MessageEmbed();
rolesEmbed.setTitle("Roles");
rolesEmbed.setDescription(message);