"use strict"

import { createFilmDiv } from "./fill_content.js";
import { series } from "./data_base/series_base.js";
import { films } from "./data_base/films_base.js";
import { page } from "./data_base/page.js";
import { changeUserPropertyInLS } from "./forms.js";

const testFilms = [
  {
    name :'Трон: Наследие',
    genre:'Игры',
    img:'/img/films/throne.jpg',
    year:'2010',
 },
 {
    name :'Warcraft: Начало',
    genre:'Игры',
    img:'/img/films/warcraft.jpg',
    year:'2016',
 },
 {
    name :'Пиксели',
    genre:'Игры',
    img:'/img/films/pixels.jpg',
    year:'2015',
 },
 {
    name :'Скрытые фигуры',
    genre:'История',
    img:'/img/films/hidden_figures.jpg',
    year:'2016',
 },
];

createFilmDiv("recent-films", testFilms);
createFilmDiv("chosen-films", testFilms)

// Load user's data ///////////////////////////////////
function loadNickname() {
  const nickname = document.getElementById("nickname");
  nickname.innerHTML = page.user.name;
}

function loadRegistrationDate() {
  const registrationDate = document.getElementById("registration-date");
  registrationDate.innerHTML = "Зарегистрирован " + page.user.date;
}

function loadAvatar() {
  const avatar = document.getElementById("avatar");
  avatar.src = page.user.avatar;
}

function loadData () {
  loadNickname();
  loadRegistrationDate();
  loadAvatar();
}

loadData();

// Avatars ////////////////////////////////////////////
const avatars = document.getElementById("avatars");
const changeAvatarButton = document.getElementById("change-avatar");
const img1 = document.getElementById("avatars");

const showAvatars = () => avatars.style.display = "block";
const hideAvatars = () => avatars.style.display = "none";

function checkAvatars() {
  if (avatars.style.display === "block") {
    hideAvatars();
    return;
  }
  showAvatars();
}

function parseLink(str) {
  const arr = str.split("/");
  return "/img/avatars/" + arr[arr.length - 1];
}

function changeAvatar(event) {
  changeUserPropertyInLS(page.user.name, "avatar", parseLink(event.target.src));
  window.location.reload();
}

changeAvatarButton.addEventListener("click", checkAvatars);
img1.addEventListener("click", changeAvatar);