class Movie {
    constructor (id, title, year, director, duration, genre, rate, poster) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    };
};

class Repository {
    constructor () {
        this.movies = [];
        this.id = 0;
    };

    createMovie (title, year, director, duration, genre, rate, poster) {
        this.id++;
        let movie = new Movie (this.id, title, year, director, duration, genre, rate, poster);
        this.movies.push(movie);
    };

    getAllMovies () {
        return this.movies;
    };

    deleteMovie (id) {
        this.movies.forEach((movie) => {
            if (movie.id = id) {
                let index = this.movies.indexOf(movie);
                this.movies.splice(index,1);
            };
        });
    };
};

module.exports = {
    Movie,
    Repository
}