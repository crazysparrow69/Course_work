import { searchYears, searchGenres, searchCountries } from './sellectCells.js';
import { series } from './data_base/series_base.js';
import { createFilmDiv } from './fill_content.js';

const result = new Set();
const block = document.getElementById('series1-div');

export function filterSeries() {
  result.clear();
  block.innerHTML = '';
  for (let i = 0; i < series.length; i++) {
    if (searchYears.size && searchGenres.size && searchCountries.size) {
      if (searchYears.has(series[i].year) && searchGenres.has(series[i].genre) && searchCountries.has(series[i].country)) {
        result.add(series[i]);
      }
    } else if (searchYears.size && searchGenres.size) {
      if (searchYears.has(series[i].year) && searchGenres.has(series[i].genre)) result.add(series[i]);
    } else if (searchYears.size && searchCountries.size) {
      if (searchYears.has(series[i].year) && searchCountries.has(series[i].country)) result.add(series[i]);
    } else if (searchGenres.size && searchCountries.size) {
      if (searchGenres.has(series[i].genre) && searchCountries.has(series[i].country)) result.add(series[i]);
    } else if (searchYears.size) {
      if (searchYears.has(series[i].year)) result.add(series[i]);
    } else if (searchGenres.size) {
      if (searchGenres.has(series[i].genre)) result.add(series[i]);
    } else if (searchCountries.size) {
      if (searchCountries.has(series[i].country)) result.add(series[i]);
    } else {
      return;
    }
  }
  createFilmDiv('series1-div', Array.from(result));
  if (result.length === 0) createFilmDiv('series1-div', series);
}

export function defaultSeries() {
  const block = document.getElementById('series1-div');
  block.innerHTML = '';
  createFilmDiv('series1-div', series);
}