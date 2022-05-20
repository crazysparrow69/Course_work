"use strict"

export const users = [];

const addUser = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const obj = JSON.parse(localStorage.getItem(key));
    if (obj.type === "user") users.push(obj);
  }
};

addUser();
console.log(users);