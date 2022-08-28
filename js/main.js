const form = document.querySelector('.plan__form');
const input = document.querySelector('.plan__form__input');
const verifyText = document.querySelector('.verify__text');
const submitButton = document.querySelector('.plan__form__button');


form.addEventListener('submit', e =>{
    e.preventDefault();
    verifyText.classList.remove('d-none');
    submitButton.style.opacity = '0.3';
    closeFormText()
})

function closeFormText() {
    setTimeout(() =>{
        verifyText.classList.add('d-none');
        input.value = null;
        submitButton.style.opacity = '1';
    }, 1000)
}