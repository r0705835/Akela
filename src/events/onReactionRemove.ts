import { MessageReaction, PartialUser, Role, User } from "discord.js";
import { BaseRole } from "../classes/BaseRole";
import roleJSON from "./role.json";


export const onReactionRemove = async (reaction: MessageReaction, user: PartialUser | User) => {
    // When we receive a reaction we check if the reaction is partial or not
    if (reaction.partial) {
        // If the message this reaction belongs to was removed the fetching might result in an API error, which we need to handle
        try {
            await reaction.fetch();
        } catch (error) {
            console.error('Something went wrong when fetching the message: ', error);
            // Return as `reaction.message.author` may be undefined/null
            return;
        }
    }

    if (user.partial) {
        try {
            await user.fetch();
        } catch (error) {
            console.error('Something went wrong when fetching the user: ', error);
            return;
        }
    }
    const member = reaction.message.guild?.members.cache.find(member => member.id === user.id)!;
    let baseRole: BaseRole = search(roleJSON.roles, reaction.emoji.name)[0];
    if (baseRole) {
        const assignableRole: Role = reaction.message.guild?.roles.cache.find(role => role.id === baseRole.id)!;
        await member.roles.remove(assignableRole);
    }
}

function search(data: any, s: string): BaseRole[] {
    let result: BaseRole[] = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].name === s) {
            result[i] = data[i];
            break;
        }
    }
    return result;
}
