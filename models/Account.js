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
    // pill: [{
    //     num: {
    //         type: Number,
    //         required: true
    //     },
    //     typeOf: {
    //         type: Number,
    //         required: true
    //     }
    // }]
});

module.exports = require('mongoose').model('Account', AccountSchema);