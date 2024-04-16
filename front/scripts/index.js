const getMovies = require("./functions");
const axios = require("axios");

const fetchMovies = async () => {
  try {
    const movies = await axios.get("https://students-api.up.railway.app/movies");
    getMovies(movies.data);
  } catch (error) {
    alert("Error al cargar las películas");
  }
};

fetchMovies();
// $.get("https://students-api.up.railway.app/movies", (movies) => {
//   getMovies(movies);
// }).fail(() => alert("Error al traer las películas"));
