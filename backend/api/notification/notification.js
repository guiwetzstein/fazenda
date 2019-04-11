const restful = require('node-restful');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const notificationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    user_id: {
        type: ObjectId,
        required: true
    },
    visualized: {
        type: Boolean,
        required: true
    }
});

module.exports = restful.model('Notification', notificationSchema);