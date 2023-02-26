const input = document.querySelector('#font-size-control');
const output = document.querySelector('#text');

input.addEventListener("input", swapSize);

function swapSize(event) {
    // const currentSize = event.currentTarget.value;
    // output.style.fontSize = `${currentSize}px`;
    output.style.fontSize = event.target.value + 'px';
};

