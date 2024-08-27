const mongoose = require('mongoose')
const reviewSchema = require('./reviewsModel')

const BookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    releaseYear: {
      type:  Number,
    required: true,
    },
    series:{
      type:  String,
    required: true
    },
    summary: {
      type: String,
      required: false
    },
    cover: {
    type: String,
    required: false,
    },
    reviews: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Review",
    
      },
    ],
})

const Book = mongoose.model('Book', BookSchema )

module.exports = Book;