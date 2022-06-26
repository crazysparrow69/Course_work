import { series } from './data_base/series_base.js';
import { createFilmDiv } from './fill_content.js';
import { deleteContent } from './delete_content.js';

const input = document.querySelector('.inputS');

let target;
const result = new Set();
input.addEventListener('keyup', checkInput);

function checkInput(event) {
  if (input.value !== 0) {
    deleteContent('search-div');
    searchCoincidence();
  }
}

function searchCoincidence() {
  result.clear();
  target = input.value.toLowerCase();
  if (input.value.length !== 0) {
    for (const key of series) {
      if (key.name.toLowerCase().startsWith(target)) {
        result.add(key);
      }
    }
    createFilmDiv('search-div', Array.from(result));
  }
}
