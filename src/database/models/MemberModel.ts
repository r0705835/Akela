import { Document, model, Schema } from "mongoose";

export interface MemberInt extends Document {
    discordId: string;
    username: string;
    timeLastMessage: number;
};

export const Member = new Schema({
    discordId: String,
    username: String,
    timeLastMessage: Number,
});

export default model<MemberInt>("member", Member);
