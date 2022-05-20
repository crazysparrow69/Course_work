"use strict"

import { users } from "./data_base/users.js";

const div = document.querySelector(".div-header");

export const createButton = () => {
  const button = document.createElement("button");
  button.id = "button-sign-in";
  button.innerHTML = "ВОЙТИ";
  div.appendChild(button);
};

export const deleteButton = () => {
  const button = document.getElementById("button-sign-in");
  div.removeChild(button);
};

export const createProfileName = (name) => {
  const p = document.createElement("p");
  p.id = "button-sign-out";
  p.innerHTML = "Выйти из аккаунта: " + name;
  div.appendChild(p);
};

export const deleteProfileName = () => {
  const p = document.getElementById("button-sign-out");
  div.removeChild(p);
};

const checkForLoggedIn = () => {
  createButton();
  for (const user of users) {
    if (user.status = "logged-in") {
      deleteButton();
      createProfileName(user.name);
    } 
  }
};

checkForLoggedIn();