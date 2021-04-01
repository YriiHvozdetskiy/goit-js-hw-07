const refs = {
    inputText: document.querySelector('#validation-input'),
};
refs.inputText.addEventListener('blur', onFocusChange);

const dataLength = refs.inputText.dataset.length;

function onFocusChange(event) {
    if (event.currentTarget.value.trim().length < dataLength) {
        refs.inputText.classList.remove('valid');
        refs.inputText.classList.add('invalid');
    }
    if (event.currentTarget.value.trim().length >= dataLength) {
        refs.inputText.classList.remove('invalid');
        refs.inputText.classList.add('valid');
    }
}
