"use strict"

import { users } from "./js/data_base/users.js";
import { films } from "./js/data_base/films_base.js";
import { series } from "./js/data_base/series_base.js";
import { createFilmDiv } from "./js/fill_content.js";

// Object that stores data about the page
const page = {
  status: "not-logged",
  user: null,
};

// Check for users that are logged in
const checkForLoggedIn = () => {
  for (const user of users) if (user.status === "logged-in") {
    page.status = "logged";
    page.user = user;
  }
};

// Button
const buttonProfile = document.getElementById("button-profile");

const openProfile = () => {
  if (page.status === "logged") return window.location.href = "/html/test.html";
  console.log("you are not logged in");
};

buttonProfile.addEventListener("click", openProfile);


checkForLoggedIn();
console.log(page);
createFilmDiv("films-div", films);
createFilmDiv("series-div", series);