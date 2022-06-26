const modalWindow = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const DELAY_TIME1 = 2000;
const DELAY_TIME2 = 500;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

function showPopup(str) {
  popupText.innerHTML = str;
  modalWindow.style.animationName = 'popup';
  modalWindow.style.display = 'block';
}

async function hidePopup() {
  modalWindow.style.animationName = 'popdown';
  await delay(DELAY_TIME2);
  modalWindow.style.display = 'none';
}

export async function popup(str) {
  showPopup(str);
  await delay(DELAY_TIME1).then(hidePopup);
}
