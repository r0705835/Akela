import { GuildMember, VoiceState } from "discord.js";
import MemberModel from "../database/models/MemberModel";


export const onVoiceStateUpdate = async (oldState: VoiceState, newState: VoiceState) => {
    try {
        const member: GuildMember = newState.member!;
        let targetMemberData = await MemberModel.findOne({'discordId': member.id});
        if (!targetMemberData) {
            targetMemberData = await MemberModel.create({
                discordId: member.id,
                username: member.displayName
            });
        }
    } catch (error) {
        console.error(error);
    }
}
