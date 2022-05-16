"use strict"

// Get links
const signInButton = document.getElementById("button-sign-in");
const loginForm = document.getElementById("login-form");
const login = document.getElementById("login");
const loginButton = document.getElementById("login-button");
const loginName = document.getElementById("login-name");
const loginPassword = document.getElementById("login-password");
const closeLogin = document.getElementById("close-login");
const registrationForm = document.getElementById("registration-form");
const register = document.getElementById("register");
const registerButton = document.getElementById("register-button");
const registerName = document.getElementById("register-name");
const registerPassword = document.getElementById("register-password");
const registerRepass = document.getElementById("register-repassword");
const closeRegister = document.getElementById("close-register");
const cover = document.getElementById("cover");

// Show/hide elements
const showCover = () => cover.style.display = "block";
const hideCover = () => cover.style.display = "none";
const showLoginForm = () => loginForm.style.display = "block";
const hideLoginForm = () => loginForm.style.display = "none";
const showRegistrationForm = () => registrationForm.style.display = "block";;
const hideRegistrationForm = () => registrationForm.style.display = "none";

// Show all elements for login
const showForm = () => {
  showCover();
  showLoginForm();
};

// Show all elements for registration
const startRegistration = () => {
  hideLoginForm();
  showRegistrationForm();
};

const startLogin = () => {
  hideRegistrationForm();
  showLoginForm();
}

// Hide all elements
const endProcess = () => {
  if (cover.style.display = "block") cover.style.display = "none";
  if (loginForm.style.display = "block") loginForm.style.display = "none";
  if (registrationForm.style.display = "block") registrationForm.style.display = "none";
};

signInButton.addEventListener("click", showForm);
register.addEventListener("click", startRegistration);
login.addEventListener("click", startLogin);
closeLogin.addEventListener("click", endProcess);
closeRegister.addEventListener("click", endProcess);