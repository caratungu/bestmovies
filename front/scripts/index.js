const { getMovies, preview, cleanFields, addMovie } = require("./functions");
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

const preBtn = document.querySelector("#preview");
preBtn.addEventListener("click", preview);

const clnBtn =document.querySelector("#cleanFields");
clnBtn.addEventListener("click", cleanFields);

const addBtn =document.querySelector("#agregar");
addBtn.disabled = true;
addBtn.addEventListener("click", addMovie);