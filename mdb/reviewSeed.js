const mongoose = require('mongoose')
const reviewSeed = {
    'Lighnting Theif': [
      { reviewerName: 'John Doe',
        ratings: 'Fantastic', 
        content: 'An exciting start to the series with a fantastic blend of action and mythology.', 
        bookSchema: "Percy Jackson and the Lightening Theif",
    },
         
      { reviewerName: 'Jane Smith', 
        rating: 'Great', 
        content: 'The character development is top-notch, making you care deeply about the protagonists.',
        bookSchema:  "The Sea of Monsters"},
    ],

    'Sea of Monsters': [
      { reviewerName: 'Alice Brown', rating: 'Great', content: 'A thrilling continuation of the story with even more intense adventures and twists.' },
      { reviewerName: 'Bob Johnson', rating: 'Okay', content: 'The plot thickens and the stakes get higher, keeping readers on the edge of their seats.' },
    ],
    'Titan\'s Curse': [
      { reviewerName: 'Charlie Davis', 
        rating: 'Fantastic', 
        content: 'An epic conclusion to the initial trilogy with plenty of surprises and resolutions.'},

      { reviewerName: 'Dana Lee', rating: 'Great', content: 'This book provides many memorable moments and a satisfying end to the series.', bookId: {}  },//pulled by book id? if so do i needc to pull the book titles in here or the book id
    ], 
    'Battle of the Labyrinth': [
        { reviewerName: 'Charlie Davis', rating: 'Fantastic', content: 'An epic conclusion to the initial trilogy with plenty of surprises and resolutions.' },
        { reviewerName: 'Dana Lee', rating: 'Great', content: 'This book provides many memorable moments and a satisfying end to the series.', bookId: {}  },//pulled by book id? if so do i needc to pull the book titles in here or the book id      
    ]
  };
  
  //pulling from the numbers so pick that books id number and place the review in that arrary
