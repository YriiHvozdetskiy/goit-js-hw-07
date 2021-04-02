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
    if (refs.boxes.children.length >= 1) {
        let elem = document.createElement('div');
        elem.classList.add('box');
        let counter = 10;
        let widthNumber = Number.parseInt(refs.boxes.lastElementChild.style.width);
        let heightNumber = Number.parseInt(refs.boxes.lastElementChild.style.width);

        elem.style.width = widthNumber + counter + 'px';
        elem.style.height = heightNumber + counter + 'px';

        return refs.boxes.append(elem);
    }

    let elem = document.createElement('div');
    elem.classList.add('box');
    elem.style.width = '30px';
    elem.style.height = '30px';

    return refs.boxes.append(elem);
}

function onDestroy() {
    refs.boxes.remove();

    refs.controls.insertAdjacentHTML('afterend', '<div id="boxes"></div>');
}
