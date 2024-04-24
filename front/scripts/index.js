const { getMovies } = require("./functionsIndex");
const axios = require("axios");

const fetchMovies = async () => {
  try {
    const movies = await axios.get("http://localhost:3000/movies");
    getMovies(movies.data);
  } catch (error) {
    alert("Error al cargar las películas");
  }
};

fetchMovies();
