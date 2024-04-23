const { Movie, Repository } = require("./clases");
const axios = require('axios');

function rotar(container) {
  container.classList.toggle("flipped");
}

const repo = new Repository();

// Recibe la información de una Película en el Array y la convierte a elementos de HTML
function movieHTML(movie) {
  const { id, title, year, director, duration, genre, rate, poster } = movie;

  const newH2_1 = document.createElement("h2");
  const newImg = document.createElement("img");
  const newP = document.createElement("p");

  newH2_1.innerHTML = title;
  newImg.src = poster;
  newP.innerHTML = "Rate: " + rate;

  const newH2_2 = document.createElement("h2");
  const newUl = document.createElement("ul");
  const newLi_1 = document.createElement("li");
  const newLi_2 = document.createElement("li");
  const newLi_3 = document.createElement("li");
  const newLi_4 = document.createElement("li");

  newH2_2.innerHTML = title;
  newLi_1.innerHTML = "Año: " + year;
  newLi_2.innerHTML = "Director: " + director;
  newLi_3.innerHTML = "Duración: " + duration;
  newLi_4.innerHTML = "Género: " + genre.join(" - ");

  const newDiv_1 = document.createElement("div");
  const newDiv_2 = document.createElement("div");
  const newDiv_3 = document.createElement("div");

  newDiv_1.appendChild(newDiv_2);
  newDiv_2.appendChild(newH2_1);
  newDiv_2.appendChild(newImg);
  newDiv_2.appendChild(newP);

  newDiv_1.appendChild(newDiv_3);
  newDiv_3.appendChild(newH2_2);
  newDiv_3.appendChild(newUl);
  newUl.appendChild(newLi_1);
  newUl.appendChild(newLi_2);
  newUl.appendChild(newLi_3);
  newUl.appendChild(newLi_4);

  newDiv_1.classList.add("containerMovie");
  newDiv_1.id = "container";
  newDiv_1.onclick = function () {
    rotar(this);
  };

  newDiv_2.classList.add("content");

  newDiv_3.classList.add("content");
  newDiv_3.id = "contentB";

  newImg.classList.add("poster");
  newH2_1.classList.add("mx-3");
  newH2_2.classList.add("mx-3");

  return newDiv_1;
}

// Obtiene el arreglo de actividades y lo convierte a elementos de HTML - addToDOM
function moviesHTML() {
  const divCardsContainer =
    document.getElementsByClassName("divCardsContainer")[0];
  divCardsContainer.innerHTML = "";
  const allMovies = repo.getAllMovies();
  const allMoviesHTML = allMovies.map((movie) => movieHTML(movie));
  allMoviesHTML.forEach((element) => {
    divCardsContainer.appendChild(element);
  });
}

function getMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    const { title, year, director, duration, genre, rate, poster } = movies[i];
    repo.createMovie(title, year, director, duration, genre, rate, poster);

    moviesHTML();
  }
}

function preview() {
  const getInputValue = (id) => document.getElementById(id).value;
  const inputFields = {
    inputTitle: getInputValue('inputTitle'),
    inputUrl: getInputValue('inputUrl'),
    inputRate: getInputValue('inputRate'),
    inputYear: getInputValue('inputYear'),
    inputDirector: getInputValue('inputDirector'),
    inputDuration: getInputValue('inputDuration'),
  };
  
  const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Sci-fi"];
  const isChecked = (id) => document.getElementById(id).checked;
  const selectedGenres = genres.filter((genre) => isChecked(`input${genre}`));

  const missingInput = Object.values(inputFields).some(value => !value) || selectedGenres.length === 0;
  if (missingInput) {
    alert("Falta completar información");
    return;
  }

  const setElementText = (id, text) => document.getElementById(id).textContent = text;
  setElementText("inpTitle", inputFields.inputTitle);
  setElementText("inpTitle2", inputFields.inputTitle);
  setElementText("inpRate", `Rate: ${inputFields.inputRate}`);
  setElementText("inpYear", `Año: ${inputFields.inputYear}`);
  setElementText("inpDirector", `Director: ${inputFields.inputDirector}`);
  setElementText("inpGenre", "Género: " + selectedGenres.join(" - "));
  setElementText("inpDuration", `Duración: ${inputFields.inputDuration}`);

  document.getElementById("inpImg").src = inputFields.inputUrl;

  const div1 = document.getElementById("container");
  div1.onclick = function () {
    rotar(this);
  };

  document.getElementById("agregar").disabled = false;

}

function cleanFields() {
  document.getElementById("inpTitle").textContent = "";
  document.getElementById("inpImg").src = "";
  document.getElementById("inpRate").textContent = "";
  document.getElementById("inpTitle2").textContent = "";
  document.getElementById("inpYear").textContent = "";
  document.getElementById("inpDirector").textContent = "";
  document.getElementById("inpDuration").textContent = "";
  document.getElementById("inpGenre").textContent = "";
  document.getElementById("agregar").disabled = true;
}

function addMovie() {
  const getInputValue = (id) => document.getElementById(id).value;
  const inputFields = {
    inputTitle: getInputValue('inputTitle'),
    inputUrl: getInputValue('inputUrl'),
    inputRate: getInputValue('inputRate'),
    inputYear: getInputValue('inputYear'),
    inputDirector: getInputValue('inputDirector'),
    inputDuration: getInputValue('inputDuration'),
  };
  
  const isChecked = (id) => document.getElementById(id).checked;
  const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Sci-fi"];
  const selectedGenres = genres.filter(genre => isChecked(`input${genre}`));
  
  const newMovie = {
    title: inputFields.inputTitle,
    year: inputFields.inputYear,
    director: inputFields.inputDirector,
    duration: inputFields.inputDuration,
    genre: selectedGenres,
    rate: inputFields.inputRate,
    poster: inputFields.inputUrl,
  };
  
  const postMovie = async () => {
    try {
      await axios.post("http://localhost:3000/movies", newMovie);
      alert("Película cargada exitosamente");
    } catch (error) {
      alert("Error al agregar la película");
    }
  };

  postMovie();

}

module.exports = {
  getMovies,
  preview,
  cleanFields,
  addMovie
};
