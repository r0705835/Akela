import { CommandInt } from "../interfaces/CommandInt";
import { oneHundred } from "./oneHundred";
import { view } from "./view";
import { edit } from "./edit";
import { help } from "./help";
import { reactionMessage } from "./reactionMessage";

export const CommandList: CommandInt[] = [oneHundred, view, edit, help, reactionMessage];
