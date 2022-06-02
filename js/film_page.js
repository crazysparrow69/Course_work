"use strict"

import { page } from "./data_base/page.js";
import { addFilmToUserInLS } from "./films_actions.js";
import { popup } from "./modal_window.js";

let film = null;

function findFilmInLS() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const obj = JSON.parse(localStorage.getItem(key));
    if (obj.type !== "user") {
      film = obj;
    }
  }
}

function loadAvatar() {
  const avatar = document.getElementById("avatar");
  avatar.src = film.img;
}

function loadTitle() {
  const title = document.getElementById("title");
  title.innerHTML = film.name;
}

function loadYear() {
  const year = document.getElementById("year");
  year.innerHTML = film.year;
}

function loadGenre() {
  const genre = document.getElementById("genre");
  genre.innerHTML = film.genre;
}

function removeFilmFromLS() {
  const key = film.name;
  localStorage.removeItem(key);
}

function func() {
  findFilmInLS();
  loadAvatar();
  loadTitle();
  loadYear();
  loadGenre();
  removeFilmFromLS();
}

func();

// Open profile ///////////////////////////////////////////////////////////////////
const buttonProfile = document.getElementById("button-profile");

const openProfile = () => {
  if (page.status === "logged") return window.location.href = "/html/profile.html";
  popup("Вы не вошли в аккаунт");
};

buttonProfile.addEventListener("click", openProfile);

// Add film to chosens /////////////////////////////////////////////////////
document.getElementById("chosens-button").addEventListener("click", () => { 
  addFilmToUserInLS(page.user.name, "chosens", film.name);
  addFilmToUserInLS(page.user.name, "films", film.name); 
  popup("Фильм добавлен в избранное");
})