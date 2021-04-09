const refs = {
    controls: document.querySelector('#controls'),
    input: document.querySelector('#controls input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),
};

refs.renderBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', onDestroy);

function createBoxes(amount) {
    amount = refs.input.value;
    for (let i = 0; i < amount; i += 1) {
        const basicSize = 30;
        const biggestSize = basicSize + i * 10;
        const box = document.createElement('div');
        box.setAttribute(
            'style',
            `width: ${biggestSize}px; height: ${biggestSize}px; background-color: ${randomRgb()}`,
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
}
