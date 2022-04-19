"use strict"

import { films } from "./data_base/films_base.js";
import { createFilmDiv } from "./fill_content.js";
import { deleteContent } from "./delete_content.js";

const input = document.getElementById("input");

const getData = () => { 
  const data = input.value.toLowerCase();
  return data;
};

const searchForCoincidences = () => {
  const coincidences = [];
  const data = getData();

  for (let i = 0; i < films.length; i++) {
    if (data === films[i].name.substr(0, data.length).toLowerCase()) {
      coincidences.push(films[i]);
    }
  }

  console.log(coincidences);
  return coincidences;
};

const showCoincidences = (event) => {
  if (event.which == 13 || event.KeyCode == 13) {
    event.preventDefault();
    const coincidences = searchForCoincidences();
    deleteContent("search-div");
    createFilmDiv("search-div", coincidences);
  }
  
}

input.addEventListener("keypress", showCoincidences);
