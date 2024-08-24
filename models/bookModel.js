const mongoose = require('mongoose')

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
    // cover: {
    // type: String,
    // required: false,
    // },
    reviews: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "reviewSchema",
    
      },
    ],
})

const Book = mongoose.model('book', BookSchema )

module.exports = Book;