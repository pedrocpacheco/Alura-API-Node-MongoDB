import mongoose from "mongoose";

const communitySchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        frase: {type: String},
        firstSeason: {type: Number, required: true},
        leader: {type: String, required: true},
        totalMembers: {type: Number}
    },
    {
        versionKey: false
    }
)

const communityModel = mongoose.model("Community", communitySchema);

export default communityModel;