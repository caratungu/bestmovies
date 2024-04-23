const Movie = require('../models/Movie')

class MovieC {
    constructor (title, year, director, duration, genre, rate, poster) {
      if (!title || !poster || !director) {
        return res.status(400).json({
          error: "Información incompleta",
        });
      } else {
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
      }
    };
}


module.exports = {
  getMovies: async () => {
    const allMovies = [];
    const movies = await Movie.find();
    let position = 0;
    for(let movie of movies) {
        const { title, year, director, duration, genre, rate, poster } = movie;
        const newMovie = new MovieC (title, year, director, duration, genre, rate, poster);
        allMovies[position]=newMovie;
        position++;
    };
    return allMovies;
    // res.status(200).json(movies.data);
  },

  createMovie: async(title, year, director, duration, genre, rate, poster) => {
    const newMovie = new MovieC(title, year, director, duration, genre, rate, poster);
    const addMovie = await Movie.create(newMovie);
    return addMovie;
  }
};

// {
//     "title": "Deadpool",
//     "year": 2016,
//     "director": "Tim Miller",
//     "duration": "1h 48min",
//     "genre": ["Action", "Superheros", "Sci-Fi", "Comedy"],
//     "rate": 7.2,
//     "poster": "https://m.media-amazon.com/images/I/71bh8V7ApFL.jpg"
//   }

// {
//     "title": "Harry Poter y la Piedra Filosofal",
//     "year": 2001,
//     "director": "Chris Columbus",
//     "duration": "2h 39min",
//     "genre": ["Adventure", "Fantasy"],
//     "rate": 8.4,
//     "poster": "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg"
//   }

// {
//     "title": "Harry Potter y la Cámara Secreta",
//     "year": 2002,
//     "director": "Chris Columbus",
//     "duration": "2h 54min",
//     "genre": ["Adventure", "Fantasy"],
//     "rate": 8.7,
//     "poster": "https://es.web.img3.acsta.net/pictures/14/04/30/11/50/167156.jpg"
//   }

// {
//     "title": "Harry Potter y el Prisionero de Azkaban",
//     "year": 2004,
//     "director": "Alfonso Cuarón",
//     "duration": "2h 21min",
//     "genre": ["Adventure", "Fantasy"],
//     "rate": 9.1,
//     "poster": "https://pics.filmaffinity.com/Harry_Potter_y_el_prisionero_de_Azkaban-876411525-mmed.jpg"
//   }