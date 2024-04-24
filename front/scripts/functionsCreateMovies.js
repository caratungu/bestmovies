const axios = require("axios");
const { rotar } = require("./functionsGeneral");
const { validateForm } = require("./validateForm");
const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Sci-fi"];

function addGenresCheck() {
  const fieldset = document.getElementById("inputGenres");
  fieldset.innerHTML = "";

  const newLegend = document.createElement("legend");
  newLegend.classList.add("pb-4");
  newLegend.classList.add("fw-bold");
  newLegend.textContent = "Genre";

  fieldset.appendChild(newLegend);

  for (let genre of genres) {
    const newDiv = document.createElement("div");
    const newInput = document.createElement("input");
    const newLabel = document.createElement("label");

    newDiv.classList.add("form-check");
    newDiv.classList.add("form-check-inline");

    newInput.classList.add("form-check-input");
    newInput.type = "checkbox";
    newInput.id = `input${genre}`;
    newInput.value = genre;

    newLabel.classList.add("form-check-label");
    newLabel.classList.add("fs-4");
    newLabel.for = `input${genre}`;
    newLabel.textContent = genre;

    fieldset.appendChild(newDiv);
    newDiv.appendChild(newInput);
    newDiv.appendChild(newLabel);
  }
}

function preview() {
  const getInputValue = (id) => document.getElementById(id).value;
  const inputFields = {
    inputTitle: getInputValue("inputTitle"),
    inputUrl: getInputValue("inputUrl"),
    inputRate: getInputValue("inputRate"),
    inputYear: getInputValue("inputYear"),
    inputDirector: getInputValue("inputDirector"),
    inputDuration: getInputValue("inputDuration"),
  };

  const isChecked = (id) => document.getElementById(id).checked;
  const selectedGenres = genres.filter((genre) => isChecked(`input${genre}`));

  if (validateForm(inputFields, selectedGenres) === "error") {
    return;
  };

  const setElementText = (id, text) => (document.getElementById(id).textContent = text);
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
    inputTitle: getInputValue("inputTitle"),
    inputUrl: getInputValue("inputUrl"),
    inputRate: getInputValue("inputRate"),
    inputYear: getInputValue("inputYear"),
    inputDirector: getInputValue("inputDirector"),
    inputDuration: getInputValue("inputDuration"),
  };

  const isChecked = (id) => document.getElementById(id).checked;
  const selectedGenres = genres.filter((genre) => isChecked(`input${genre}`));

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
  preview,
  cleanFields,
  addMovie,
  addGenresCheck,
};
