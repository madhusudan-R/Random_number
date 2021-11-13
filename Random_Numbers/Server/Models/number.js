const mongoose = require('mongoose');

// create a Schema
const Schema = mongoose.Schema;

const NumberSchema = new Schema(
    {
        number:{
            type: Array,
            required: true
        }
    }
);

// export the model
module.exports = mongoose.model('number', NumberSchema, 'number');