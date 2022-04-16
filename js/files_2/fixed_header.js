'use strict';

const fixHeader = () => {
  const header = document.querySelector('.header');

  if (window.pageYOffset > 200) {
    header.classList.add('header-fixed');
  } else {
    header.classList.remove('header-fixed');
  }
};

window.onscroll = fixHeader;///555
