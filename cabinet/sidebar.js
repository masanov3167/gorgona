const sidebar = document.querySelector('.sidebar');
const nav = document.querySelector('.toggle');
const item = document.querySelectorAll('.sidebar__item');

let display = true
toggleFn()
nav.addEventListener('click', () =>{
    display = !display;
    toggleFn()
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