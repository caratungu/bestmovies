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

let allMovies = [];

module.exports = {
  getMovies: async () => {
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
    allMovies.push(newMovie);
    return addMovie;
  }
};

// {
//     "title": "Deadpool",
//     "year": 2016,
//     "director": "Tim Miller",
//     "duration": "No se",
//     "genre": ["Action", "Superheros", "Sci-Fi", "Comedy"],
//     "rate": 7.2,
//     "poster": "https://m.media-amazon.com/images/I/71bh8V7ApFL.jpg"
//   }