const toggle = document.querySelector('.toggle');
const navbar = document.querySelector('.header__nav')

document.body.addEventListener('click', e =>{
    if(!e.target.matches('.toggle') && !e.target.matches('.toggle__item')){
        navbar.classList.remove('show__header__nav')
        toggle.classList.remove('active')
    }
})

toggle.addEventListener('click', () =>{
    navbar.classList.toggle('show__header__nav');
    toggle.classList.toggle('active')
})