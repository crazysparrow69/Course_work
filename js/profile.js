import { createFilmDiv } from './fill_content.js';
import { series } from './data_base/series_base.js';
import { films } from './data_base/films_base.js';
import { page } from './data_base/page.js';
import { changeUserPropertyInLS } from './forms.js';

function getFilms(quantity) {
  const arr = [];

  for (let i = 0; i < quantity; i++) {
    const name = page.user.chosens[i];
    for (const film of films) if (name === film.name) arr.push(film);
    for (const serial of series) if (name === serial.name) arr.push(serial);
  }

  return arr;
}

createFilmDiv('recent-films', getFilms(4));
createFilmDiv('chosen-films', getFilms(6));

// Load user's data ///////////////////////////////////
function loadNickname() {
  const nickname = document.getElementById('nickname');
  nickname.innerHTML = page.user.name;
}

function loadRegistrationDate() {
  const registrationDate = document.getElementById('registration-date');
  registrationDate.innerHTML = `Зарегистрирован ${page.user.date}`;
}

function loadAvatar() {
  const avatar = document.getElementById('avatar');
  avatar.src = page.user.avatar;
}

function loadData() {
  loadNickname();
  loadRegistrationDate();
  loadAvatar();
}

loadData();

// Avatars ////////////////////////////////////////////
const avatars = document.getElementById('avatars');
const changeAvatarButton = document.getElementById('change-avatar');

const showAvatars = () => { avatars.style.display = 'block'; };
const hideAvatars = () => { avatars.style.display = 'none'; };

function checkAvatars() {
  if (avatars.style.display === 'block') {
    hideAvatars();
    return;
  }
  showAvatars();
}

function parseLink(str) {
  const arr = str.split('/');
  return `/img/avatars/${arr[arr.length - 1]}`;
}

function changeAvatar(event) {
  changeUserPropertyInLS(page.user.name, 'avatar', parseLink(event.target.src));
  window.location.reload();
}

changeAvatarButton.addEventListener('click', checkAvatars);
avatars.addEventListener('click', changeAvatar);
