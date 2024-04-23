const { preview, cleanFields, addMovie } = require("./functions");

const preBtn = document.querySelector("#preview");
preBtn.addEventListener("click", preview);

const clnBtn =document.querySelector("#cleanFields");
clnBtn.addEventListener("click", cleanFields);

const addBtn =document.querySelector("#agregar");
addBtn.disabled = true;
addBtn.addEventListener("click", addMovie);