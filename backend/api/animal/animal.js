const restful = require('node-restful');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const animalSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    earring_number_left: {
        type: String,
        required: false
    },
    earring_series_left_id: {
        type: ObjectId,
        required: false
    },
    earring_number_right: {
        type: String,
        required: false
    },
    earring_series_right_id: {
        type: ObjectId,
        required: false
    },
    ear_tattoo_left: {
        type: String,
        required: false
    },
    ear_tattoo_right: {
        type: String,
        required: false
    },

    registry: {
        type: String,
        required: false
    },

    birthdate: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },

    race_id: {
        type: ObjectId,
        required: true
    },
    blood_degree_id: {
        type: ObjectId,
        required: true
    },

    getter_id: {
        type: ObjectId,
        required: true
    },
    venter_id: {
        type: ObjectId,
        required: true
    },

    farm_id: {
        type: ObjectId,
        required: true
    }
});

module.exports = restful.model('Animal', animalSchema);