"use strict"

// Import users' data base
import { users } from "./data_base/users.js";

// Get links
const signInButton = document.getElementById("button-sign-in");
const registrationForm = document.getElementById("registration-form");
const register = document.getElementById("register");
const closeRegister = document.getElementById("close-register");
const cover = document.getElementById("cover");
const help = document.getElementById("help");
const hint = document.getElementById("hint");
const helpText = document.getElementById("help-text");
const loginForm = document.getElementById("login-form");
const login = document.getElementById("login");

// Show/hide elements
const showCover = () => cover.style.display = "block";
const hideCover = () => cover.style.display = "none";
const showLoginForm = () => loginForm.style.display = "block";
const hideLoginForm = () => loginForm.style.display = "none";
const showRegistrationForm = () => registrationForm.style.display = "block";
const hideRegistrationForm = () => registrationForm.style.display = "none";
const showHelp = () => helpText.style.display = "block";
const HideHelp = () => helpText.style.display = "none";
const darkenButton = () => {
  registerButton.style.backgroundColor = "#5d0960";
  registerButton.style.boxShadow = "none";
};

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
}

// Hide all elements
const endProcess = () => {
  if (cover.style.display = "block") hideCover();
  if (loginForm.style.display = "block") hideLoginForm();
  if (registrationForm.style.display = "block") hideRegistrationForm();
};

// Instruments //////////////////////////////////////////////
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "<", ">", ",", ".", "/", "?", "|", "~", "`", " "];

const findUserInDB = (name) => { 
  for(const user of users) if(name === user.name) return user; 
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

// Local storage //////////////////////////////////////////
const saveToLocalStorage = (obj) => localStorage.setItem(obj.name, JSON.stringify(obj));

const removeFromLocalStorage = (name) => {
  if (typeof(name) != "string") name.toString();
  localStorage.removeItem(name);
};

const changeUserStatusInLS = (name, status) => {
  const user = JSON.parse(localStorage.getItem(name));
  user.status = status;
  removeFromLocalStorage(name);
  saveToLocalStorage(user);
};

// Registration ///////////////////////////////////////////
///////////////////////////////////////////////////////////

const registerButton = document.getElementById("register-button");
const registerName = document.getElementById("register-name");
const registerPassword = document.getElementById("register-password");
const registerRepass = document.getElementById("register-repassword");

// Create new user ////////////////////////////////////////
class User {
  constructor(options) {
    this.type = options.type;
    this.name = options.name;
    this.password = options.password;
    this.status = options.status;
  }
};

const newUser = (type, name, password, status) => {
  users.push(
    new User({
      type: type,
      name: name,
      password: password,
      status: status,
    })
  );
};

// Check name for validity //////////////////////////////////
const checkNameForExistance = (name) => {
  if (findUserInDB(name)) return false;
  return true
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

// Check password for validity ////////////////////////////////
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
    popup("Wrong number of symbols in password")
    return false;
  } else if (!checkPassForLetters(password)) {
    popup("Password must include at least 1 numeral, 1 lowercase and 1 uppercase letters");
    return false;
  } else if (!checkForInvalidSymbols(password)) {
    popup("Invalid symbols in password")
    return false;
  } else if (!checkRepassword(password, repassword)) {
    popup("Passwords are not the same");
    return false;
  } 
  return true;
};

// Registration process ////////////////////////////////////////
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

registerButton.addEventListener("click", registration);

// Sign-in ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

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
  
  user.status = "logged-in";
  changeUserStatusInLS(user.name, "logged-in");
  popup("Вы вошли в аккаунт");
  console.log(users); 
};

loginButton.addEventListener("click", signIn);

// Modal window ////////////////////////////////////////////////
const modalWindow = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const DELAY_TIME1 = 2000;
const DELAY_TIME2 = 500;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function showPopup(str) {
  popupText.innerHTML = str;
  modalWindow.style.animationName = "popup";
  modalWindow.style.display = "block";
};
  
async function hidePopup() {
  modalWindow.style.animationName = "popdown";
  await delay(DELAY_TIME2);
  modalWindow.style.display = "none";
};

async function popup(str) {
  showPopup(str);
  await delay(DELAY_TIME1).then(hidePopup);
};


hint.addEventListener("mouseover", showHelp);
hint.addEventListener("mouseout", HideHelp);
signInButton.addEventListener("click", showForm);
register.addEventListener("click", startRegistration);
login.addEventListener("click", startLogin);
closeLogin.addEventListener("click", endProcess);
closeRegister.addEventListener("click", endProcess);