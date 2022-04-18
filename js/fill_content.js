"use strict"

import {films} from "./data_base/films_base.js";

const createFilmDiv = () => {
  const div = document.getElementById("films-div");

  for (let i = 0; i < films.length; i++) {
    const filmDiv = document.createElement("div");
    const img = document.createElement("img");
    const button = document.createElement("button");
    const title = document.createElement("p");
    const year = document.createElement("p");

    filmDiv.classList.add("film-div");
    year.id = "p-year";

    img.src = films[i].img;
    button.innerHTML = "В избранное!★";
    title.innerHTML = films[i].name;
    year.innerHTML = films[i].year;

    div.appendChild(filmDiv);
    filmDiv.appendChild(img);
    filmDiv.appendChild(button);
    filmDiv.appendChild(title);
    filmDiv.appendChild(year);
  }
};

createFilmDiv();