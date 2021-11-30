import Collection from "@discordjs/collection";
import { CommandInt } from "../interfaces/CommandInt";
import { SlashCommandInt } from "../interfaces/SlashCommandInt";
import { edit } from "./edit";
import { help } from "./help";
import { interaction } from "./interaction";
import { nicknames } from "./nicknames";
import { oneHundred } from "./oneHundred";
import { ping } from "./ping";
import { reactionMessage } from "./reactionMessage";
import { view } from "./view";


export const CommandList: CommandInt[] = [nicknames, interaction];

export const slashCommandList: Collection<string, SlashCommandInt> = new Collection();
slashCommandList.set(ping.data.name, ping);
slashCommandList.set(help.data.name, help);
slashCommandList.set(view.data.name, view);
slashCommandList.set(oneHundred.data.name, oneHundred);edit
slashCommandList.set(edit.data.name, edit);
slashCommandList.set(reactionMessage.data.name, reactionMessage);
