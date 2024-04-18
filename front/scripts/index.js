const getMovies = require("./functions");
const axios = require("axios");

//? Con async/await
const fetchMovies = async () => {
  try {
    const movies = await axios.get("http://localhost:3000/movies");
    getMovies(movies.data);
  } catch (error) {
    alert("Error al cargar las películas");
  }
};

//? Con promesas
// const fetchMovies = () => {
//   axios.get("https://students-api.up.railway.app/movies")
//   .then((response) => {
//     getMovies(response.data);
//   })
//   .catch((error) => {
//     alert("Error al cargar las películas");
//   })
// }

fetchMovies();
// $.get("https://students-api.up.railway.app/movies", (movies) => {
//   getMovies(movies);
// }).fail(() => alert("Error al traer las películas"));
