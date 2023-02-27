// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const inputEl = document.querySelector('#controls input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement('div');
    const size = 30 + i * 10;
    divEl.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};`;
    fragment.appendChild(divEl);
  }
  boxesEl.appendChild(fragment);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtnEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
});

destroyBtnEl.addEventListener('click', destroyBoxes);
