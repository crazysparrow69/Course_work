"use strict"

// Import code from other files
import { films } from "./data_base/films_base.js";
import { series } from "./data_base/series_base.js";
import { createFilmDiv } from "./fill_content.js";
import { deleteContent } from "./delete_content.js";

// Get link of the input
const input = document.getElementById("input");

// Make artificial delay
const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms));
};

// Check data for empty string
const checkForEmptyString = (data) => {
  if (data.trim() === "") {
    return false;
  } else {
    return true;
  }
};

// Look for coincidences in films and series "data bases"
const searchForCoincidences = (data) => {
  const coincidences = [];
  for (let i = 0; i < films.length; i++) {
    if (data.toLowerCase() === films[i].name.substr(0, data.length).toLowerCase()) {
      coincidences.push(films[i]);
    }
  }
  for (let i = 0; i < series.length; i++) {
    if (data.toLowerCase() === series[i].name.substr(0, data.length).toLowerCase()) {
      coincidences.push(series[i]);
    }
  }
  return coincidences;
};

// Show all coincidences
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

// Prevent opening new window when pressing Enter
const preventDefaultWrap = (event) => {
  if (event.which == 13 || event.KeyCode == 13) {
    event.preventDefault();
  }
  showCoincidences();
};

// Add event listener to input
input.addEventListener("keydown", preventDefaultWrap);