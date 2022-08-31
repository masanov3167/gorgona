const toggle = document.querySelector('.toggle');
const close = document.querySelector('.close__nav')
const navbar = document.querySelector('.header__nav')
const link = document.querySelectorAll('.header__nav__link');

for(let i of link){
    i.addEventListener('click', () =>{
        navbar.classList.remove('show__header__nav')
    })
}

toggle.addEventListener('click', () =>{
    navbar.classList.add('show__header__nav')
})

close.addEventListener('click', () =>{
    navbar.classList.remove('show__header__nav')
})