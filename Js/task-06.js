const refs = {
    inputText: document.querySelector('#validation-input'),
};
refs.inputText.addEventListener('blur', onFocusChange);

const dataLength = Number(refs.inputText.dataset.length);
console.log(dataLength);

function onFocusChange(event) {
    //! Якщо замінити "<" на строге равенство буде не коректно код працювати
    if (event.currentTarget.value.trim().length < dataLength) {
        invalidClass();
    }
    if (event.currentTarget.value.trim().length >= dataLength) {
        validClass();
    }
    // !Якщо зробити if else код не буде коректно працювати
}

function invalidClass() {
    refs.inputText.classList.remove('valid');
    refs.inputText.classList.add('invalid');
}
function validClass() {
    refs.inputText.classList.remove('invalid');
    refs.inputText.classList.add('valid');
}
