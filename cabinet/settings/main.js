const navbar = document.querySelectorAll('.sidebar__item');
const header = document.querySelector('.sidebar')

for(let i of navbar){
    i.addEventListener('click', ()=>{
        header.classList.remove('show');
        console.log(header);
    })
}