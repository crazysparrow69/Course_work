"use strict"

import { page } from "./data_base/page.js";
import { popup } from "./modal_window.js";
import { series } from "./data_base/series_base.js";
import { createFilmDiv } from "./fill_content.js";

const buttonProfile = document.getElementById("button-profile");

const openProfile = () => {
  if (page.status === "logged") return window.location.href = "/html/profile.html";
  popup("Вы не вошли в аккаунт");
};

buttonProfile.addEventListener("click", openProfile);

createFilmDiv("series1-div", series);