const refs = {
    decrementRef: document.querySelector('button[data-action="decrement"]'),
    incrementRef: document.querySelector('button[data-action="increment"]'),
    counterValueRef: document.querySelector('#value'),
};

refs.decrementRef.addEventListener('click', onDecrement);
refs.incrementRef.addEventListener('click', onIncrement);

let counterValue = Number(refs.counterValueRef.textContent);

function onDecrement() {
    counterValue = refs.counterValueRef.textContent = counterValue - -Number(refs.decrementRef.textContent);
}

function onIncrement() {
    counterValue = refs.counterValueRef.textContent = counterValue + Number(refs.incrementRef.textContent);
}

//! ======== або так ==========
// let counterValue = 0;

// function onDecrement() {
//     counterValue = refs.counterValueRef.textContent -= 1;
// }

// function onIncrement() {
//     counterValue = refs.counterValueRef.textContent = counterValue + 1;
// }
