import { Document, model, Schema } from "mongoose";

export interface MemberInt extends Document {
    
};

export const Member = new Schema({
    
});

export default model<MemberInt>("member", Member);
