const getMovies = require('./functions');

$.get('https://students-api.up.railway.app/movies', (movies) => {getMovies(movies)}).fail(()=>alert('Error al traer las películas'));