const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Shift = new Schema({
    start: { type: String, required: true },
    end: { type: String, required: true },
    date: { type: String, required: true },
    total: String,
})

const Shifts = mongoose.model('Shift', Shift)
module.exports = Shifts




