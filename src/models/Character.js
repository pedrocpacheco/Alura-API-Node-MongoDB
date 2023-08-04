import mongoose from "mongoose";

const characterSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        actor: {type: String, required: true},
        community: {type: mongoose.Schema.Types.ObjectId, ref:'communityModel', required: true},
        kills: {type: Number}
    }
)

const characterModel = mongoose.model("characters", characterSchema);

export default characterModel;