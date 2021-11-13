const mongoose = require('mongoose');

// create a Schema
const Schema = mongoose.Schema;

const PlayerSchema = new Schema(
    {
       player: {
           type: Array,
           required: true
       },
       number:{
           type: Array,
           required: true
       }
       
      
    }
);

// export the model
module.exports = mongoose.model('Player', PlayerSchema, 'Player');