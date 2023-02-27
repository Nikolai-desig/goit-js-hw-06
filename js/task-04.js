const increment = document.querySelector(`[data-action = 'increment']`);
const decrement = document.querySelector(`[data-action = 'decrement']`);
const showValue = document.getElementById('value');

let newValue = 0;

increment.addEventListener('click', btnIcrement);
decrement.addEventListener('click', btnDecrement);

function btnIcrement(event) {
    console.log(newValue += 1);
    showValue.textContent = newValue;
}

function btnDecrement(event) {
    console.log((newValue -= 1));
    showValue.textContent = newValue;
}
