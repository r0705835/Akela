import { Document, model, Schema } from "mongoose";

export interface MemberInt extends Document {
    discordId: string;
    username: string;
};

export const Member = new Schema({
    discordId: String,
    username: String,
});

export default model<MemberInt>("member", Member);
