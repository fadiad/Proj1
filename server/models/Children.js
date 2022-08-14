const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Children = new Schema({
    idNum: { type: Number, required: true },
    name: { type: String, required: true },
    parentsNames: [{ father: String }, { mother: String }],
    parentPhoneNum: {
        parentType: { type: String, required: true },
        PhoneNum: { type: Number, required: true },
    },
    parentSecondaryPhoneNum: Number,
    birthdate: Date,
    additions: String,
})

const Childrens = mongoose.model('Children', Children)
module.exports = Childrens




