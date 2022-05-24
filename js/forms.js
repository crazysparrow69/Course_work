"use strict";

// Import
import { users } from "./data_base/users.js";
import { popup } from "./modal_window.js";
import { newUser } from "./data_base/users.js";

// Get links ///////////////////////////////////////////////////
const registrationForm = document.getElementById("registration-form");
const register = document.getElementById("register");
const closeRegister = document.getElementById("close-register");
const cover = document.getElementById("cover");
const help = document.getElementById("help");
const hint = document.getElementById("hint");
const helpText = document.getElementById("help-text");
const loginForm = document.getElementById("login-form");
const login = document.getElementById("login");

// Show/hide elements ///////////////////////////////////////////////
const showCover = () => (cover.style.display = "block");
const hideCover = () => (cover.style.display = "none");
const showLoginForm = () => (loginForm.style.display = "block");
const hideLoginForm = () => (loginForm.style.display = "none");
const showRegistrationForm = () => (registrationForm.style.display = "block");
const hideRegistrationForm = () => (registrationForm.style.display = "none");
const showHelp = () => (helpText.style.display = "block");
const HideHelp = () => (helpText.style.display = "none");

// Show form
const showForm = () => {
  showCover();
  showLoginForm();
};

// Show all elements for registration
const startRegistration = () => {
  hideLoginForm();
  showRegistrationForm();
};

// Show all elements for login
const startLogin = () => {
  hideRegistrationForm();
  showLoginForm();
};

// Hide all elements
const endProcess = () => {
  if ((cover.style.display = "block")) hideCover();
  if ((loginForm.style.display = "block")) hideLoginForm();
  if ((registrationForm.style.display = "block")) hideRegistrationForm();
};

// Create button for signing-in or text with logged-in user ///////////
const div = document.querySelector(".div-header");

const createButton = () => {
  const button = document.createElement("button");
  button.id = "button-sign-in";
  button.innerHTML = "ВОЙТИ";
  div.appendChild(button);
};

const deleteButton = () => {
  const button = document.getElementById("button-sign-in");
  div.removeChild(button);
};

const createProfileName = (name) => {
  const p = document.createElement("p");
  p.id = "button-sign-out";

  if (name.length > 8) {
    name = name.substring(0, 5) + "...";
  }

  p.innerHTML = "Выйти из аккаунта: " + name;
  div.appendChild(p);
};

const deleteProfileName = () => {
  const p = document.getElementById("button-sign-out");
  div.removeChild(p);
};

const checkForLoggedIn = () => {
  createButton();
  for (const user of users) {
    if (user.status === "logged-in") {
      deleteButton();
      createProfileName(user.name);
      popup("Вы вошли в аккаунт");
    }
  }
};

checkForLoggedIn();
const buttonSignOut = document.getElementById("button-sign-out");
const signInButton = document.getElementById("button-sign-in");

try {
  buttonSignOut.addEventListener("click", signOut);
} catch (e) {
  console.log(e);
}

try {
  signInButton.addEventListener("click", showForm);
} catch (e) {
  console.log(e);
}

// Instruments //////////////////////////////////////////////////////
const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
  "<",
  ">",
  ",",
  ".",
  "/",
  "?",
  "|",
  "~",
  "`",
  " ",
];

const findUserInDB = (name) => {
  for (const user of users) if (name === user.name) return user;
  return false;
};

const checkNumOfSymbols = (str, min, max) => {
  if (str.length < min || str.length > max) return false;
  return true;
};

const checkForInvalidSymbols = (str) => {
  for (const symbol of symbols) {
    if (str.split(symbol).length > 1) return false;
  }
  return true;
};

// Local storage ////////////////////////////////////////////////////
const saveToLocalStorage = (obj) =>
  localStorage.setItem(obj.name, JSON.stringify(obj));

const removeFromLocalStorage = (name) => {
  if (typeof name != "string") name.toString();
  localStorage.removeItem(name);
};

const changeUserPropertyInLS = (name, property, newValue) => {
  const user = JSON.parse(localStorage.getItem(name));
  user[property] = newValue;
  removeFromLocalStorage(name);
  saveToLocalStorage(user);
};

// Registration ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
const registerButton = document.getElementById("register-button");
const registerName = document.getElementById("register-name");
const registerPassword = document.getElementById("register-password");
const registerRepass = document.getElementById("register-repassword");

// Check name for validity /////////////////////////////////////////
const checkNameForExistance = (name) => {
  if (findUserInDB(name)) return false;
  return true;
};

const checkName = (name) => {
  if (!checkNumOfSymbols(name, 2, 20)) {
    popup("Wrong number of symbols in name");
    return false;
  } else if (!checkNameForExistance(name)) {
    popup("This name already exists");
    return false;
  } else if (!checkForInvalidSymbols(name)) {
    popup("Invalid symbols in name");
    return false;
  }
  return true;
};

// Check password for validity /////////////////////////////////////
const checkPassForLetters = (password) => {
  let counterU = 0;
  let counterL = 0;
  let counterN = 0;

  for (let i = 0; i < password.length; i++) {
    if (!parseInt(password[i], 10)) {
      if (password[i] === password[i].toUpperCase()) counterU++;
      else counterL++;
    } else {
      counterN++;
    }
  }
  if (counterU < 1 || counterL < 1 || counterN < 1) return false;
  return true;
};

const checkRepassword = (password, repassword) => {
  if (!(password === repassword)) return false;
  return true;
};

const checkPassword = (password, repassword) => {
  if (!checkNumOfSymbols(password, 8, 50)) {
    popup("Wrong number of symbols in password");
    return false;
  } else if (!checkPassForLetters(password)) {
    popup(
      "Password must include at least 1 numeral, 1 lowercase and 1 uppercase letters"
    );
    return false;
  } else if (!checkForInvalidSymbols(password)) {
    popup("Invalid symbols in password");
    return false;
  } else if (!checkRepassword(password, repassword)) {
    popup("Passwords are not the same");
    return false;
  }
  return true;
};

// Registration process /////////////////////////////////////////////
const registration = (event) => {
  event.preventDefault();

  const name = registerName.value;
  const password = registerPassword.value;
  const repassword = registerRepass.value;

  if (!checkName(name)) {
    console.log("wrong name");
    return;
  } else if (!checkPassword(password, repassword)) {
    console.log("wrong password");
    return;
  }

  newUser("user", name, password, "registered");
  saveToLocalStorage(findUserInDB(name));
  popup("Вы успешно зарегистрированы!");
  console.log(users);
};

hint.addEventListener("mouseover", showHelp);
hint.addEventListener("mouseout", HideHelp);
login.addEventListener("click", startLogin);
closeRegister.addEventListener("click", endProcess);
registerButton.addEventListener("click", registration);

// Sign-in ///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
const loginButton = document.getElementById("login-button");
const loginName = document.getElementById("login-name");
const loginPassword = document.getElementById("login-password");
const closeLogin = document.getElementById("close-login");

const checkUserPassword = (password, userPassword) => {
  if (password === userPassword) return true;
  return false;
};

const signIn = (event) => {
  event.preventDefault();

  const name = loginName.value;
  const password = loginPassword.value;
  const user = findUserInDB(name);

  if (!user) {
    popup("Неверное имя!");
    return;
  } else if (!checkUserPassword(password, user.password)) {
    popup("Неверный пароль!");
    return;
  }

  deleteButton();
  createProfileName(name);

  user.status = "logged-in";
  changeUserPropertyInLS(name, "status", "logged-in");
  window.location.reload();
  console.log(users);
};

register.addEventListener("click", startRegistration);
closeLogin.addEventListener("click", endProcess);
loginButton.addEventListener("click", signIn);

// Sign-out ////////////////////////////////////////////////////////////
const findSignedInUser = () => {
  for (const user of users) if (user.status === "logged-in") return user;
  return false;
};

function signOut(event) {
  event.preventDefault();

  const signedInUser = findSignedInUser();
  signedInUser.status = "registered";
  changeUserPropertyInLS(signedInUser.name, "status", "registered");

  window.location.reload();
}