const restful = require('node-restful');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const earringSeriesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },

    farm_id: {
        type: ObjectId,
        required: true
    }
});

module.exports = restful.model('EarringSeries', earringSeriesSchema);