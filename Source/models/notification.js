var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Notification = new Schema({
    headers: {
        text: {type: String}
    },
    payload: {
        type: {type: String}
    },
    target: {
        id: {type: String},
        services: {type: Array},
        platforms: {type: Array},
        locale: {type: String},
        country: {type: Array},
        version: {type: String}
    }
}, {strict: false});

module.exports = mongoose.model('notifications', Notification);