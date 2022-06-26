
import {
  genres, years, countries, categories,
} from './data_base/genreBase.js';
import { cellSelect } from './sellectCells.js';
import { filterSeries, defaultSeries } from './series-filter.js';

const mainFilter = document.querySelector('.filter');

let categoriesArr = [];

const filtYears = document.createElement('div');
const filtGenres = document.createElement('div');
const filtCountries = document.createElement('div');
let searchButtom;
let filledContentYears = false;
let filledContentGenres = false;
let filledContentCountries = false;
let closeYears;
let closeGenres;
let closeCountries;

createCategories();
for (let i = 0; i < categoriesArr.length; i++) {
  categoriesArr[i].addEventListener('click', createSubmenu);
}

function createCategories() {
  categoriesArr = [filtYears, filtGenres, filtCountries];
  filtYears.classList.add('years');
  filtGenres.classList.add('genres');
  filtCountries.classList.add('countries');
  for (let i = 0; i < categoriesArr.length; i++) {
    categoriesArr[i].textContent = categories[i];
  }
  for (let i = 0; i < categoriesArr.length; i++) {
    mainFilter.appendChild(categoriesArr[i]);
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
    filtYears.style.height = '30px';
    deleteContent(filtYears, filledContentYears);
  }
  if (event.currentTarget === closeGenres) {
    filtGenres.style.height = '30px';
    deleteContent(filtGenres, filledContentGenres);
  }
  if (event.currentTarget === closeCountries) {
    filtCountries.style.height = '30px';
    deleteContent(filtCountries, filledContentCountries);
  }
}

function createSubmenu(event) {
  if (event.currentTarget === filtYears) {
    filtYears.style.height = '410px';
    fillContent(years, filtYears, filledContentYears);
    closeYears.addEventListener('dblclick', deleteSubmenu);
    closeYears.addEventListener('mouseover', cellSelect);
  }
  if (event.currentTarget === filtGenres) {
    filtGenres.style.height = '380px';
    fillContent(genres, filtGenres, filledContentGenres);
    closeGenres.addEventListener('dblclick', deleteSubmenu);
    closeGenres.addEventListener('mouseover', cellSelect);
  }
  if (event.currentTarget === filtCountries) {
    filtCountries.style.height = '380px';
    fillContent(countries, filtCountries, filledContentCountries);
    closeCountries.addEventListener('dblclick', deleteSubmenu);
    closeCountries.addEventListener('mouseover', cellSelect);
  }
}

function fillContent(arr, filtCategory, status) {
  if (status) return;
  if (filtCategory === filtYears) {
    fillContentYear(arr, filtCategory, status);
  } else if (filtCategory === filtGenres) {
    fillContentGenres(arr, filtCategory, status);
  } else if (filtCategory === filtCountries) {
    fillContentCountries(arr, filtCategory, status);
  }
}

function deleteContent(filtCategory, status) {
  if (!status) return;
  if (filtCategory === filtYears) {
    deleteContentYears();
  } else if (filtCategory === filtGenres) {
    deleteContentGenres();
  } else if (filtCategory === filtCountries) {
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
  filledContentYears = true;
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
  filledContentGenres = true;
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
  filledContentCountries = true;
}

function deleteContentYears() {
  document.querySelector('.yrs').remove();
  filledContentYears = false;
}
function deleteContentGenres() {
  document.querySelector('.gnr').remove();
  filledContentGenres = false;
}
function deleteContentCountries() {
  document.querySelector('.cntr').remove();
  filledContentCountries = false;
}
