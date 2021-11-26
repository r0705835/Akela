import { GuildMember, VoiceState } from "discord.js";
import { manageMemberData } from "../database/manageMemberData";


export const onVoiceStateUpdate = async (oldState: VoiceState, newState: VoiceState) => {
    try {
        const member: GuildMember = newState.member!;
        if (member.user.bot) return;
        manageMemberData(member)
    } catch (error) {
        console.error(error);
    }
}
