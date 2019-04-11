const restful = require('node-restful');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const weighingSchema = new Schema({
    weight: {
        type: Number,
        required: true
    },
    animal_id: {
        type: ObjectId,
        required: true
    },
    date: {
        type: ObjectId,
        required: true
    },

    farm_id: {
        type: ObjectId,
        required: true
    }
});

module.exports = restful.model('Weighing', weighingSchema);