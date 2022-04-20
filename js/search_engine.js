"use strict"

import { films } from "./data_base/films_base.js";
import { createFilmDiv } from "./fill_content.js";
import { deleteContent } from "./delete_content.js";

const input = document.getElementById("input");

const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms));
};

const checkForEmptyString = (data) => {
  if (data.trim() === "") {
    return false;
  } else {
    return true;
  }
};

const searchForCoincidences = (data) => {
  const coincidences = [];
  for (let i = 0; i < films.length; i++) {
    if (data === films[i].name.substr(0, data.length).toLowerCase()) {
      coincidences.push(films[i]);
    }
  }
  return coincidences;
};

async function showCoincidences() {
  let data = null;

  await delay(100).then(() => {
    data = document.getElementById("input").value;
  });

  if (!checkForEmptyString(data))  {
    deleteContent("search-div");
    return;
  }
  
  deleteContent("search-div");
  createFilmDiv("search-div", searchForCoincidences(data));
};

const preventDefaultWrap = (event) => {
  if (event.which == 13 || event.KeyCode == 13) {
    event.preventDefault();
  }
  showCoincidences();
};

input.addEventListener("keydown", preventDefaultWrap);