"use strict"

import { changeUserPropertyInLS } from "./forms.js";
import { page } from "./data_base/page.js";
import { films } from "./data_base/films_base.js";
import { series } from "./data_base/series_base.js";

const filmContainers = document.querySelectorAll(".film-div");

for (const filmContainer of filmContainers) {
  filmContainer.addEventListener("click", func)
}

function addFilmToUserInLS(name, property, film) {
  const user = JSON.parse(localStorage.getItem(name));
  let arr = user[property];

  if(typeof(user[property]) !== "object") arr = JSON.parse(user[property]);

  for (const elem of arr) if (elem === film) return;

  arr.push(film);
  changeUserPropertyInLS(name, property, JSON.stringify(arr));
}

function func(event) {
  if (event.srcElement.localName === "button") {
    const filmId = parseInt(event.target.id, 10);
    for (const film of films) {
      if (film.id === filmId) {
        addFilmToUserInLS(page.user.name, "chosens", film.name);
        page.user.chosens.push(film.name);
        return;
      }
    }
    for (const serial of series) {
      if (serial.id === filmId) {
        addFilmToUserInLS(page.user.name, "chosens", serial.name);
        page.user.chosens.push(film.name);
      }
    }
  }
}