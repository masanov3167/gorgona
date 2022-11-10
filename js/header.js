const toggle = document.querySelector('.toggle');
const navbar = document.querySelector('.header__nav')

toggle.addEventListener('click', () =>{
    navbar.classList.toggle('show__header__nav');
    toggle.classList.toggle('active')
})