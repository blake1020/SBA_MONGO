const express = require('express')
const router = express.Router();
const Review = require('../models/reviewsModel')

//shpw all reviews in database
router.get('/', async (req,res) => {
    const allTheReviews = await Review.find({})
    res.json(allTheReviews)
})



//Create new character
router.post('/reviews', async (req, res) => {
    console.log(req.body)    
    const createReview = await Review.create(req.body)
        
        res.json(createReview)
    
} )

//Update - Patch
router.patch('/reviews', async (req,res) => {
    const updateReview = await Review.findByIdAndUpdate(req.params.id, req.body)
    console.log(updateReview)

    res.json(updateReview)
})

router.delete('/bookReviews', async (req,res) => {
    const deleteReview = await Review.findByIdAndDelete(req.params.id)
    res.json(deleteReview)
})
module.exports = router