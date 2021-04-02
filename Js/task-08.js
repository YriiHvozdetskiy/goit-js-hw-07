const refs = {
    controls: document.querySelector('#controls'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="render"]'),
    boxes: document.querySelector('.boxes'),
};

refs.renderBtn.addEventListener('click', createBoxes);

const inputValueRef = refs.controls.firstElementChild.value;

function createBoxes(amount) {
    console.log(inputValueRef);
}
