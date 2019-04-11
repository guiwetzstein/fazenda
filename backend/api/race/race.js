const restful = require('node-restful');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const raceSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    farm_id: {
        type: ObjectId,
        required: true
    }
});

module.exports = restful.model('Race', raceSchema);