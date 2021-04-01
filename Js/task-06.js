const refs = {
    inputTextRef: document.querySelector('#validation-input'),
};
refs.inputTextRef.addEventListener('blur', onFocusChange);

const dataLength = refs.inputTextRef.dataset.length;

function onFocusChange(event) {
    if (event.currentTarget.value.trim().length < dataLength) {
        refs.inputTextRef.classList.remove('valid');
        refs.inputTextRef.classList.add('invalid');
    }
    if (event.currentTarget.value.trim().length >= dataLength) {
        refs.inputTextRef.classList.remove('invalid');
        refs.inputTextRef.classList.add('valid');
    }
}
