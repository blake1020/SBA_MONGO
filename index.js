const express = require('express')
require('dotenv').config()
const app = express();
const port = 3002
const conn = require('./mdb/conn')
const cors = require('cors')
//Books
const bookRoutes = require('./routes/booksRoutes')
const Book = require('./models/bookModel')
const starterBook = require('./mdb/bookSeed')

//Characters 
const characterRoutes = require('./routes/characterRoutes')
const Character = require('./models/characterModel')
const starterCharacter = require('./mdb/characterSeed')

//Mythical Creatures
const mythicalRoutes = require('./routes/mythicalRoutes')
const Mythical = ('./models/mythicalModel')
const starterMythical = require('./mdb/mythicalSeed')

//Reviews
const reviewRoutes = require('./routes/reviewsRoutes')
const Review = require('./models/reviewsModel')
const starterReview = require('./mdb/reviewSeed')


app.use(cors())
app.use(express.json())
conn()

//middle ware
app.use('/books', bookRoutes)
app.use('/characters', characterRoutes)
app.use('/mythicals', mythicalRoutes)
app.use('/reviews', reviewRoutes)

app.get('/', (req,res) => {
    res.send('Percy Jackson Home Route ')
})

//Get Book seed info
app.get('/mdb/bookSeed', async (req,res) => {
    try {
        await Book.deleteMany({}) //empties database
        // await Book.create(starterBook)
        // res.json(starterBook)

        
              //Lightning THEIF
              const lightningReview = new Review(  
                {
                
                reviewerName: 'John Doe',
                ratings: 'Fantastic', 
                content: 'A thrilling introduction to a new mythological world with a perfect blend of humor, adventure, and relatable characters. Percy Jackson/’s journey is both exciting and heartfelt.', 
              
            }
               )
               await lightningReview.save()
               const lightningReview2 = new Review(
                {
                
                reviewerName: 'Jane Smith', 
                ratings: 'Great', 
                content: 'An engaging and imaginative start to the series. The mix of modern-day settings with Greek mythology is done brilliantly, making for an entertaining and memorable read',
              }
        )
        await lightningReview2.save();
            const lightningThief = new Book(
                {
                    title: "Percy Jackson: Lightning Thief",
                    releaseYear: 2005,
                    series: "Percy Jackson and the Olympains",
                    cover: "https://www.google.com/imgres?q=percy%20jackson%20and%20the%20lightning%20thief%20book%20cover&imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F91WN6a6F3RL._AC_UF1000%2C1000_QL80_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.com%2FLightning-Thief-Percy-Jackson-Olympians%2Fdp%2F0786838655&docid=3zF3OUbkpXJKnM&tbnid=ciMkUaxA0PwrzM&vet=12ahUKEwjgrfmSnZOIAxVUhIkEHXfTNnYQM3oECBUQAA..i&w=675&h=1000&hcb=2&ved=2ahUKEwjgrfmSnZOIAxVUhIkEHXfTNnYQM3oECBUQAA",
                    summary: "Percy Jackson, a twelve-year-old who discovers he's a demigod, the son of Poseidon. After learning about his heritage and being accused of stealing Zeus’s lightning bolt, Percy embarks on a quest to find the bolt and prevent a war among the gods. Joined by his friends Annabeth Chase, daughter of Athena, and Grover, a satyr, Percy navigates a world of Greek mythology brought to life, confronts various mythical creatures, and uncovers startling truths about his own identity. Through his journey, Percy learns about friendship, bravery, and his role in the world of gods and monsters.",
                    reviews: [lightningReview, lightningReview2],
              
            }) 
         
            await Book.create(lightningThief)
            // res.json("Sent")

        //SEA OF MONSTERS 
        const seaOfMonstersReview = new Review(  
            {
                reviewerName: 'Alice Brown', 
                ratings: 'Great', 
                content: 'A fun and adventurous sequel with a fast-paced plot. The return of beloved characters and new mythical challenges keep the story engaging and enjoyable.' 
            },
           )
           await seaOfMonstersReview.save()
           const seaOfMonstersReview2 = new Review(
            { 
                reviewerName: 'Bob Johnson', 
                ratings: 'Okay', 
                content: 'While the book offers plenty of action and humor, it feels more like a setup for future events than a standalone story. Still, it/’s an entertaining read for fans of the series.'  
            }
        )
    await seaOfMonstersReview2.save();
        const seaOfMonsters = new Book(
            {
      
                title: "Percy Jackson: The Sea of Monsters",
                releaseYear: 2006, 
                series: "Percy Jackson and the Olympains",
                cover: "",
                summary: "Percy Jackson, who discovers that his friend Grover, the satyr, is in danger. Grover has been captured by the monstrous Titan Kronos and is being held in the Sea of Monsters, which is also known as the Bermuda Triangle. Percy, along with his friends Annabeth Chase and Tyson, his half-brother who is a Cyclops, embarks on a perilous journey to rescue Grover and retrieve the Golden Fleece. The Fleece has the power to heal and protect their home, Camp Half-Blood, which is under threat from a growing evil. During their quest, they face various challenges, including encounters with dangerous creatures and rival demigods. Through bravery and teamwork, Percy and his friends confront new dangers and uncover secrets about their past and the looming threat of Kronos. The story explores themes of loyalty, family, and the struggle between good and evil.",
                reviews: [seaOfMonstersReview, seaOfMonstersReview2 ],
            
            }) 
     
        await Book.create(seaOfMonsters)
        // res.json("done with monsters")

            //TITANS CURES 
            const titansCurseReview = new Review(  
                { 
                    reviewerName: 'Sophia Martinez', 
                    ratings: 'Excellent', 
                    content: 'A gripping installment with high stakes and unexpected twists. The introduction of new characters and the deepening of existing storylines make it a standout in the series.'
                  }
               )
               await titansCurseReview.save()
               const titansCurseReview2 = new Review(
                {
                    reviewerName: 'Dana Lee', 
                    ratings: 'Great', 
                    content: 'The book is packed with action and suspense. Percy and his friends face tough challenges, and the plot moves forward with exciting developments and memorable moments',  
                  }
            )
        await titansCurseReview2.save();
            const titansCurse = new Book(
                { 
                    title: "Percy Jackson: Titan's Curse",
                    releaseYear: 2007,
                    series: "Percy Jackson and the Olympains",
                    cover: "",
                    summary: "Percy Jackson embarks on a new quest with his friends Annabeth and Grover. They are joined by the goddess Artemis, who has gone missing along with her Hunter, Thalia Grace. The group must navigate perilous obstacles and battle mythical creatures to find Artemis and prevent the Titan Atlas from rising to power. As they confront these dangers, Percy uncovers more about his own fate and the ominous prophecy that could shape the future of the gods.",
                    reviews: [titansCurseReview, titansCurseReview2 ],
                
                }) 
         
            await Book.create(titansCurse)
            // res.json("done with monsters")
    
                //BATTLE OF THE LABYRINTH
        const battleOfLabyrinthReview = new Review(  
            {   
                reviewerName: 'Emily Watson', 
                ratings: 'Fantastic', 
                content: 'A thrilling adventure with intricate plot twists and a deeper exploration of the Labyrinth. The stakes are high, and the characters’ growth is compelling.' 
              },
           )
           await battleOfLabyrinthReview.save()
           const battleOfLabyrinthReview2 = new Review(
            { 
                reviewerName: 'James Rodriguez',
                ratings: 'Good',
               content: 'The book delivers a captivating journey through the Labyrinth with strong character development and engaging action. A solid continuation of the series with a satisfying resolution.', 
             }
        )
    await battleOfLabyrinthReview2.save();
        const battleOfLabyrinth = new Book(
            {   
                 title: "Percy Jackson: Battle of the Labyrinth",
                releaseYear: 2008,
                series: "Percy Jackson and the Olympains",
                cover: "",
                summary: "Percy Jackson faces a summer of escalating danger as he learns that the ancient Labyrinth, a magical maze, is being exploited by the Titan army to invade Camp Half-Blood and attack Mount Olympus. To thwart this threat, Percy, along with Annabeth, Grover, and the Cyclops Tyson, embarks on a perilous quest through the ever-shifting Labyrinth. Their journey is fraught with deadly traps and mythical creatures, and they must find Daedalus, the maze's creator, to stop the invasion. As they uncover secrets about the Labyrinth and their own destinies, they confront formidable challenges that test their bravery and teamwork. The adventure builds to a dramatic battle to protect their camp and set the stage for the impending conflict with the Titan Kronos.",
               reviews: [battleOfLabyrinthReview, battleOfLabyrinthReview2 ],
            
            }) 
     
        await Book.create(battleOfLabyrinth)
        // res.json("done with battle")

                //The Last Olympian
                const theLastOlympianReview = new Review(  
                    {
                        reviewerName: 'Liam Thompson',
                        ratings: 'Great', 
                        content: 'The Last Olympian is a thrilling wrap-up to the Percy Jackson series, blending high-stakes action with heartfelt moments. Percy and his friends face their greatest challenge yet as they defend New York City and Mount Olympus from the Titan army. The book excels in tying up loose ends and providing a satisfying conclusion to long-running story arcs. While the battle scenes are intense and the stakes are high, the book also offers a poignant look at friendship, loyalty, and the weight of destiny. A must-read for fans of the series.',
                      }
                   )
                   await theLastOlympianReview.save()
                   const theLastOlympianReview2 = new Review(
                    {
                        reviewerName: 'Emma Williams',
                        ratings: 'Fantastic', 
                        content: 'The Last Olympian provides an epic and satisfying conclusion to the Percy Jackson series. The stakes are incredibly high as Percy Jackson leads the charge against Kronos and his Titan army in a gripping battle for the fate of Mount Olympus. With well-crafted action scenes, emotional depth, and a fulfilling resolution, this book captures the essence of heroism and sacrifice. The character growth and final revelations make it a standout finale that will resonate with fans long after they’ve finished reading.',
                      }
                )
            await theLastOlympianReview2.save();
                const theLastOlympian = new Book(
                    {   
                        title: "Percy Jackson: The Last Olympian",
                        releaseYear: 2009,
                        series: "Percy Jackson and the Olympains",
                        cover: "",
                        summary: "Percy Jackson faces his most critical challenge as the prophecy foretold in his youth comes to fruition. With Kronos and his Titan army poised to attack Mount Olympus, Percy leads the demigods in a desperate battle to defend New York City and the heart of the Olympian realm. As the conflict escalates, Percy grapples with his role in the prophecy, the true nature of his powers, and his destiny. Allies are tested, betrayals are revealed, and crucial decisions must be made. The story culminates in a climactic confrontation that will determine the fate of the gods and the future of the world, with Percy discovering his own strength and the power of sacrifice.",
                        reviews: [theLastOlympianReview, theLastOlympianReview2 ],
                    
                    }) 
             
                await Book.create(theLastOlympian)
                // res.json("done with olympian")
        
                
                
                //The Lost Hero
                const theLostHeroReview = new Review(  
                    {
                        reviewerName: 'Noah Davis',
                        ratings: 'Very Good', 
                        content: 'The Lost Hero is a strong start to *The Heroes of Olympus* series, bringing in a new set of heroes and weaving an engaging tale of quests and mythology. The introduction of Jason, Piper, and Leo provides a fresh dynamic, and the plot’s focus on rescuing Hera adds a compelling drive to the story. While the book is filled with action and humor, some readers might find it a bit slower in comparison to the high energy of the original Percy Jackson series. Nonetheless, it’s a well-crafted and enjoyable read that expands the universe and builds anticipation for the next installments.',
                      }
                   )
                   await theLostHeroReview.save()
                   const theLostHeroReview2 = new Review(
                    {
                        reviewerName: 'Mia Johnson',
                        ratings: 'Great', 
                        content: 'The Lost Hero kicks off *The Heroes of Olympus* series with a fresh and exciting perspective. Introducing new characters like Jason Grace, Piper McLean, and Leo Valdez, the book expands the universe with engaging new plots and a blend of Roman and Greek mythology. The quest to rescue Hera is filled with action, humor, and intriguing twists, making it a captivating read. While some may miss the original Percy Jackson crew, the new characters bring their own charm and depth to the story, setting the stage for an epic new adventure.',
                      }
                )
            await theLostHeroReview2.save();
                const theLostHero = new Book(
                    {   
                        title: "The Heroes of Olympus: The Lost Hero",
                        releaseYear: 2010,
                        series: "The Heroes of Olympus",
                        cover: "",
                        summary: "Jason Grace, Piper McClean, and Leo Valdez. Jason wakes up with no memory of his past and discovers he is a demigod with a mysterious connection to the Roman side of the ancient pantheon. Alongside Piper, who has the power of charmspeak, and Leo, a skilled mechanic with the ability to control fire, Jason embarks on a quest to rescue the kidnapped goddess Hera. The journey takes them to the ancient lands and pits them against formidable enemies, uncovering secrets about their own identities and the looming threat of the Titan giant, Porphyrion. As they confront challenges and forge bonds, they uncover deeper mysteries tied to the prophecy that hints at a greater conflict involving both Greek and Roman gods.",
                        reviews: [theLostHeroReview, theLostHeroReview2 ],
                    
                    }) 
             
                await Book.create(theLostHero)
                // res.json("done with percy")
        
                   //Son of Neptune
                   const sonOfNeptuneReview = new Review(  
                    {
                        reviewerName: 'Liam Thompson',
                        ratings: 'Great', 
                        content: 'Following the previous events, this story brings Percy Jackson into the fold with fresh allies and challenges. The plot is engaging, featuring a well-crafted balance of action, character development, and mythological lore. The addition of Hazel and Frank adds new layers to the narrative, enhancing the adventure with their unique abilities and backstories. While some pacing might feel slow at times, the book maintains a strong momentum and sets the stage for future developments in an enjoyable and captivating way.',
                      }
                   )
                   await sonOfNeptuneReview.save()
                   const sonOfNeptuneReview2 = new Review(
                    {
                        reviewerName: 'Sophia Martinez',
                        ratings: 'Excellent', 
                        content: 'This thrilling sequel continues the journey with an exciting blend of action and mythological intrigue. As Percy Jackson navigates his new surroundings and teams up with Hazel Levesque and Frank Zhang, the story deepens with compelling character dynamics and a high-stakes quest. The exploration of new mythological elements and the development of the protagonists make for an engaging and satisfying read. The book successfully builds on the previous installment and ramps up the tension with its adventurous and emotional moments.',
                      }
                )
            await sonOfNeptuneReview2.save();
                const sonOfNeptune = new Book(
                    {   
                        title: "The Heroes of Olympus: Son of Neptune",
                        releaseYear: 2011,
                        series: "The Heroes of Olympus",
                        cover: "",
                        summary: "Percy Jackson, who has lost his memory and is living among the Roman demigods at Camp Jupiter. Percy, along with two new friends—Hazel Levesque, a demigod with the power to control the dead, and Frank Zhang, a demigod with shape-shifting abilities—embarks on a dangerous quest to free the Greek goddess of the hunt, Artemis, who is being held captive by the giant Alcyoneus. As they journey through the wilderness and face various mythical challenges, they uncover clues about a prophecy that will affect both the Greek and Roman worlds. Their mission is critical in preventing the rise of the giant king, who poses a significant threat to the safety of the demigods and the gods themselves.",
                        reviews: [sonOfNeptuneReview, sonOfNeptuneReview2 ],
                    
                    }) 
             
                await Book.create(sonOfNeptune)
                // res.json("done with neptune")
        
             
                   //Mark of Athena
                   const markOfAthenaReview = new Review(  
                    {
                        reviewerName: 'James Rodriguez',
                        ratings: 'Very Good', 
                        content: 'The journey through ancient Rome with the quest for the goddess’s statue provides an engaging and adventurous plot. The story skillfully interweaves character development with action-packed sequences, making it a compelling read. While some elements may feel familiar, the book maintains a strong narrative drive and delivers memorable moments. The challenges faced by the heroes and their interactions add richness to the ongoing saga, setting up exciting possibilities for future installments.',
                      }
                   )
                   await markOfAthenaReview.save()
                   const markOfAthenaReview2 = new Review(
                    {
                        reviewerName: 'Emily Watson',
                        ratings: 'Excellent', 
                        content: 'This installment excels with its captivating blend of adventure and mythology as the demigods face new trials in ancient Rome. The quest to find the lost statue of Athena brings together a rich tapestry of mythological challenges and character development. The dynamic between the characters, particularly Annabeth’s leadership, adds depth and excitement to the story. The high-stakes journey is both thrilling and emotionally impactful, offering a satisfying continuation of the overarching narrative and a deeper exploration of the prophecy.',
                      }
                )
            await markOfAthenaReview2.save();
                const markOfAthena = new Book(
                    {   
                        title: "The Heroes of Olympus: The Mark of Athena",
                        releaseYear: 2012,
                        series: "The Heroes of Olympus",
                        cover: "",
                        summary: "The seven demigod heroes finally coming together as the Greek and Roman demigods unite. Annabeth Chase, now traveling with Percy Jackson and the other demigods, is on a critical quest to follow the Mark of Athena, a prophetic sign that leads to the lost statue of the goddess Athena. The statue is crucial for preventing the rise of the earth goddess Gaea and her army of giants. As the group navigates treacherous trials and confronts powerful enemies in ancient Rome, they face internal conflicts and dangerous traps set by Gaea's minions. The quest tests their bravery, loyalty, and friendship, leading up to a dramatic showdown that will determine the fate of both the Greek and Roman worlds. ",
                       reviews: [markOfAthenaReview, markOfAthenaReview2 ],
                    
                    }) 
             
                await Book.create(markOfAthena)
                // res.json("done with athena")

                   //House of Hades
                   const houseOfHadesReview = new Review(  
                    {
                        reviewerName: 'Ava Clark',
                        ratings: 'Excellent', 
                        content: 'This installment masterfully intertwines the struggles of the heroes on two separate quests, creating a gripping narrative with high stakes. As the characters face challenges both in the Underworld and the mortal realm, the story delves deeply into their personal growth and the overarching prophecy. The blend of tension, action, and emotional depth keeps readers fully engaged, making it a standout addition to the series. The dual perspective provides a rich and immersive experience, further enhancing the epic scope of the adventure.',
                      }
                   )
                   await houseOfHadesReview.save()
                   const houseOfHadesReview2 = new Review(
                    {
                        reviewerName: 'Ethan Lewis',
                        ratings: 'Great', 
                        content: 'The parallel quests of the heroes add a dynamic layer to this exciting chapter. The narrative’s shift between the Underworld and the mortal world offers a fresh and engaging approach to the story, with well-crafted challenges and character interactions. The book balances intense action with moments of introspection, effectively advancing the plot and deepening the character arcs. Although some parts may feel a bit drawn out, the overall journey remains compelling and sets up promising developments for the series.',
                      }
                )
            await houseOfHadesReview2.save();
                const houseOfHades = new Book(
                    {   
                        title: "The Heroes of Olympus: The House of Hades",
                        releaseYear: 2013,
                        series: "The Heroes of Olympus",
                        cover: "",
                        summary: " The story continues with the demigod heroes on two parallel quests. Percy Jackson and Annabeth Chase are trapped in the Underworld, trying to find a way to escape and reach the mortal world. Meanwhile, their friends—Hazel Levesque, Frank Zhang, Piper McLean, and Leo Valdez—are on a mission to close the Doors of Death from the mortal side, which involves navigating through the dangerous lands of the ancient Greek and Roman monsters. As they face formidable challenges and encounter both allies and enemies, their actions are crucial in preventing the awakening of the earth goddess Gaea. The journey brings them closer to understanding their roles in the prophecy and the impending threat to both their worlds.",
                        
                      reviews: [houseOfHadesReview, houseOfHadesReview2 ],
                    
                    }) 
             
                await Book.create(houseOfHades)
                // res.json("done with hades")
        
          //Blood of Olympus
          const blookdOfOlympusReview = new Review(  
            {
                reviewerName: 'Mason Turner',
                ratings: 'Very Good', 
                content: 'The climactic events unfold with a well-paced narrative that balances action with character development. The resolution of the central conflict is both dramatic and satisfying, showcasing the growth of the heroes and their final confrontation with the forces of chaos. While some elements may feel predictable, the overall execution is engaging and provides a strong finish to the series. The blend of mythological themes and personal stakes makes for an engrossing read that fans of the series will appreciate.',
              }
           )
           await blookdOfOlympusReview.save()
           const blookdOfOlympusReview2 = new Review(
            {
                reviewerName: 'Olivia Green',
                ratings: 'Great', 
                content: 'This thrilling conclusion to the series brings together all the elements that have built up throughout the saga. The final battle against the looming threat is filled with intense action and emotional highs. The character arcs are wrapped up satisfactorily, and the integration of both Greek and Roman mythology adds a rich layer to the resolution. The story successfully combines adventure and closure, delivering a memorable and impactful ending that ties up loose ends while providing a fitting conclusion to the epic journey.',
              }
        )
    await blookdOfOlympusReview2.save();
        const blookdOfOlympus = new Book(
            {   
                title: "The Heroes of Olympus: The Blood of Olympus",
                releaseYear: 2014,
                series: "The Heroes of Olympus",
                cover: "",
                summary: "The story culminates with the heroes of both Camp Half-Blood and Camp Jupiter joining forces to prevent the rise of the earth goddess Gaea. As they approach the final battle, the demigods must thwart Gaea's plan to awaken and overthrow the Olympian gods. Percy Jackson, Annabeth Chase, and their friends—along with new allies—face a series of intense challenges, including a climactic confrontation with Gaea's army. Leo Valdez plays a pivotal role with his newfound powers, while the group navigates treacherous landscapes and encounters formidable monsters. The book brings the series to a dramatic conclusion, revealing the true nature of the prophecy and the sacrifices required to ensure the survival of both the Greek and Roman worlds.",
                reviews: [blookdOfOlympusReview, blookdOfOlympusReview2 ],
            
            }) 
     
        await Book.create(blookdOfOlympus)
        // res.json("done with olympus")

          //The Hidden Oracle
          const theHiddenOracleReview = new Review(  
            {
                reviewerName: 'Mason Turner',
                ratings: 'Very Good', 
                content: 'The climactic events unfold with a well-paced narrative that balances action with character development. The resolution of the central conflict is both dramatic and satisfying, showcasing the growth of the heroes and their final confrontation with the forces of chaos. While some elements may feel predictable, the overall execution is engaging and provides a strong finish to the series. The blend of mythological themes and personal stakes makes for an engrossing read that fans of the series will appreciate.',
              }
           )
           await theHiddenOracleReview.save()
           const theHiddenOracleReview2 = new Review(
            {
                reviewerName: 'Sophia Martinez',
                ratings: 'Great', 
                content: 'The introduction of the Olympian god turned mortal brings a refreshing new perspective to the series. The quest to restore divine powers while dealing with personal vulnerabilities adds depth to the narrative. The story is well-paced with engaging character interactions and a blend of humor and adventure. The new challenges and mythological elements introduce exciting twists, setting the stage for further developments. Overall, it’s a compelling start to a new chapter in the world of Greek mythology.',
              }
        )
    await theHiddenOracleReview2.save();
        const theHiddenOracle = new Book(
            {     
                title: "The Trials of Apollo: The Hidden Oracle",
                releaseYear: 2016,
                series: "The Trials of Apollo",
                cover: "",
                summary: "Apollo, the Olympian god of the sun, who has been cast down from his divine realm and turned into a mortal teenager named Lester Papadopoulos as punishment by Zeus. Struggling with his new human vulnerabilities, Apollo must find a way to regain his godly powers and restore his place among the Olympian gods. To do so, he teams up with a demigod named Meg McCaffrey and her loyal protector, and together they embark on a quest to locate the ancient oracles that have been hidden or destroyed. Their journey leads them to Camp Half-Blood, where they uncover a sinister plot involving the ancient Titan, Python, and the fate of the oracles. As Apollo grapples with his new reality and learns more about himself, he must confront various mythical challenges and forge new alliances to prevent a looming catastrophe. ",
               
               reviews: [theHiddenOracleReview, theHiddenOracleReview2 ],
            
            }) 
     
        await Book.create(theHiddenOracle)
        // res.json("done with oracle")

           //The Dark Prophecy
           const theDarkProphecyReview = new Review(  
            {
                reviewerName: 'Mia Johnson',
                ratings: 'Excellent', 
                content: 'This installment brilliantly continues the quest with high stakes and intriguing new revelations. The journey through Indianapolis and the encounter with the Triumvirate Holdings adds a fresh layer of danger and excitement. The balance of action, suspense, and character development is well-executed, making for a gripping read. The exploration of ancient secrets and the ongoing struggle to avert catastrophe keep readers thoroughly engaged, delivering a powerful continuation of the series.',
              }
           )
           await theDarkProphecyReview.save()
           const theDarkProphecyReview2 = new Review(
            {
                reviewerName: 'Ethan Walker',
                ratings: 'Great', 
                content: "The story maintains a strong momentum with its dark and adventurous plot. The challenges faced by the characters in their search for the prophecy create an engaging narrative filled with tension and surprises. While the pacing may slow at times, the book/'s exploration of new mythological elements and character dynamics offers a compelling experience. The unfolding mysteries and escalating threats effectively set up future developments in the series.",
              }
        )
    await theDarkProphecyReview2.save();
        const theDarkProphecy = new Book(
            {     
                title: "The Trials of Apollo: The Dark Prophecy",
                releaseYear: 2017,
                series: "The Trials of Apollo",
                cover: "",
                summary: 'Apollo, still in his mortal form as Lester Papadopoulos, continues his quest with demigod Meg McCaffrey. They travel to Indianapolis in search of the "Dark Prophecy" and enter the dangerous "Cave of Trophonius" to uncover ancient secrets. They face mythical dangers and confront the Triumvirate Holdings, a powerful enemy faction, while Apollo struggles with his mortal condition and seeks to prevent a looming threat to both the mortal and divine worlds.',
                reviews: [theDarkProphecyReview, theDarkProphecyReview2 ],
            
            }) 
     
        await Book.create(theDarkProphecy)
        // res.json("done with prophecy")


      //The Burning Maze
         const theBurningMazeReview = new Review(  
            {
                reviewerName: 'Noah Davis',
                ratings: 'Very Good', 
                content: 'The story continues with intense challenges and an adventurous journey through the treacherous maze. The dynamic between the characters and their confrontations with formidable enemies drive the plot forward effectively. While some pacing issues might arise, the book’s exploration of new threats and character relationships keeps the narrative intriguing. Overall, it’s an engaging and well-crafted addition to the series that builds anticipation for future developments.',
              }
           )
           await theBurningMazeReview.save()
           const theBurningMazeReview2 = new Review(
            {
                reviewerName: 'Isabella Brown',
                ratings: 'Excellent', 
                content: 'This entry in the series delivers a compelling blend of danger and emotional depth. The quest through the Labyrinth introduces high-stakes challenges and showcases the characters’ growth in new and impactful ways. The balance between action and character development keeps the narrative engaging, while the intricate plot twists add to the suspense. The personal struggles and sacrifices made by the heroes enhance the story’s emotional resonance, making it a standout installment in the series.',
              }
            )
    await theBurningMazeReview2.save();
        const theBurningMaze = new Book(
            {    
                title: "The Trials of Apollo: The Burning Maze",
                releaseYear: 2018,
                series: "The Trials of Apollo",
                cover: "",
                summary: "Apollo (still in his mortal form as Lester Papadopoulos) and his demigod friend Meg McCaffrey continue their quest to restore Apollo's godly status and thwart the rise of ancient chaos. They journey to the Labyrinth to rescue the demigod and former friend, Leo Valdez, who has been captured by the deadly sorceress, Medea. As they navigate the treacherous maze and battle against powerful enemies, they face intense challenges and unravel crucial prophecies. Meanwhile, Apollo grapples with his own vulnerabilities and seeks to protect his friends while uncovering more about the dark forces threatening both the mortal and divine realms.",
                reviews: [theBurningMazeReview, theBurningMazeReview2 ],
            
            }) 
     
        await Book.create(theBurningMaze)
        // res.json("done with maze")


  //The Tyrant's Tomb
  const theTyrantTombReview = new Review(  
    {
        reviewerName: 'Ava Roberts',
        ratings: 'Great', 
        content: 'This installment delivers an exciting and suspenseful narrative as the characters confront new threats in Camp Jupiter. The story is filled with action-packed sequences and intricate plot twists that keep the reader engaged. The political intrigue and personal struggles of the protagonists add depth to the plot, making it a captivating read. The book effectively builds tension and sets up future conflicts, offering a strong continuation of the series.',
      }
   )
   await theTyrantTombReview.save()
   const theTyrantTombReview2 = new Review(
    {
        reviewerName: 'Liam Carter',
        ratings: 'Very Good', 
        content: 'The adventure in this book is both thrilling and emotionally charged. The exploration of the Roman camp and the rise of a new threat provide a gripping backdrop for the characters’ development. While the pacing occasionally slows, the character dynamics and dramatic moments offer a compelling read. The book builds on previous events and sets the stage for the series’ conclusion with a well-crafted blend of action and personal stakes.',
      } 
    )
await theTyrantTombReview2.save();
const theTyrantTomb = new Book(
    {     
        title: "The Trials of Apollo: The Tyrant's Tomb",
        releaseYear: 2019,
        series: "The Trials of Apollo",
        cover: "",
        summary: " Apollo (still in his mortal form as Lester Papadopoulos) and his friends—Meg McCaffrey, the Hunters of Artemis, and the remaining demigods—head to Camp Jupiter in San Francisco to confront a looming threat. They discover that the Roman camp is in peril, with the evil emperor Commodus rising to power. Apollo must navigate political intrigue, battle fearsome enemies, and uncover hidden secrets to protect his friends and prevent the empire from falling into chaos. As the stakes grow higher, Apollo faces personal challenges and struggles with his role in the prophecy, all while trying to thwart the sinister plans of the Triumvirate Holdings.",
 
         reviews: [theTyrantTombReview, theTyrantTombReview2 ],
    
    }) 

await Book.create(theTyrantTomb)
// res.json("done with tomb")

 //The Chalice oF the Gods
 const chaliceOfTheGodsReview = new Review(  
    {
        reviewerName: 'Emily Clark',
        ratings: 'Great', 
        content: 'This new addition to the series is a thrilling adventure that captures the charm and excitement of the original books. The quest to retrieve a powerful artifact brings familiar characters together with fresh challenges and humorous moments. The blend of mythological elements and contemporary settings continues to deliver engaging and memorable experiences. Fans of the series will enjoy the new twists and character interactions that drive the story forward.',
      }
   )
   await chaliceOfTheGodsReview.save()
   const chaliceOfTheGodsReview2 = new Review(
    {
        reviewerName: 'Jack Turner',
        ratings: 'Very Good', 
        content: 'The book provides a satisfying continuation with an entertaining quest and strong character dynamics. The adventure is filled with creative mythical encounters and the usual blend of humor and heroism. While some aspects of the plot may feel reminiscent of previous stories, the new challenges and character developments keep the narrative engaging. It’s a fun and nostalgic read that fits well within the series while offering new thrills.',
      }
    )
await chaliceOfTheGodsReview2.save();
const chaliceOfTheGods = new Book(
    {     
        title: "Percy Jackson: the Chalice of the Gods",
        releaseYear: 2023,
        series: "Percy Jackson and the Olympains",
        cover: "",
        summary: "Percy Jackson is about to start his senior year of high school and hopes for a normal life, but his plans are interrupted when he is tasked with retrieving the mythical Chalice of the Gods, a powerful artifact that has gone missing. Alongside his friends Annabeth Chase and Grover Underwood, Percy embarks on a quest that leads them across various mythological challenges and locations. They must navigate ancient prophecies, confront powerful monsters, and unravel a mystery that threatens both the mortal and divine worlds. As Percy deals with the demands of his heroic life and his upcoming future, he faces both new and familiar challenges that test his strength and resolve.",
        reviews: [chaliceOfTheGodsReview, chaliceOfTheGodsReview2 ],
    
    }) 

await Book.create(chaliceOfTheGods)
res.json("done with chalice")


 //The Wrath of ghe Triple Goddess
//  const wrathTripleGoddessReview = new Review(  
//     {
//         reviewerName: 'Emily Clark',
//         ratings: 'Great', 
//         content: 'This new addition to the series is a thrilling adventure that captures the charm and excitement of the original books. The quest to retrieve a powerful artifact brings familiar characters together with fresh challenges and humorous moments. The blend of mythological elements and contemporary settings continues to deliver engaging and memorable experiences. Fans of the series will enjoy the new twists and character interactions that drive the story forward.',
//       }
//    )
//    await wrathTripleGoddessReview.save()
//    const wrathTripleGoddessReview2 = new Review(
//     {
//         reviewerName: 'Jack Turner',
//         ratings: 'Very Good', 
//         content: 'The book provides a satisfying continuation with an entertaining quest and strong character dynamics. The adventure is filled with creative mythical encounters and the usual blend of humor and heroism. While some aspects of the plot may feel reminiscent of previous stories, the new challenges and character developments keep the narrative engaging. It’s a fun and nostalgic read that fits well within the series while offering new thrills.',
//       }
//     )
// await wrathTripleGoddessReview2.save();
// const wrathTripleGoddess = new Book(
//     {     
//         title: "Percy Jackson: the Chalice of the Gods",
//         releaseYear: 2023,
//         series: "Percy Jackson and the Olympains",
//         cover: "",
//         summary: "Percy Jackson is about to start his senior year of high school and hopes for a normal life, but his plans are interrupted when he is tasked with retrieving the mythical Chalice of the Gods, a powerful artifact that has gone missing. Alongside his friends Annabeth Chase and Grover Underwood, Percy embarks on a quest that leads them across various mythological challenges and locations. They must navigate ancient prophecies, confront powerful monsters, and unravel a mystery that threatens both the mortal and divine worlds. As Percy deals with the demands of his heroic life and his upcoming future, he faces both new and familiar challenges that test his strength and resolve.",
//         reviews: [wrathTripleGoddessReview, wrathTripleGoddessReview2 ],
    
//     }) 

// await Book.create(chaliceOfTheGods)
// res.json("not released yet")

// //WHAT SHOULD I DO ABOUT THIS ONE FOR THE REVIEWS SINCE NOT RELEASED YET

    } catch (error) {
        console.log(`Something went wrong loading seed data ${error.message} `)
    }
}
)

//Get Character seed info
app.get('/mdb/characterSeed', async (req,res) => {
    try {
        // await Character.deleteMany({})
        await Character.create(starterCharacter)
        res.json(starterCharacter)
    } catch (error) {
        console.log(`Something went wrong loading character seed data ${error.message} `)
    }
}
)

//Get Mythical seed info
app.get('/mdb/mythicalSeed', async (req,res) => {
    try {
        // await Mythical.deleteMany({})
        await Mythical.create(starterMythical)
        res.json(starterMythical)
    } catch (error) {
        console.log(`Something went wrong loading mythical seed data ${error.message} `)
    }
}
)

app.get('mbd/reviewSeed', async(req,res) => {
    try {
        await Review.create(starterReview)
        res.json(starterReview)
    } catch (error) {
        console.log(`Something went wrong with loading review seed data`)
    }
})
app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`)
})
