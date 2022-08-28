const toggle = document.querySelector('.toggle');
const close = document.querySelector('.close__nav')
const navbar = document.querySelector('.header__nav')

toggle.addEventListener('click', () =>{
    navbar.classList.add('show__header__nav')
})

close.addEventListener('click', () =>{
    navbar.classList.remove('show__header__nav')
})