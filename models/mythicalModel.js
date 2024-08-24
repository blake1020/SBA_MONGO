const mongoose = require('mongoose')

const MythicalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    species: {
      type:  String,
    required: false,
    },
    alliance: {
      type: String,
      required: false,
    },
    description:{
      type:  String,
    required: true
    
    }
})

const Mythical = mongoose.model('Mythical', MythicalSchema )

module.exports = Mythical;