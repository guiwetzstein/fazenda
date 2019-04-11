const restful = require('node-restful');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const bloodDegreeSchema = new Schema({
    degree: {
        type: String,
        required: true
    },
    race_id: {
        type: ObjectId,
        required: true
    }
});

module.exports = restful.model('BloodDegree', bloodDegreeSchema);