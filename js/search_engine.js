"use strict";

// Import code from other files
import { films } from "./data_base/films_base.js";
import { series } from "./data_base/series_base.js";
import { createFilmDiv } from "./fill_content.js";
import { deleteContent } from "./delete_content.js";

// Get link of the input
const input = document.getElementById("input");

// Const for magic numbers
const DELAY_TIME = 100;
const ENTER_KEYCODE = 13;

// Make artificial delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Check data for empty string
const checkForEmptyString = (data) => {
  if (data.trim() === "") return false;
  return true;
};

// Look for coincidences in films and series "data bases"
const searchForCoincidences = (data) => {
  const coincidences = [];
  for (let i = 0; i < films.length; i++) {
    if (films[i].name.toLowerCase().startsWith(data.toLowerCase())) {
      coincidences.push(films[i]);
    }
    if (series[i].name.toLowerCase().startsWith(data.toLowerCase())) {
      coincidences.push(series[i]);
    }
  }
  return coincidences;
};

// Show all coincidences
async function showCoincidences() {
  let data = null;

  await delay(DELAY_TIME).then(() => {
    data = document.getElementById("input").value;
  });

  if (!checkForEmptyString(data)) {
    deleteContent("search-div");
    return;
  }

  deleteContent("search-div");
  createFilmDiv("search-div", searchForCoincidences(data));
}

// Prevent opening new window when pressing Enter
const preventDefaultWrap = (event) => {
  if (event.which === ENTER_KEYCODE || event.KeyCode === ENTER_KEYCODE) {
    event.preventDefault();
  }
  showCoincidences();
};

// Add event listener to input
input.addEventListener("keydown", preventDefaultWrap);

// Reload the page when pressing logo
document
  .getElementById("logo")
  .addEventListener("click", () => window.location.reload());