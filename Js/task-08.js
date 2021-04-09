const refs = {
    controls: document.querySelector('#controls'),
    input: document.querySelector('#controls input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
    scatter: document.querySelector('[data-action="scatter"]'),
};

refs.renderBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', onDestroy);
refs.scatter.addEventListener('click', onRendomPosition);

const screenWidth = window.screen.width / 2 - 10;
const screenHeight = window.screen.height / 2 - 10;

function createBoxes(amount) {
    if (refs.boxes.querySelectorAll('div').length > 0) onDestroy();

    amount = refs.input.value;

    for (let i = 0; i < amount; i += 1) {
        const basicSize = 30;
        const biggestSize = basicSize + i * 10;
        const box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute(
            'style',
            `width: ${biggestSize}px; height: ${biggestSize}px; background-color: ${randomRgb()}; left:${randomInteger(
                10,
                500,
            )}px;
            top:${randomInteger(10, 500)}px`,
        );
        boxes.append(box);
    }
}

const randomRgb = () => {
    const rgbNum = () => Math.floor(Math.random() * 256);
    const r = rgbNum();
    const g = rgbNum();
    const b = rgbNum();
    return `rgb(${r},${g},${b})`;
};

function onDestroy() {
    refs.boxes.innerHTML = '';
    refs.input.value = '';
}

function onRendomPosition() {
    const allBoxRef = refs.boxes.querySelectorAll('div');

    for (const box of allBoxRef) {
        box.classList.add('random');
    }
}

function randomInteger(screenWidth, screenHeight) {
    let rand = screenWidth + Math.random() * (screenHeight + 1 - screenWidth);
    return Math.floor(rand);
}
