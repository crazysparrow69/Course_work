export const deleteContent = divClass => {
  const div = document.getElementById(divClass);

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};
