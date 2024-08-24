//Creating a array of Rick Roirdan Percy Jackson and the Olympians book series
const mongoose = require('mongoose')

const bookSeed = [
  {
      
      title: "Percy Jackson: Lightning Thief",
      releaseYear: 2005,
      series: "Percy Jackson and the Olympains",
      cover: "",
      summary: "Percy Jackson, a twelve-year-old who discovers he's a demigod, the son of Poseidon. After learning about his heritage and being accused of stealing Zeus’s lightning bolt, Percy embarks on a quest to find the bolt and prevent a war among the gods. Joined by his friends Annabeth Chase, daughter of Athena, and Grover, a satyr, Percy navigates a world of Greek mythology brought to life, confronts various mythical creatures, and uncovers startling truths about his own identity. Through his journey, Percy learns about friendship, bravery, and his role in the world of gods and monsters.",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  },
  {
      
      title: "Percy Jackson: The Sea of Monsters",
      releaseYear: 2006, 
      series: "Percy Jackson and the Olympains",
      cover: "",
      summary: "Percy Jackson, who discovers that his friend Grover, the satyr, is in danger. Grover has been captured by the monstrous Titan Kronos and is being held in the Sea of Monsters, which is also known as the Bermuda Triangle. Percy, along with his friends Annabeth Chase and Tyson, his half-brother who is a Cyclops, embarks on a perilous journey to rescue Grover and retrieve the Golden Fleece. The Fleece has the power to heal and protect their home, Camp Half-Blood, which is under threat from a growing evil. During their quest, they face various challenges, including encounters with dangerous creatures and rival demigods. Through bravery and teamwork, Percy and his friends confront new dangers and uncover secrets about their past and the looming threat of Kronos. The story explores themes of loyalty, family, and the struggle between good and evil.",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  
  },
  {
      
      title: "Percy Jackson: Titan's Curse",
      releaseYear: 2007,
      series: "Percy Jackson and the Olympains",
      cover: "",
      summary: "Percy Jackson embarks on a new quest with his friends Annabeth and Grover. They are joined by the goddess Artemis, who has gone missing along with her Hunter, Thalia Grace. The group must navigate perilous obstacles and battle mythical creatures to find Artemis and prevent the Titan Atlas from rising to power. As they confront these dangers, Percy uncovers more about his own fate and the ominous prophecy that could shape the future of the gods.",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  },
  
  {
    
      title: "Percy Jackson: Battle of the Labyrinth",
      releaseYear: 2008,
      series: "Percy Jackson and the Olympains",
      cover: "",
      summay: "Percy Jackson faces a summer of escalating danger as he learns that the ancient Labyrinth, a magical maze, is being exploited by the Titan army to invade Camp Half-Blood and attack Mount Olympus. To thwart this threat, Percy, along with Annabeth, Grover, and the Cyclops Tyson, embarks on a perilous quest through the ever-shifting Labyrinth. Their journey is fraught with deadly traps and mythical creatures, and they must find Daedalus, the maze's creator, to stop the invasion. As they uncover secrets about the Labyrinth and their own destinies, they confront formidable challenges that test their bravery and teamwork. The adventure builds to a dramatic battle to protect their camp and set the stage for the impending conflict with the Titan Kronos.",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  },
  {
      
      title: "Percy Jackson: The Last Olympian",
      releaseYear: 2009,
      series: "Percy Jackson and the Olympains",
      cover: "",
      summary: "Percy Jackson faces his most critical challenge as the prophecy foretold in his youth comes to fruition. With Kronos and his Titan army poised to attack Mount Olympus, Percy leads the demigods in a desperate battle to defend New York City and the heart of the Olympian realm. As the conflict escalates, Percy grapples with his role in the prophecy, the true nature of his powers, and his destiny. Allies are tested, betrayals are revealed, and crucial decisions must be made. The story culminates in a climactic confrontation that will determine the fate of the gods and the future of the world, with Percy discovering his own strength and the power of sacrifice.",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  },
  {
      
      title: "The Heroes of Olympus: The Lost Hero",
      releaseYear: 2010,
      series: "The Heroes of Olympus",
      cover: "",
      summary: "Jason Grace, Piper McClean, and Leo Valdez. Jason wakes up with no memory of his past and discovers he is a demigod with a mysterious connection to the Roman side of the ancient pantheon. Alongside Piper, who has the power of charmspeak, and Leo, a skilled mechanic with the ability to control fire, Jason embarks on a quest to rescue the kidnapped goddess Hera. The journey takes them to the ancient lands and pits them against formidable enemies, uncovering secrets about their own identities and the looming threat of the Titan giant, Porphyrion. As they confront challenges and forge bonds, they uncover deeper mysteries tied to the prophecy that hints at a greater conflict involving both Greek and Roman gods.",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  },
  {
    
      title: "The Heroes of Olympus: Son of Neptune",
      releaseYear: 2011,
      series: "The Hereos of Olympus",
      cover: "",
      summary: "Percy Jackson, who has lost his memory and is living among the Roman demigods at Camp Jupiter. Percy, along with two new friends—Hazel Levesque, a demigod with the power to control the dead, and Frank Zhang, a demigod with shape-shifting abilities—embarks on a dangerous quest to free the Greek goddess of the hunt, Artemis, who is being held captive by the giant Alcyoneus. As they journey through the wilderness and face various mythical challenges, they uncover clues about a prophecy that will affect both the Greek and Roman worlds. Their mission is critical in preventing the rise of the giant king, who poses a significant threat to the safety of the demigods and the gods themselves.",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  },
  {
      title: "The Heroes of Olympus: The Mark of Athena",
      releaseYear: 2012,
      series: "The Hereos of Olympus",
      cover: "",
      summary: "The seven demigod heroes finally coming together as the Greek and Roman demigods unite. Annabeth Chase, now traveling with Percy Jackson and the other demigods, is on a critical quest to follow the Mark of Athena, a prophetic sign that leads to the lost statue of the goddess Athena. The statue is crucial for preventing the rise of the earth goddess Gaea and her army of giants. As the group navigates treacherous trials and confronts powerful enemies in ancient Rome, they face internal conflicts and dangerous traps set by Gaea's minions. The quest tests their bravery, loyalty, and friendship, leading up to a dramatic showdown that will determine the fate of both the Greek and Roman worlds. ",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  },
  {
      title: "The Heroes of Olympus: The House of Hades",
      releaseYear: 2013,
      series: "The Hereos of Olympus",
      cover: "",
      summary: " The story continues with the demigod heroes on two parallel quests. Percy Jackson and Annabeth Chase are trapped in the Underworld, trying to find a way to escape and reach the mortal world. Meanwhile, their friends—Hazel Levesque, Frank Zhang, Piper McLean, and Leo Valdez—are on a mission to close the Doors of Death from the mortal side, which involves navigating through the dangerous lands of the ancient Greek and Roman monsters. As they face formidable challenges and encounter both allies and enemies, their actions are crucial in preventing the awakening of the earth goddess Gaea. The journey brings them closer to understanding their roles in the prophecy and the impending threat to both their worlds.",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  },
  {
      title: "The Heroes of Olympus: The Blood of Olympus",
      releaseYear: 2014,
      series: "The Hereos of Olympus",
      cover: "",
      summary: "The story culminates with the heroes of both Camp Half-Blood and Camp Jupiter joining forces to prevent the rise of the earth goddess Gaea. As they approach the final battle, the demigods must thwart Gaea's plan to awaken and overthrow the Olympian gods. Percy Jackson, Annabeth Chase, and their friends—along with new allies—face a series of intense challenges, including a climactic confrontation with Gaea's army. Leo Valdez plays a pivotal role with his newfound powers, while the group navigates treacherous landscapes and encounters formidable monsters. The book brings the series to a dramatic conclusion, revealing the true nature of the prophecy and the sacrifices required to ensure the survival of both the Greek and Roman worlds.",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  },
  {
      title: "The Trials of Apollo: The Hidden Oracle",
      releaseYear: 2016,
      series: "The Trials of Apollo",
      cover: "",
      summary: "Apollo, the Olympian god of the sun, who has been cast down from his divine realm and turned into a mortal teenager named Lester Papadopoulos as punishment by Zeus. Struggling with his new human vulnerabilities, Apollo must find a way to regain his godly powers and restore his place among the Olympian gods. To do so, he teams up with a demigod named Meg McCaffrey and her loyal protector, and together they embark on a quest to locate the ancient oracles that have been hidden or destroyed. Their journey leads them to Camp Half-Blood, where they uncover a sinister plot involving the ancient Titan, Python, and the fate of the oracles. As Apollo grapples with his new reality and learns more about himself, he must confront various mythical challenges and forge new alliances to prevent a looming catastrophe. ",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  },
  {
      title: "The Trials of Apollo: The Dark Prophecy",
      releaseYear: 2017,
      series: "The Trials of Apollo",
      cover: "",
      summary: 'Apollo, still in his mortal form as Lester Papadopoulos, continues his quest with demigod Meg McCaffrey. They travel to Indianapolis in search of the "Dark Prophecy" and enter the dangerous "Cave of Trophonius" to uncover ancient secrets. They face mythical dangers and confront the Triumvirate Holdings, a powerful enemy faction, while Apollo struggles with his mortal condition and seeks to prevent a looming threat to both the mortal and divine worlds.',
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  },
  {
      title: "The Trials of Apollo: The Burning Maze",
      releaseYear: 2018,
      series: "The Trials of Apollo",
      cover: "",
      summary: "Apollo (still in his mortal form as Lester Papadopoulos) and his demigod friend Meg McCaffrey continue their quest to restore Apollo's godly status and thwart the rise of ancient chaos. They journey to the Labyrinth to rescue the demigod and former friend, Leo Valdez, who has been captured by the deadly sorceress, Medea. As they navigate the treacherous maze and battle against powerful enemies, they face intense challenges and unravel crucial prophecies. Meanwhile, Apollo grapples with his own vulnerabilities and seeks to protect his friends while uncovering more about the dark forces threatening both the mortal and divine realms.",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  },
  {
      title: "The Trials of Apollo: The Tyrant's Tomb",
      releaseYear: 2019,
      series: "The Trials of Apollo",
      cover: "",
      summary: " Apollo (still in his mortal form as Lester Papadopoulos) and his friends—Meg McCaffrey, the Hunters of Artemis, and the remaining demigods—head to Camp Jupiter in San Francisco to confront a looming threat. They discover that the Roman camp is in peril, with the evil emperor Commodus rising to power. Apollo must navigate political intrigue, battle fearsome enemies, and uncover hidden secrets to protect his friends and prevent the empire from falling into chaos. As the stakes grow higher, Apollo faces personal challenges and struggles with his role in the prophecy, all while trying to thwart the sinister plans of the Triumvirate Holdings.",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  },
  {
      title: "Percy Jackson: the Chalice of the Gods",
      releaseYear: 2023,
      series: "Percy Jackson and the Olympains",
      cover: "",
      summary: "Percy Jackson is about to start his senior year of high school and hopes for a normal life, but his plans are interrupted when he is tasked with retrieving the mythical Chalice of the Gods, a powerful artifact that has gone missing. Alongside his friends Annabeth Chase and Grover Underwood, Percy embarks on a quest that leads them across various mythological challenges and locations. They must navigate ancient prophecies, confront powerful monsters, and unravel a mystery that threatens both the mortal and divine worlds. As Percy deals with the demands of his heroic life and his upcoming future, he faces both new and familiar challenges that test his strength and resolve.",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  },
  {
      title: "Percy Jackson: the Wrath of the Triple Goddess",
      releaseYear: 2024,
      series: "Percy Jackson and the Olympains",
      cover: "",
      summary: "Percy and his companions face a new threat from the Triple Goddess—Hecate, the goddess of magic and witchcraft. The plot revolves around a prophecy or ancient curse related to the Triple Goddess that endangers both the mortal and divine realms. As Percy navigates this new challenge, he and his friends must undertake a perilous quest to stop the wrath of the Triple Goddess and prevent impending disaster. This fan fiction explores themes of heroism and mythology in the style of the original series.",
      reviews: [
        {
          type: mongoose.Schema.ObjectId,
          ref: "reviews",
        },
      ],
  }
]

module.exports = bookSeed