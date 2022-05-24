"use strict"

export const users = [];

const findUsersInLS = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const obj = JSON.parse(localStorage.getItem(key));
    if (obj.type === "user") users.push(obj);
  }
};

class User {
  constructor(options) {
    this.type = options.type;
    this.name = options.name;
    this.password = options.password;
    this.status = options.status;
  }
}

export const newUser = (type, name, password, status) => {
  users.push(
    new User({
      type: type,
      name: name,
      password: password,
      status: status,
    })
  );
};

findUsersInLS();
console.log(users);