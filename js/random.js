
import { series } from './data_base/series_base.js';
import { films } from './data_base/films_base.js';

const allBase = [].concat(series, films);
const avatar = document.getElementById('avatar');
const title = document.getElementById('title');
const year = document.getElementById('year');
const genre = document.getElementById('genre');

const result = [];

showRandom(allBase, 0, allBase.length - 1);
function showRandom(data, min, max) {
  result.pop();
  const rand = min + Math.random() * (max + 1 - min);
  result.push(data[Math.floor(rand)]);
  avatar.src = result[0].img;
  title.textContent = result[0].name;
  year.textContent = result[0].year;
  genre.textContent = result[0].genre;
}
