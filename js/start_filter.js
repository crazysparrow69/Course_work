import {
  genres, years, countries, categories,
} from './data_base/genreBase.js';
import { select, unSelect, cellSelect } from './sellectCells.js';
import { filterSeries, defaultSeries } from './series-filter.js';

const mainFilter = document.querySelector('.filter');

let categories_arr = [];

const filt_years = document.createElement('div');
const filt_genres = document.createElement('div');
const filt_countries = document.createElement('div');
let searchButtom;
let filled_content_years = false;
let filled_content_genres = false;
let filled_content_countries = false;
let closeYears; let closeGenres; let closeCountries;

createCategories();
for (let i = 0; i < categories_arr.length; i++) {
  categories_arr[i].addEventListener('click', createSubmenu);
}

function createCategories() {
  categories_arr = [filt_years, filt_genres, filt_countries];
  filt_years.classList.add('years');
  filt_genres.classList.add('genres');
  filt_countries.classList.add('countries');
  for (let i = 0; i < categories_arr.length; i++) {
    categories_arr[i].textContent = categories[i];
  }
  for (let i = 0; i < categories_arr.length; i++) {
    mainFilter.appendChild(categories_arr[i]);
  }
  searchButtom = document.createElement('div');
  searchButtom.classList.add('close-buttom');
  mainFilter.appendChild(searchButtom);
  searchButtom.textContent = 'Поиск';
  searchButtom.addEventListener('click', filterSeries);
  searchButtom.addEventListener('dblclick', defaultSeries);
}

function deleteSubmenu(event) {
  if (event.currentTarget === closeYears) {
    filt_years.style.height = '30px';
    deleteContent(filt_years, filled_content_years);
  }
  if (event.currentTarget === closeGenres) {
    filt_genres.style.height = '30px';
    deleteContent(filt_genres, filled_content_genres);
  }
  if (event.currentTarget === closeCountries) {
    filt_countries.style.height = '30px';
    deleteContent(filt_countries, filled_content_countries);
  }
}

function createSubmenu(event) {
  if (event.currentTarget === filt_years) {
    filt_years.style.height = '410px';
    fillContent(years, filt_years, filled_content_years);
    closeYears.addEventListener('dblclick', deleteSubmenu);
    closeYears.addEventListener('mouseover', cellSelect);
  }
  if (event.currentTarget === filt_genres) {
    filt_genres.style.height = '380px';
    fillContent(genres, filt_genres, filled_content_genres);
    closeGenres.addEventListener('dblclick', deleteSubmenu);
    closeGenres.addEventListener('mouseover', cellSelect);
  }
  if (event.currentTarget === filt_countries) {
    filt_countries.style.height = '380px';
    fillContent(countries, filt_countries, filled_content_countries);
    closeCountries.addEventListener('dblclick', deleteSubmenu);
    closeCountries.addEventListener('mouseover', cellSelect);
  }
}

function fillContent(arr, filtCategory, status) {
  if (status) return;
  if (filtCategory === filt_years) {
    fillContentYear(arr, filtCategory, status);
  } else if (filtCategory === filt_genres) {
    fillContentGenres(arr, filtCategory, status);
  } else if (filtCategory === filt_countries) {
    fillContentCountries(arr, filtCategory, status);
  }
}

function deleteContent(filtCategory, status) {
  if (!status) return;
  if (filtCategory === filt_years) {
    deleteContentYears();
  } else if (filtCategory === filt_genres) {
    deleteContentGenres();
  } else if (filtCategory === filt_countries) {
    deleteContentCountries();
  }
}

function fillContentYear(arr, filtCategory) {
  const contentFilter = [];
  const filerDiv = document.createElement('div');
  filerDiv.classList.add('yrs');
  for (let i = 0; i < arr.length; i++) {
    contentFilter[i] = document.createElement('p');
    contentFilter[i].addEventListener('mouseover', cellSelect);
    contentFilter[i].textContent = arr[i];
    contentFilter[i].classList.add('p-list-years');
    filerDiv.appendChild(contentFilter[i]);
  }
  closeYears = document.createElement('p');
  closeYears.classList.add('close');
  closeYears.textContent = 'закрыть';
  filerDiv.appendChild(closeYears);
  filtCategory.appendChild(filerDiv);
  filled_content_years = true;
}

function fillContentGenres(arr, filtCategory) {
  const contentFilter = [];
  const filerDiv = document.createElement('div');
  filerDiv.classList.add('gnr');
  for (let i = 0; i < arr.length; i++) {
    contentFilter[i] = document.createElement('p');
    contentFilter[i].addEventListener('mouseover', cellSelect);
    contentFilter[i].textContent = arr[i];
    contentFilter[i].classList.add('p-list-genres');
    filerDiv.appendChild(contentFilter[i]);
  }
  closeGenres = document.createElement('p');
  closeGenres.classList.add('close');
  closeGenres.textContent = 'закрыть';
  filerDiv.appendChild(closeGenres);
  filtCategory.appendChild(filerDiv);
  filled_content_genres = true;
}

function fillContentCountries(arr, filtCategory) {
  const contentFilter = [];
  const filerDiv = document.createElement('div');
  filerDiv.classList.add('cntr');
  for (let i = 0; i < arr.length; i++) {
    contentFilter[i] = document.createElement('p');
    contentFilter[i].addEventListener('mouseover', cellSelect);
    contentFilter[i].textContent = arr[i];
    contentFilter[i].classList.add('p-list-countries');
    filerDiv.appendChild(contentFilter[i]);
  }
  closeCountries = document.createElement('p');
  closeCountries.classList.add('close');
  closeCountries.textContent = 'закрыть';
  filerDiv.appendChild(closeCountries);
  filtCategory.appendChild(filerDiv);
  filled_content_countries = true;
}

function deleteContentYears() {
  document.querySelector('.yrs').remove();
  filled_content_years = false;
}
function deleteContentGenres() {
  document.querySelector('.gnr').remove();
  filled_content_genres = false;
}
function deleteContentCountries() {
  document.querySelector('.cntr').remove();
  filled_content_countries = false;
}
