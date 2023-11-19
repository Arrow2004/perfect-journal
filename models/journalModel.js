const {Schema,model} = require("mongoose")

const journalSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        previewPicture: {
            type: String,
            required: true
        },
        journal_source: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        query:{
            type: String,
            required: true,
            unique: true
        }   
    },{
        timestamps: true
    }
)
const Journal = model("Journal",journalSchema);
module.exports = {Journal}