const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    reviewerName:{
        type: String,
        required: true
    },
    ratings: {
      type:  String, //adding the dropdonw menu option to the schema?
    required: true,
    },
    content:{
      type:  String,
    required: true
    
    },
   book: {
    type: mongoose.Schema.ObjectId,
    ref: "bookSchema",
    required: true
   }
})

const Review = mongoose.model('Review', ReviewSchema )

module.exports = Review;