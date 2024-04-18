const axios = require("axios");

class Movie {
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
  getMovies: async (req, res) => {
    try {
      const movies = await axios.get("https://students-api.up.railway.app/movies");
      let position = 0;
      for(let movie of movies.data) {
        const { title, year, director, duration, genre, rate, poster } = movie;
        const newMovie = new Movie (title, year, director, duration, genre, rate, poster);
        allMovies[position]=newMovie;
        position++;
      };
      return allMovies;
      res.status(200).json(movies.data);
    } catch (error) {
      alert("Error al cargar las películas");
    }
  },

  createMovie: async(title, year, director, duration, genre, rate, poster) => {
    const newMovie = new Movie(title, year, director, duration, genre, rate, poster);
    allMovies.push(newMovie);
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