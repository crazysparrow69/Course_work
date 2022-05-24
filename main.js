"use strict"

import { page } from "./js/data_base/page.js";
import { popup } from "./js/modal_window.js";
import { films } from "./js/data_base/films_base.js";
import { series } from "./js/data_base/series_base.js";
import { createFilmDiv } from "./js/fill_content.js";

// Button
const buttonProfile = document.getElementById("button-profile");

const openProfile = () => {
  if (page.status === "logged") return window.location.href = "/html/test.html";
  popup("Вы не вошли в аккаунт")
};

buttonProfile.addEventListener("click", openProfile);

createFilmDiv("films-div", films);
createFilmDiv("series-div", series);