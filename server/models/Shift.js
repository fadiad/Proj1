const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Shift = new Schema({
    start: { type: Date, required: true },
    end: { type: Date, required: true },
    total: Number,
})

const Shifts = mongoose.model('Shift', Shift)
module.exports = Shift




