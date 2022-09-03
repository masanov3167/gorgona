const timeElement = document.querySelector('.old__time');
const title = document.querySelectorAll('.depozit__card__title');

for(let i of title){
    i.addEventListener('click', e =>{
        i.classList.toggle('test');
    })
}

window.addEventListener('click', e =>{
    if(!e.target.matches('.depozit__card__title')){
        clearClass()
    }
})

function clearClass(){
    for(let i of title){
        i.classList.remove('test')
    }
}

const time = () =>{
    const date = new Date();
    const hours = date.getHours().toString().padStart(2,0);
    const minute = date.getMinutes().toString().padStart(2,0);
    const second = date.getSeconds().toString().padStart(2,0);
    return `${hours}:${minute}:${second}`;
}


setInterval(() =>{
    timeElement.textContent = time();
}, 1000)
