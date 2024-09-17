const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const measureDataSchema = new Schema({
    deviceID: {
        type: String,
        required: true
    },
    measure: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('measureData', measureDataSchema);