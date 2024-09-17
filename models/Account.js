const Schema = require('mongoose').Schema;

const AccountSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    boughtHistory: [{
        time: {
            type: Date,
            required: true
        },
        type1: {
            type: Number,
            default: 0
        },
        type2: {
            type: Number,
            default: 0
        },
        type3: {
            type: Number,
            default: 0
        },
        type4: {
            type: Number,
            default: 0
        },
        type5: {
            type: Number,
            default: 0
        },
        type6: {
            type: Number,
            default: 0
        },
    }]
});

module.exports = require('mongoose').model('Account', AccountSchema);