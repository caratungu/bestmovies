const {Movie, Repository} = require("./models");

function rotar(container) {
    container.classList.toggle('flipped');
}

const repo = new Repository();

// Recibe la información de una Película en el Array y la convierte a elementos de HTML
function movieHTML (movie) {
    const {id, title, year, director, duration, genre, rate, poster} = movie;

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
function moviesHTML () {
    const divCardsContainer = document.getElementsByClassName("divCardsContainer")[0];
    divCardsContainer.innerHTML = "";
    const allMovies = repo.getAllMovies();
    const allMoviesHTML = allMovies.map((movie) => movieHTML(movie));
    allMoviesHTML.forEach((element) => {
        divCardsContainer.appendChild(element);
    });
}

const getMovies = (movies) => {
    for (let i = 0; i < movies.length; i++) {
        const {title, year, director, duration, genre, rate, poster} = movies[i];
        repo.createMovie(title, year, director, duration, genre, rate, poster);
    
        moviesHTML();
    } 
}

$.get('https://students-api.up.railway.app/movies', getMovies).fail(()=>alert('Error al traer las películas'));