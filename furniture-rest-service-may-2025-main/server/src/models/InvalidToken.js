import { Schema, model } from "mongoose";

const invalidTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
    },
    invalidatedAt: {
        type: Date,
        default: Date.now,
    }
});

invalidTokenSchema.index({ invalidatedAt: 1 }, { expireAfterSeconds: 10 })

const InvalidToken = model('InvalidToken', invalidTokenSchema);

export default InvalidToken;
