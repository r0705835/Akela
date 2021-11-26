import { GuildMember } from "discord.js"
import MemberModel from "./models/MemberModel";

export const manageMemberData = async (member: GuildMember) => {
    try {
        let targetMemberData = await MemberModel.findOne({ 'discordId': member.id });
        if (!targetMemberData) {
            targetMemberData = await MemberModel.create({
                discordId: member.id,
                username: member.user.username
            });
        }
    } catch (error) {
        console.error('Something went wrong with managing the activity of the user: ', error);
    }
}