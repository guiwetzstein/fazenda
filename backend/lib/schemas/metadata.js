const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const metadataSchema = new Schema({
    deleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    createdBy: {
        type: String,
        required: false
    },
    updatedAt: {
        type: Date,
        required: false,
        default: null
    },
    updatedBy: {
        type: String,
        required: false
    }
});

module.exports = metadataSchema;