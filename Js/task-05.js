const refs = {
    inputText: document.querySelector('#name-input'),
    titleName: document.querySelector('#name-output'),
};

refs.inputText.addEventListener('input', onInputTextChenge);

function onInputTextChenge(event) {
    refs.titleName.textContent = event.currentTarget.value;
    if (event.currentTarget.value.trim() === '') refs.titleName.textContent = 'незнакомец';
}
