const refs = {
    inputTextRef: document.querySelector('#name-input'),
    titleNameRef: document.querySelector('#name-output'),
};

refs.inputTextRef.addEventListener('input', onInputTextChenge);

function onInputTextChenge(event) {
    refs.titleNameRef.textContent = event.currentTarget.value;
    if (event.currentTarget.value.trim() === '') refs.titleNameRef.textContent = 'незнакомец';
}
