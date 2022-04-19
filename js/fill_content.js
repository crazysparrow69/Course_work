"use strict"

import {films} from "./data_base/films_base.js";

export const createFilmDiv = (divClass, array) => {
  const div = document.getElementById(divClass);
  console.log(array)

  for (let i = 0; i < array.length; i++) {
    const filmDiv = document.createElement("div");
    const img = document.createElement("img");
    const button = document.createElement("button");
    const title = document.createElement("p");
    const year = document.createElement("p");

    filmDiv.classList.add("film-div");
    year.id = "p-year";

    img.src = array[i].img;
    button.innerHTML = "В избранное!★";
    title.innerHTML = array[i].name;
    year.innerHTML = array[i].year;

    div.appendChild(filmDiv);
    filmDiv.appendChild(img);
    filmDiv.appendChild(button);
    filmDiv.appendChild(title);
    filmDiv.appendChild(year);
  }
};

createFilmDiv("films-div", films);