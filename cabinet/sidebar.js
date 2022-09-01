const sidebar = document.querySelector('.sidebar');
const nav = document.querySelector('.toggle');
const item = document.querySelectorAll('.sidebar__item');
const logOut = document.querySelector('.log__out');
const modal = document.querySelector('.modal');
const modalBody = document.querySelector('.modal__body');
const logOutBtn = document.querySelector('.log__out__btn');
const closeModal = document.querySelector('.close__modal__btn');

let display = true
toggleFn()

window.addEventListener('resize', () =>{
    if(window.screen.width <600){
        display = false
        toggleFn()
    }

    if(window.screen.width >601){
        display = true
        toggleFn()
    }
});

nav.addEventListener('click', () =>{
    display = !display;
    toggleFn()
})

logOut.addEventListener('click', () =>{
    modal.classList.add('show');
})

closeModal.addEventListener('click', () =>{
    modal.classList.remove('show');
})
logOutBtn.addEventListener('click', () =>{
    window.localStorage.removeItem('token');
    modal.classList.remove('show');
    window.location.href = '/'
})

function toggleFn(){
    if(!display){
        nav.setAttribute('class', 'toggle')
        for(let i of item){
            i.style.display = 'none'
            i.style.position = 'absolute'
        }
    }

    if(display){
        nav.setAttribute('class', 'close')
        for(let i of item){
            i.style.display = 'block'
            i.style.position = 'relative'
        }
    }
}