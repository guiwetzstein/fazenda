const restful = require('node-restful');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const farmSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true
    }
});

module.exports = restful.model('Farm', farmSchema);