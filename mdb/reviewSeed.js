const mongoose = require('mongoose')

const reviewSeed = {
    "Percy Jackson: Lightning Thief": [
      { reviewerName: 'John Doe',
        ratings: 'Fantastic', 
        content: 'A thrilling introduction to a new mythological world with a perfect blend of humor, adventure, and relatable characters. Percy Jackson/’s journey is both exciting and heartfelt.', 
      
    },
         
      { 
        reviewerName: 'Jane Smith', 
        ratings: 'Great', 
        content: 'An engaging and imaginative start to the series. The mix of modern-day settings with Greek mythology is done brilliantly, making for an entertaining and memorable read',
      }
    ],

    "Percy Jackson: The Sea of Monsters": [
      {
        reviewerName: 'Alice Brown', 
        ratings: 'Great', 
        content: 'A fun and adventurous sequel with a fast-paced plot. The return of beloved characters and new mythical challenges keep the story engaging and enjoyable.' 
    },
      { 
        reviewerName: 'Bob Johnson', 
        ratings: 'Okay', 
        content: 'While the book offers plenty of action and humor, it feels more like a setup for future events than a standalone story. Still, it/’s an entertaining read for fans of the series.'  
    },
    ],
    "Percy Jackson: Titan's Curse": [
      { 
        reviewerName: 'Sophia Martinez', 
        ratings: 'Excellent', 
        content: 'A gripping installment with high stakes and unexpected twists. The introduction of new characters and the deepening of existing storylines make it a standout in the series.'
      },
      {
        reviewerName: 'Dana Lee', 
        ratings: 'Great', 
        content: 'The book is packed with action and suspense. Percy and his friends face tough challenges, and the plot moves forward with exciting developments and memorable moments',  
      },//pulled by book id? if so do i needc to pull the book titles in here or the book id
    ], 
    "Percy Jackson: Battle of the Labyrinth": 
    [
  
      {   
        reviewerName: 'Emily Watson', 
        ratings: 'Fantastic', 
        content: 'A thrilling adventure with intricate plot twists and a deeper exploration of the Labyrinth. The stakes are high, and the characters’ growth is compelling.' 
      }, 
      { 
         reviewerName: 'James Rodriguez',
         ratings: 'Good',
        content: 'The book delivers a captivating journey through the Labyrinth with strong character development and engaging action. A solid continuation of the series with a satisfying resolution.', 
      },
    
      
        //pulled by book id? if so do i needc to pull the book titles in here or the book id      
    ],
    "Percy Jackson: The Last Olympian": [
      {
        reviewerName: 'Emma Williams',
        rating: 'Fantastic', 
        content: 'The Last Olympian provides an epic and satisfying conclusion to the Percy Jackson series. The stakes are incredibly high as Percy Jackson leads the charge against Kronos and his Titan army in a gripping battle for the fate of Mount Olympus. With well-crafted action scenes, emotional depth, and a fulfilling resolution, this book captures the essence of heroism and sacrifice. The character growth and final revelations make it a standout finale that will resonate with fans long after they’ve finished reading.',
      },
      {
        reviewerName: 'Liam Thompson',
        rating: 'Great', 
        content: 'The Last Olympian is a thrilling wrap-up to the Percy Jackson series, blending high-stakes action with heartfelt moments. Percy and his friends face their greatest challenge yet as they defend New York City and Mount Olympus from the Titan army. The book excels in tying up loose ends and providing a satisfying conclusion to long-running story arcs. While the battle scenes are intense and the stakes are high, the book also offers a poignant look at friendship, loyalty, and the weight of destiny. A must-read for fans of the series.',
      }
    ],
    "The Heroes of Olympus: The Lost Hero": [
      {
        reviewerName: 'Mia Johnson',
        rating: 'Great', 
        content: 'The Lost Hero kicks off *The Heroes of Olympus* series with a fresh and exciting perspective. Introducing new characters like Jason Grace, Piper McLean, and Leo Valdez, the book expands the universe with engaging new plots and a blend of Roman and Greek mythology. The quest to rescue Hera is filled with action, humor, and intriguing twists, making it a captivating read. While some may miss the original Percy Jackson crew, the new characters bring their own charm and depth to the story, setting the stage for an epic new adventure.',
      },
      {
        reviewerName: 'Noah Davis',
        rating: 'Very Good', 
        content: 'The Lost Hero is a strong start to *The Heroes of Olympus* series, bringing in a new set of heroes and weaving an engaging tale of quests and mythology. The introduction of Jason, Piper, and Leo provides a fresh dynamic, and the plot’s focus on rescuing Hera adds a compelling drive to the story. While the book is filled with action and humor, some readers might find it a bit slower in comparison to the high energy of the original Percy Jackson series. Nonetheless, it’s a well-crafted and enjoyable read that expands the universe and builds anticipation for the next installments.',
      }
    ],
    "The Heroes of Olympus: Son of Neptune": [
      {
        reviewerName: 'Sophia Martinez',
        rating: 'Excellent', 
        content: 'This thrilling sequel continues the journey with an exciting blend of action and mythological intrigue. As Percy Jackson navigates his new surroundings and teams up with Hazel Levesque and Frank Zhang, the story deepens with compelling character dynamics and a high-stakes quest. The exploration of new mythological elements and the development of the protagonists make for an engaging and satisfying read. The book successfully builds on the previous installment and ramps up the tension with its adventurous and emotional moments.',
      },
      {
        reviewerName: 'Liam Thompson',
        rating: 'Great', 
        content: 'Following the previous events, this story brings Percy Jackson into the fold with fresh allies and challenges. The plot is engaging, featuring a well-crafted balance of action, character development, and mythological lore. The addition of Hazel and Frank adds new layers to the narrative, enhancing the adventure with their unique abilities and backstories. While some pacing might feel slow at times, the book maintains a strong momentum and sets the stage for future developments in an enjoyable and captivating way.',
      }
    ],
    "The Heroes of Olympus: The Mark of Athena": [
      {
        reviewerName: 'Emily Watson',
        rating: 'Excellent', 
        content: 'This installment excels with its captivating blend of adventure and mythology as the demigods face new trials in ancient Rome. The quest to find the lost statue of Athena brings together a rich tapestry of mythological challenges and character development. The dynamic between the characters, particularly Annabeth’s leadership, adds depth and excitement to the story. The high-stakes journey is both thrilling and emotionally impactful, offering a satisfying continuation of the overarching narrative and a deeper exploration of the prophecy.',
      },
      {
        reviewerName: 'James Rodriguez',
        rating: 'Very Good', 
        content: 'The journey through ancient Rome with the quest for the goddess’s statue provides an engaging and adventurous plot. The story skillfully interweaves character development with action-packed sequences, making it a compelling read. While some elements may feel familiar, the book maintains a strong narrative drive and delivers memorable moments. The challenges faced by the heroes and their interactions add richness to the ongoing saga, setting up exciting possibilities for future installments.',
      }
    ],
    "The Heroes of Olympus: The House of Hades": [
      {
        reviewerName: 'Ava Clark',
        rating: 'Excellent', // Adjusted based on your rating options
        content: 'This installment masterfully intertwines the struggles of the heroes on two separate quests, creating a gripping narrative with high stakes. As the characters face challenges both in the Underworld and the mortal realm, the story delves deeply into their personal growth and the overarching prophecy. The blend of tension, action, and emotional depth keeps readers fully engaged, making it a standout addition to the series. The dual perspective provides a rich and immersive experience, further enhancing the epic scope of the adventure.',
      },
      {
        reviewerName: 'Ethan Lewis',
        rating: 'Great', // Adjusted based on your rating options
        content: 'The parallel quests of the heroes add a dynamic layer to this exciting chapter. The narrative’s shift between the Underworld and the mortal world offers a fresh and engaging approach to the story, with well-crafted challenges and character interactions. The book balances intense action with moments of introspection, effectively advancing the plot and deepening the character arcs. Although some parts may feel a bit drawn out, the overall journey remains compelling and sets up promising developments for the series.',
      }
  
    ],
   "The Heroes of Olympus: The Blood of Olympus": [
    {
      reviewerName: 'Olivia Green',
      rating: 'Great', // Adjusted based on your rating options
      content: 'This thrilling conclusion to the series brings together all the elements that have built up throughout the saga. The final battle against the looming threat is filled with intense action and emotional highs. The character arcs are wrapped up satisfactorily, and the integration of both Greek and Roman mythology adds a rich layer to the resolution. The story successfully combines adventure and closure, delivering a memorable and impactful ending that ties up loose ends while providing a fitting conclusion to the epic journey.',
    },
    {
      reviewerName: 'Mason Turner',
      rating: 'Very Good', // Adjusted based on your rating options
      content: 'The climactic events unfold with a well-paced narrative that balances action with character development. The resolution of the central conflict is both dramatic and satisfying, showcasing the growth of the heroes and their final confrontation with the forces of chaos. While some elements may feel predictable, the overall execution is engaging and provides a strong finish to the series. The blend of mythological themes and personal stakes makes for an engrossing read that fans of the series will appreciate.',
    }
    ],
    "The Trials of Apollo: The Hidden Oracle": [
      {
        reviewerName: 'Sophia Martinez',
        rating: 'Great', // Adjusted based on your rating options
        content: 'The introduction of the Olympian god turned mortal brings a refreshing new perspective to the series. The quest to restore divine powers while dealing with personal vulnerabilities adds depth to the narrative. The story is well-paced with engaging character interactions and a blend of humor and adventure. The new challenges and mythological elements introduce exciting twists, setting the stage for further developments. Overall, it’s a compelling start to a new chapter in the world of Greek mythology.',
      },
      {
        reviewerName: 'Liam Thompson',
        rating: 'Very Good', // Adjusted based on your rating options
        content: 'The shift in focus to a fallen god navigating life as a mortal provides a unique and intriguing angle. The plot effectively combines humor, mystery, and adventure as the protagonist seeks to regain his powers. The book’s exploration of ancient oracles and new alliances keeps the story fresh and engaging. While some plot elements might feel familiar, the character-driven approach and mythological depth offer an enjoyable and promising beginning to the series.',
      }
    ],
    "The Trials of Apollo: The Dark Prophecy": [
      {
        reviewerName: 'Mia Johnson',
        rating: 'Excellent', // Adjusted based on your rating options
        content: 'This installment brilliantly continues the quest with high stakes and intriguing new revelations. The journey through Indianapolis and the encounter with the Triumvirate Holdings adds a fresh layer of danger and excitement. The balance of action, suspense, and character development is well-executed, making for a gripping read. The exploration of ancient secrets and the ongoing struggle to avert catastrophe keep readers thoroughly engaged, delivering a powerful continuation of the series.',
      },
      {
        reviewerName: 'Ethan Walker',
        rating: 'Great', // Adjusted based on your rating options
        content: "The story maintains a strong momentum with its dark and adventurous plot. The challenges faced by the characters in their search for the prophecy create an engaging narrative filled with tension and surprises. While the pacing may slow at times, the book/'s exploration of new mythological elements and character dynamics offers a compelling experience. The unfolding mysteries and escalating threats effectively set up future developments in the series.",
      }
    ],
    "The Trials of Apollo: The Burning Maze": [
      {
        reviewerName: 'Isabella Brown',
        rating: 'Excellent', // Adjusted based on your rating options
        content: 'This entry in the series delivers a compelling blend of danger and emotional depth. The quest through the Labyrinth introduces high-stakes challenges and showcases the characters’ growth in new and impactful ways. The balance between action and character development keeps the narrative engaging, while the intricate plot twists add to the suspense. The personal struggles and sacrifices made by the heroes enhance the story’s emotional resonance, making it a standout installment in the series.',
      },
      {
        reviewerName: 'Noah Davis',
        rating: 'Very Good', // Adjusted based on your rating options
        content: 'The story continues with intense challenges and an adventurous journey through the treacherous maze. The dynamic between the characters and their confrontations with formidable enemies drive the plot forward effectively. While some pacing issues might arise, the book’s exploration of new threats and character relationships keeps the narrative intriguing. Overall, it’s an engaging and well-crafted addition to the series that builds anticipation for future developments.',
      }
    ],
    "The Trials of Apollo: The Tyrant's Tomb": [
      {
        reviewerName: 'Ava Roberts',
        rating: 'Great', // Adjusted based on your rating options
        content: 'This installment delivers an exciting and suspenseful narrative as the characters confront new threats in Camp Jupiter. The story is filled with action-packed sequences and intricate plot twists that keep the reader engaged. The political intrigue and personal struggles of the protagonists add depth to the plot, making it a captivating read. The book effectively builds tension and sets up future conflicts, offering a strong continuation of the series.',
      },
      {
        reviewerName: 'Liam Carter',
        rating: 'Very Good', // Adjusted based on your rating options
        content: 'The adventure in this book is both thrilling and emotionally charged. The exploration of the Roman camp and the rise of a new threat provide a gripping backdrop for the characters’ development. While the pacing occasionally slows, the character dynamics and dramatic moments offer a compelling read. The book builds on previous events and sets the stage for the series’ conclusion with a well-crafted blend of action and personal stakes.',
      }
    ],
    "Percy Jackson: the Chalice of the Gods": [
      {
        reviewerName: 'Emily Clark',
        rating: 'Great', // Adjusted based on your rating options
        content: 'This new addition to the series is a thrilling adventure that captures the charm and excitement of the original books. The quest to retrieve a powerful artifact brings familiar characters together with fresh challenges and humorous moments. The blend of mythological elements and contemporary settings continues to deliver engaging and memorable experiences. Fans of the series will enjoy the new twists and character interactions that drive the story forward.',
      },
      {
        reviewerName: 'Jack Turner',
        rating: 'Very Good', // Adjusted based on your rating options
        content: 'The book provides a satisfying continuation with an entertaining quest and strong character dynamics. The adventure is filled with creative mythical encounters and the usual blend of humor and heroism. While some aspects of the plot may feel reminiscent of previous stories, the new challenges and character developments keep the narrative engaging. It’s a fun and nostalgic read that fits well within the series while offering new thrills.',
      }
    ],
    "Percy Jackson: the Wrath of the Triple Goddess": [
      //Releases on September 25th 2024
    ],
  };
  
  //pulling from the numbers so pick that books id number and place the review in that arrary
