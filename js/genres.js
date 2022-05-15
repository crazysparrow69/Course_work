"use strict"

// Import code from other files
import { films } from "./data_base/films_base.js";
import { series } from "./data_base/series_base.js";
import { createFilmDiv } from "./fill_content.js";
import { deleteContent } from "./delete_content.js";

// Filtrating 
const filter = (genre) => {
  const coincidences = [];

  for (const film of films) {
    if (genre === film.genre) coincidences.push(film);
  }
  for (const serial of series) {
    if (genre === serial.genre) coincidences.push(serial);
  }
  
  return coincidences;
};

// Show all coincidences
const showCoincidences = (event) => {
  const genre = event.target.innerHTML;

  deleteContent("search-div");
  createFilmDiv("search-div", filter(genre))
}

// Add event listeners to buttons
document.getElementById("detective").addEventListener("click", showCoincidences);
document.getElementById("drama").addEventListener("click", showCoincidences);
document.getElementById("history").addEventListener("click", showCoincidences);
document.getElementById("comedy").addEventListener("click", showCoincidences);
document.getElementById("adventures").addEventListener("click", showCoincidences);
document.getElementById("games").addEventListener("click", showCoincidences);
document.getElementById("genres").addEventListener("click", showCoincidences);