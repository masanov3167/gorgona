const toggle = document.querySelector('.toggle');
const close = document.querySelector('.close__nav')
const navbar = document.querySelector('.header__nav')
const form = document.querySelector('.plan__form');
const input = document.querySelector('.plan__form__input');
const verifyText = document.querySelector('.verify__text');
const submitButton = document.querySelector('.plan__form__button');

toggle.addEventListener('click', () =>{
    navbar.classList.add('show__header__nav')
})

close.addEventListener('click', () =>{
    navbar.classList.remove('show__header__nav')
})
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