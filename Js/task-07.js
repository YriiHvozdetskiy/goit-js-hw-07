const refs = {
    inputRange: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.inputRange.addEventListener('input', onInputTextSize);

function onInputTextSize() {
    let rangeValue = refs.inputRange.value;
    console.log(rangeValue);

    refs.text.style.fontSize = `${rangeValue}px`;
}
