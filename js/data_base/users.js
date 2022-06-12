/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
export const users = [];

const findUsersInLS = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const obj = JSON.parse(localStorage.getItem(key));
    if (obj.type === 'user') {
      if (typeof (obj.chosens) !== 'object') obj.chosens = JSON.parse(obj.chosens);
      users.push(obj);
    }
  }
};

class User {
  constructor(options) {
    this.type = options.type;
    this.name = options.name;
    this.password = options.password;
    this.status = options.status;
    this.date = options.date;
    this.avatar = null;
    this.films = [];
    this.chosens = [];
  }
}

const getDate = () => {
  const date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let day = date.getDate();
  let month = date.getMonth();
  const year = date.getFullYear();

  if (hours < 10) hours = `0${hours}`;
  if (min < 10) min = `0${min}`;
  if (sec < 10) sec = `0${sec}`;
  if (month < 10) month = `0${month}`;
  if (day < 10) day = `0${day}`;

  const fullDate = `${hours}:${min}:${sec} ${day}.${month}.${year}`;
  return fullDate;
};

export const newUser = (type, name, password, status) => {
  users.push(
    new User({
      type,
      name,
      password,
      status,
      date: getDate(),
    }),
  );
};

findUsersInLS();
