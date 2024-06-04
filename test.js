  var movie1 = {
    Title: 'Alien',
    Description: 'The film follows the crew of the commercial space tug Nostromo, who, after coming across a mysterious derelict spaceship on an uncharted planetoid, find themselves up against a deadly and aggressive extraterrestrial loose within their vessel.',
    Genre: {
      Name: 'Sci-Fi',
      Description: 'A genre of fiction that explores the impact of science, technology, and the future on society. It is a genre that often involves imaginative and futuristic concepts, such as advanced science, space travel, time travel, parallel dimensions, and alien life. Sci-fi stories can be set in the present, past, or future, and can be presented in various forms, including novels, films, television shows, and video games.'
    },
    Director: {
      Name: 'Ridley Scott',
      Bio: 'Ridley Scott is an English producer, writer, and director.',
      Birth: '1937',
      Death: '0000'
    },
    ImagePath: 'png',
    Featured: true
  }

  db.movies.insertOne(movie1)
///
  var movie2 = {
    Title: 'Aliens',
    Description: 'Set in the far future, it stars Sigourney Weaver as Ellen Ripley, the sole survivor of an alien attack on her ship. When communications are lost with a human colony on the moon where her crew first saw the alien creatures, Ripley agrees to return to the site with a unit of Colonial Marines to investigate.',
    Genre: {
      Name: 'Action',
      Description: 'A type of film, literature, or other media that emphasizes exciting action sequences, often featuring physical stunts, chases, fights, battles, and races.'
    },
    Director: {
      Name: 'James Cameron',
      Bio: 'James Cameron is an Canadian producer, writer, and director.',
      Birth: '1954',
      Death: '0000'
    },
    ImagePath: 'png',
    Featured: false
  }
  
  db.movies.insertOne(movie2)
////
  var movie3 = {
    Title: 'The Mummy',
    Description: 'The film follows adventurer Rick O\'Connell as he travels to Hamunaptra, the City of the Dead, with librarian Evelyn Carnahan and her older brother Jonathan, where they accidentally awaken Imhotep, a cursed high priest with supernatural powers.',
    Genre: {
      Name: 'Adventure',
      Description: 'A thrilling and exciting type of fiction that typically features a protagonist who embarks on a perilous and often dangerous journey.'
    },
    Director: {
      Name: 'Stephen Sommers',
      Bio: 'Stephen Sommers is an American producer, writer, and director.',
      Birth: '1962',
      Death: '0000'
    },
    ImagePath: 'png',
    Featured: false
  }
  
  db.movies.insertOne(movie3)
///
  var movie4 = {
    Title: 'Starship Troopers',
    Description: 'Set in the 23rd century, the story follows teenager Johnny Rico and his friends serving in the military of the United Citizen Federation, an Earth world government engaged in interstellar war with an alien species of Arachnids.',
    Genre: {
      Name: 'Action',
      Description: 'A type of film, literature, or other media that emphasizes exciting action sequences, often featuring physical stunts, chases, fights, battles, and races.'
    },
    Director: {
      Name: 'Paul Verhoeven',
      Bio: 'Paul Verhoeven is an Dutch producer, writer, and director.',
      Birth: '1938',
      Death: '0000'
    },
    ImagePath: 'png',
    Featured: false
  }
  
  db.movies.insertOne(movie4)
////
  var movie5 = {
    Title: 'Battle: Los Angeles',
    Description: 'The story follows a Marine staff sergeant played by Aaron Eckhart who leads a platoon of U.S. Marines, joined by other stranded military personnel, defending Los Angeles from alien invasion.',
    Genre: {
      Name: 'Action',
      Description: 'A type of film, literature, or other media that emphasizes exciting action sequences, often featuring physical stunts, chases, fights, battles, and races.'
    },
    Director: {
      Name: 'Jonathan Liebesman',
      Bio: 'Jonathan Liebesman is an South African producer, writer, and director.',
      Birth: '1976',
      Death: '0000'
    },
    ImagePath: 'png',
    Featured: false
  }
  
  db.movies.insertOne(movie5)
////
  var movie6 = {
    Title: 'The Last Voyage of the Demeter',
    Description: 'Its plot follows the doomed crew of the merchant ship Demeter led by Captain Elliot who attempt to survive the treacherous ocean voyage from Transylvania to London while being stalked by a legendary vampire known as Dracula.',
    Genre: {
      Name: 'Horror',
      Description: 'A type of fiction that aims to create feelings of fear, dread, disgust, and terror in the audience.'
    },
    Director: {
      Name: 'André Øvredal',
      Bio: 'André Øvredal is a Norwegian film director and screenwriter.',
      Birth: '1973',
      Death: '0000'
    },
    ImagePath: 'png',
    Featured: false
  }
  
  db.movies.insertOne(movie6)
////
  var movie7 = {
    Title: 'Avatar',
    Description: 'It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium,[a] the room-temperature superconductor mineral. The expansion of the mining colony threatens the continued existence of a local tribe of Na\'vi, a humanoid species indigenous to Pandora.',
    Genre: {
      Name: 'Sci-Fi',
      Description: 'A genre of fiction that explores the impact of science, technology, and the future on society. It is a genre that often involves imaginative and futuristic concepts, such as advanced science, space travel, time travel, parallel dimensions, and alien life. Sci-fi stories can be set in the present, past, or future, and can be presented in various forms, including novels, films, television shows, and video games.'
    },
    Director: {
      Name: 'James Cameron',
      Bio: 'James Cameron is an Canadian producer, writer, and director.',
      Birth: '1954',
      Death: '0000'
    },
    ImagePath: 'png',
    Featured: false
  }
  
  db.movies.insertOne(movie7)
///
  var movie8 = {
    Title: 'Dungeons & Dragons: Honor Among Thieves',
    Description: 'A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.',
    Genre: {
      Name: 'Fantasy',
      Description: 'A literary genre that involves imaginative and unrealistic elements, often set in a fictional world or time period. It is a form of speculative fiction that explores the unknown, the supernatural, and the extraordinary. Fantasy stories typically involve magical or supernatural elements, such as magic, mythical creatures, and alternate realities.'
    },
    Director: {
      Name: 'Jonathan Goldstein',
      Bio: 'Jonathan Goldstein is an American-Canadian author, humorist and radio producer.',
      Birth: '1969',
      Death: '0000'
    },
    ImagePath: 'png',
    Featured: false
  }
  
  db.movies.insertOne(movie8)
////
var movie9 = {
  Title: 'Jurassic Park',
  Description: 'A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park\'s cloned dinosaurs to run loose.',
  Genre: {
    Name: 'Adventure',
    Description: 'A thrilling and exciting type of fiction that typically features a protagonist who embarks on a perilous and often dangerous journey.'
  },
  Director: {
    Name: 'Steven Spielberg',
    Bio: 'Steven Spielberg is an American filmmaker.',
    Birth: '1946',
    Death: '0000'
  },
  ImagePath: 'png',
  Featured: false
}
  
  db.movies.insertOne(movie9)
////
  var movie10 = {
    Title: 'The Thing',
    Description: 'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.',
    Genre: {
      Name: 'Horror',
      Description: 'A type of fiction that aims to create feelings of fear, dread, disgust, and terror in the audience.'
    },
    Director: {
      Name: 'John Carpenter',
      Bio: 'John Carpenter is an American filmmaker, composer, and actor.',
      Birth: '1948',
      Death: '0000'
    },
    ImagePath: 'png',
    Featured: false
  }
  
  db.movies.insertOne(movie10)