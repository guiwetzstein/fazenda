const restful = require('node-restful');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const vaccinationSchema = new Schema({
    dose: {
        type: String,
        required: false
    },
    vaccine_id: {
        type: ObjectId,
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

module.exports = restful.model('Vaccination', vaccinationSchema);