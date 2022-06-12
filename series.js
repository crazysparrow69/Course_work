"use strict"

import { page } from "./js/data_base/page.js";
import { popup } from "./js/modal_window.js";
import { series } from "./js/data_base/series_base.js";
import { createFilmDiv } from "./js/fill_content.js";

const buttonProfile = document.getElementById("button-profile");

const openProfile = () => {
  if (page.status === "logged") return window.location.href = "/html/profile.html";
  popup("Вы не вошли в аккаунт");
};

buttonProfile.addEventListener("click", openProfile);

createFilmDiv("series1-div", series);