"use strict"

import { page } from "./data_base/page.js";

function deleteFilmFromLS() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const obj = JSON.parse(localStorage.getItem(key));
    if (obj.type !== "user") {
      localStorage.removeItem(key);
    }
  }
}

deleteFilmFromLS();
console.log(page.film);