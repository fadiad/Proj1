const mongoose = require("mongoose")
const Shift = require("./Shift")

const Schema = mongoose.Schema

const Teacher = new Schema({
    idNum: { type: Number, required: true },
    name: { type: String, required: true },
    phone: { type: Number, required: true },
    secondaryPhone: Number,
    accountNum: { type: Number, required: true },
    shift: [{ type: Schema.Types.ObjectId, ref: 'Shift' }],
    pictures: [String],
    address: String,
    additions: String,
})

const Teachers = mongoose.model('Teacher', Teacher)
module.exports = Teachers




