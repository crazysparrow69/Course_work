/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
// Delete all elements in "divClass" container
export const deleteContent = divClass => {
  const div = document.getElementById(divClass);

  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
};
