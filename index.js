const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

  // test
let user =[
    {
        id: 1,
        name: "Kin",
        favoriteMovies: ["The Mummy"]
    },
    {
        id: 2,
        name: "Joe",
        favoriteMovies: ["Alien"]
    }
]
  let movies = [
    {
        "Title": "Alien",
        "Description": "The film follows the crew of the commercial space tug Nostromo, who, after coming across a mysterious derelict spaceship on an uncharted planetoid, find themselves up against a deadly and aggressive extraterrestrial loose within their vessel.",
        "Genre": {
            "Name":"Horror, Sci-Fi"
        },
        "Director": { 
            "Name":"Ridley Scott"
        },
    },
    {
        "Title": "Aliens",
        "Description": "Set in the far future, it stars Sigourney Weaver as Ellen Ripley, the sole survivor of an alien attack on her ship. When communications are lost with a human colony on the moon where her crew first saw the alien creatures, Ripley agrees to return to the site with a unit of Colonial Marines to investigate.",
        "Genre": {
            "Name":"Action, Adventure"
        },
        "Director": { 
            "Name":"James Cameron"
        },
    },
    {
        "Title": "The Mummy",
        "Description": "The film follows adventurer Rick O'Connell as he travels to Hamunaptra, the City of the Dead, with librarian Evelyn Carnahan and her older brother Jonathan, where they accidentally awaken Imhotep, a cursed high priest with supernatural powers.",
        "Genre": {
            "Name":"Action, Adventure, Horror"
        },
        "Director": { 
            "Name":"Stephen Sommers"
        },
    },
    {
        "Title": "Starship Troopers",
        "Description": "Set in the 23rd century, the story follows teenager Johnny Rico and his friends serving in the military of the United Citizen Federation, an Earth world government engaged in interstellar war with an alien species of Arachnids.",
        "Genre": {
            "Name":"Sci-Fi, Action"
        },
        "Director": { 
            "Name":"Paul Verhoeven"
        },
    },
    {
        "Title": "Battle: Los Angeles",
        "Description": "The story follows a Marine staff sergeant played by Aaron Eckhart who leads a platoon of U.S. Marines, joined by other stranded military personnel, defending Los Angeles from alien invasion.",
        "Genre": {
            "Name":"Action, Adventue, Sci-Fi"
        },
        "Director": { 
            "Name":"Jonathan Liebesman"
        },
    },
    {
        "Title": "The Last Voyage of the Demeter",
        "Description": "Its plot follows the doomed crew of the merchant ship Demeter led by Captain Elliot who attempt to survive the treacherous ocean voyage from Transylvania to London while being stalked by a legendary vampire known as Dracula.",
        "Genre": {
            "Name":"Fantasy, Horror"
        },
        "Director": { 
            "Name":"André Øvredal"
        },
    },
    {
        "Title": "Avatar",
        "Description": "It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium,[a] the room-temperature superconductor mineral. The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi, a humanoid species indigenous to Pandora.",
        "Genre": {
            "Name":"Action, Adventure, Sci-Fi"
        },
        "Director": { 
            "Name":"James Cameron"
        },
    },
    {
        "Title": "Dungeons & Dragons: Honor Among Thieves",
        "Description": "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.",
        "Genre": {
            "Name":"Adventure, Fantasy, Comedy"
        },
        "Director": { 
            "Name":"Jonathan Goldstein"
        },
    },
    {
        "Title": "Jurassic Park",
        "Description": "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        "Genre": {
            "Name":"Adventure"
        },
        "Director": { 
            "Name":"Steven Spielberg"
        },
    },
    {
        "Title": "The Thing",
        "Description": "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.",
        "Genre": {
            "Name":"Horror"
        },
        "Director": { 
            "Name":"John Carpenter"
        },
    },
];
// Express static function
app.use(express.static('public'));

// Middleware
app.use(morgan('common'));

// GET requests
app.get('/', (req, res) => {
    res.send('Welcome to my app!');
});
app.get('/documentation', (req, res) => {                  
    res.sendFile('public/documentation.html', { root: __dirname });
});
app.get('/movies', (req, res) => {
    res.json(movies);
});

// error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});

// Assignment 2.5

//Read
app.get('/movies',(req, res) => {
    res.status(200).json(movies);
})

//Read
app.get('/movies/:title', (req, res) =>{
    // const title = req.params.title;
    const {title} = req.params;
    const movies = movies.find (movie => movie.Title === title);

    if (movies) {
        res.status(200).json(movie);
    } else {
        res.status(400).send('no such movie')
    }
})

//Read
app.get('/movies/genre/:genreName', (req, res) =>{
    // const title = req.params.title;
    const {genreName} = req.params;
    const genre = movies.find (movie => 
            movie.Genre.Name === genreName).Genre;

    if (movies) {
        res.status(200).json(genre);
    } else {
        res.status(400).send('no such genre')
    }
})

//Read
app.get('/movies/directors/:directorName', (req, res) =>{
    // const title = req.params.title;
    const {directorName} = req.params;
    const director = movies.find (movie => 
            movie.Director.Name === directorName).Director;

    if (movies) {
        res.status(200).json(director);
    } else {
        res.status(400).send('no such director')
    }
})

// Create
app.post('/users', (req, res) => {
    const newUser = req.body;

    if (newUser.name) {
        newUser.id = uuid.v4();
        users.push(newUser);
        res.status(201).json(newUser)
    }else {
        res.status(400).send('users need names')
    }
})

// Update
app.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const updatedUser = req.body;

    let user = users.find(user => user.id == id);

    if (user) {
        user.name = updatedUser.name;
        res.status(200).json(user);
    }else {
        res.status(400).send('no such user')
    }
})

// Post
app.post('/users/:id/:movieTitle', (req, res) => {
    const {id, movieTitle} = req.params;

    let user = users.find(user => user.id == id);

    if (user) {
        user.favoriteMovies.push(movieTitle);
        res.status(200).send(`${movieTitle}has been added to user 
                ${id}'s array`);
    }else {
        res.status(400).send('no such user')
    }
})

// Delete
app.delete('/users/:id/:movieTitle', (req, res) => {
    const {id, movieTitle} = req.params;

    let user = users.find(user => user.id == id);

    if (user) {
        user.favoriteMovies = user.favoriteMovies.filter
            (title => title !== movieTitle);
        res.status(200).send(`${movieTitle}has been removed from user 
                ${id}'s array`);
    }else {
        res.status(400).send('no such user')
    }
})

// Delete
app.delete('/users/:id', (req, res) => {
    const {id} = req.params;

    let user = users.find(user => user.id == id);

    if (user) {
        users = users.filter (user => user.id != id);
        res.status(200).send(`user ${id} has been deleted`);
    }else {
        res.status(400).send('no such user')
    }
})
// localhost:8080/movies/Alien

// INSERT INTO Genres(Name, Description) VALUES('Sci-Fi', 'A genre of fiction that explores the impact of science, technology, and the future on society. It is a genre that often involves imaginative and futuristic concepts, such as advanced science, space travel, time travel, parallel dimensions, and alien life. Sci-fi stories can be set in the present, past, or future, and can be presented in various forms, including novels, films, television shows, and video games.');
// INSERT INTO Genres(Name, Description) VALUES('Horror', 'A type of fiction that aims to create feelings of fear, dread, disgust, and terror in the audience.');
// INSERT INTO Genres(Name, Description) VALUES('Action', 'A type of film, literature, or other media that emphasizes exciting action sequences, often featuring physical stunts, chases, fights, battles, and races.');
// INSERT INTO Genres(Name, Description) VALUES('Adventure', 'A thrilling and exciting type of fiction that typically features a protagonist who embarks on a perilous and often dangerous journey.');
// INSERT INTO Genres(Name, Description) VALUES('Fantasy', 'A literary genre that involves imaginative and unrealistic elements, often set in a fictional world or time period. It is a form of speculative fiction that explores the unknown, the supernatural, and the extraordinary. Fantasy stories typically involve magical or supernatural elements, such as magic, mythical creatures, and alternate realities.');
// INSERT INTO Genres(Name, Description) VALUES('Comedy', 'A genre of fiction that consists of discourses or works intended to be humorous or amusing by inducing laughter.');


// INSERT INTO Directors(Name, Bio, Birthyear) VALUES ('Ridley Scott', 'Ridley Scott is an English producer, writer, and director.', '1937-11-30');
// INSERT INTO Directors(Name, Bio, Birthyear) VALUES ('James Cameron', 'James Cameron is an Canadian producer, writer, and director.', '1954-08-16');
// INSERT INTO Directors(Name, Bio, Birthyear) VALUES ('Stephen Sommers', 'Stephen Sommers is an American producer, writer, and director.', '1962-03-20');
// INSERT INTO Directors(Name, Bio, Birthyear) VALUES ('Paul Verhoeven', 'Paul Verhoeven is an Dutch producer, writer, and director.', '1938-07-18');
// INSERT INTO Directors(Name, Bio, Birthyear) VALUES ('Jonathan Liebesman', 'Jonathan Liebesman is an South African producer, writer, and director.', '1976-09-15');
// INSERT INTO Directors(Name, Bio, Birthyear) VALUES ('André Øvredal', 'André Øvredal is a Norwegian film director and screenwriter.', '1973-05-06');
// INSERT INTO Directors(Name, Bio, Birthyear) VALUES ('Jonathan Goldstein', 'Jonathan Goldstein is an American-Canadian author, humorist and radio producer.', '1969-08-22');
// INSERT INTO Directors(Name, Bio, Birthyear) VALUES ('Steven Spielberg', 'Steven Spielberg is an American filmmaker.', '1946-12-18');
// INSERT INTO Directors(Name, Bio, Birthyear) VALUES ('John Carpenter', 'John Carpenter is an American filmmaker, composer, and actor.', '1948-01-16');

// INSERT INTO Movies(Title, Description, GenreID, DirectorID,ImageUrl,Featured) VALUES('Alien','The film follows the crew of the commercial space tug Nostromo, who, after coming across a mysterious derelict spaceship on an uncharted planetoid, find themselves up against a deadly and aggressive extraterrestrial loose within their vessel.',1,1,'png',True);
// INSERT INTO Movies(Title, Description, GenreID, DirectorID,ImageUrl,Featured) VALUES('Aliens','Set in the far future, it stars Sigourney Weaver as Ellen Ripley, the sole survivor of an alien attack on her ship. When communications are lost with a human colony on the moon where her crew first saw the alien creatures, Ripley agrees to return to the site with a unit of Colonial Marines to investigate.',3,2,'png',False);
// INSERT INTO Movies(Title, Description, GenreID, DirectorID,ImageUrl,Featured) VALUES('The Mummy','The film follows adventurer Rick OConnell as he travels to Hamunaptra, the City of the Dead, with librarian Evelyn Carnahan and her older brother Jonathan, where they accidentally awaken Imhotep, a cursed high priest with supernatural powers.',4,3,'png',False);
// INSERT INTO Movies(Title, Description, GenreID, DirectorID,ImageUrl,Featured) VALUES('Starship Troopers','Set in the 23rd century, the story follows teenager Johnny Rico and his friends serving in the military of the United Citizen Federation, an Earth world government engaged in interstellar war with an alien species of Arachnids.',3,4,'png',False);
// INSERT INTO Movies(Title, Description, GenreID, DirectorID,ImageUrl,Featured) VALUES('Battle: Los Angeles','The story follows a Marine staff sergeant played by Aaron Eckhart who leads a platoon of U.S. Marines, joined by other stranded military personnel, defending Los Angeles from alien invasion.',3,5,'png',False);
// INSERT INTO Movies(Title, Description, GenreID, DirectorID,ImageUrl,Featured) VALUES('The Last Voyage of the Demeter','Its plot follows the doomed crew of the merchant ship Demeter led by Captain Elliot who attempt to survive the treacherous ocean voyage from Transylvania to London while being stalked by a legendary vampire known as Dracula.',2,6,'png',False);
// INSERT INTO Movies(Title, Description, GenreID, DirectorID,ImageUrl,Featured) VALUES('Avatar','It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium,[a] the room-temperature superconductor mineral. The expansion of the mining colony threatens the continued existence of a local tribe of Navi, a humanoid species indigenous to Pandora.',1,2,'png',False);
// INSERT INTO Movies(Title, Description, GenreID, DirectorID,ImageUrl,Featured) VALUES('Dungeons & Dragons: Honor Among Thieves','A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a lost relic, but things go dangerously awry when they run afoul of the wrong people.',5,7,'png',False);
// INSERT INTO Movies(Title, Description, GenreID, DirectorID,ImageUrl,Featured) VALUES('Jurassic Park','A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the parks cloned dinosaurs to run loose.',4,8,'png',False);
// INSERT INTO Movies(Title, Description, GenreID, DirectorID,ImageUrl,Featured) VALUES('The Thing','A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.',2,9,'png',False);

// INSERT INTO Genres(Name, Description) VALUES('Thriller', 'Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience.');
// INSERT INTO Directors(Name, Bio, Birthyear, Deathyear) VALUES('Jonathan Demme', 'Robert Jonathan Demme was an American director, producer, and screenwriter.', '1944-01-01', '2017-01-01');
// INSERT INTO Movies(Title, Description, GenreID, DirectorID,ImageUrl,Featured) VALUES('Silence of the Lambs','A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',7,10,'silenceofthelambs.png',False);

// INSERT INTO users(username, password, email, birth_date) VALUES ('joe', 'swordfish', 'joe.le@gmail.com', '1936-12-07');
// INSERT INTO users(username, password, email, birth_date) VALUES ('tim', 'owlbear', 'tim.birch@gmail.com', '2003-08-12');
// INSERT INTO users(username, password, email, birth_date) VALUES ('sandy', 'seasnake', 'sandy.may@gmail.com', '1995-7-28');

// INSERT INTO user_movies(userid, movieid) VALUES ('1', '8');
// INSERT INTO user_movies(userid, movieid) VALUES ('2', '5');
// INSERT INTO user_movies(userid, movieid) VALUES ('3', '3');
