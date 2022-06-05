export function cellSelect() {
  select();
  unSelect();
}

export function select() {
  const cell = document.querySelectorAll('.p-list');
  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', () => {
      cell[i].style.color = '#c740d3';
    })
  };
};
export function unSelect() {
  const cell = document.querySelectorAll('.p-list');
  for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('dblclick', () => {
      cell[i].style.color = 'white';
    });
  };
};

