import mongoose from "mongoose";

const characterSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        actor: {type: String, required: true},
        community: {type: String, required: true},
        kills: {type: Number}
    }
)

const characters = mongoose.model("characters", characterSchema);

export default characters;