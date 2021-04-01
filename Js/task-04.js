const refs = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
    counterValue: document.querySelector('#value'),
};

refs.decrement.addEventListener('click', onDecrement);
refs.increment.addEventListener('click', onIncrement);

let counterValue = Number(refs.counterValue.textContent);

function onDecrement() {
    counterValue = refs.counterValue.textContent = counterValue - -Number(refs.decrement.textContent);
}

function onIncrement() {
    counterValue = refs.counterValue.textContent = counterValue + Number(refs.increment.textContent);
}

//! ======== або так ==========
// let counterValue = 0;

// function onDecrement() {
//     counterValue = refs.counterValue.textContent -= 1;
// }

// function onIncrement() {
//     counterValue = refs.counterValue.textContent = counterValue + 1;
// }
