export let searchBase = {
  years: new Set(),
  genres: new Set(),
  countries: new Set(),
}

export const searchYears = searchBase.years;
export const searchGenres = searchBase.genres;
export const searchCountries = searchBase.countries;


export function cellSelect(event) {
  select(event);
  unSelect(event);

}

export function select(event) {
  const selected = event.currentTarget
  event.currentTarget.addEventListener('click', () => {
    if(!selected.classList.contains('close')){
      selected.style.color = '#c740d3';
    };
    if(selected.classList.contains('p-list-years')) {
      searchBase.years.add(selected.textContent);
    }
    if(selected.classList.contains('p-list-genres')) {
      searchBase.genres.add(selected.textContent);
    }
    if(selected.classList.contains('p-list-countries')) {
      searchBase.countries.add(selected.textContent);
    }
  });
}

export function unSelect(event) {
  const selected = event.currentTarget
  event.currentTarget.addEventListener('dblclick', () => {
    selected.style.color = 'white';
    if(selected.classList.contains('close')) {
      console.log('close')
      searchBase.years.clear();
      searchBase.genres.clear();
      searchBase.countries.clear();
    };
    if(selected.classList.contains('p-list-years')) {
      searchBase.years.delete(selected.textContent);
    };
    if(selected.classList.contains('p-list-genres')) {
      searchBase.genres.delete(selected.textContent);
    };
    if(selected.classList.contains('p-list-countries')) {
      searchBase.countries.delete(selected.textContent);
    };
  });
};
