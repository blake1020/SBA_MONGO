const express = require('express')
const router = express.Router();
const Review = require('../models/reviewsModel')
const Book = require('../models/bookModel')
//shpw all reviews in database

router.get('/', async (req,res) => {
    const allTheReviews = await Review.find({})
    res.json(allTheReviews)
})


// router.get('/:id', async (req, res) => {
//        try {
//         const book = await Book.findById(req.params.id); 
        
//         if (!book) {
//             return res.status(404).json({ message: 'Book not found' });
//         }
//         res.json(book);
//     } catch (error) {
//         console.error('Error fetching book:', error);
//         res.json({ message: 'Failed to fetch book' });
//     }
// });

router.get('/:id/reviews', async (req, res) => {
    try {
        // const reviews = await Review.find({book:req.book.id}).populate("book")
        const reviews = await Book.findById(req.params.id).populate('reviews')
        res.json(reviews)
        console.log(reviews)
    } catch (error) {
        console.log(error)
    }
})

//Create new review
router.post('/reviews', async (req, res) => {
    console.log(req.body)    
    const createReview = await Review.create(req.body)
        
        res.json(createReview)
    
} )

//Update - Patch
router.patch('/:id', async (req,res) => {
    try {
        const updateReview = await Review.findByIdAndUpdate(req.params.id, req.body)
        console.log(updateReview)
          if (!updateReview) {
            return res.status(404)
          }  
          res.json(updateReview)
    } catch (error) {
        res.status(400).json({error: error.message})
    }


})

//delete
router.delete('/:id', async (req,res) => {
    try {
        const deleteReview = await Review.findByIdAndDelete(req.params.id)
       if (!deleteReview) {
        return res.status(404).json({error: 'Review not found'})
       }
       res.json({message: 'Review deleted succesfully', review: deleteReview})
    } catch (error) {
        
    }
    

})
module.exports = router