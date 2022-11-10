const sidebar = document.querySelector('.sidebar');
const nav = document.querySelector('.toggle');
const item = document.querySelectorAll('.sidebar__item');
const logOut = document.querySelector('.log__out');

sidebar.classList.remove('show')

nav.addEventListener('click', ()=>{
    sidebar.classList.toggle('show')
});

document.body.addEventListener('click', e =>{
    if(!e.target.matches('.toggle') && !e.target.matches('.fa-bars')){
        sidebar.classList.remove('show')
    }
})

logOut.addEventListener('click', () =>{
    window.localStorage.removeItem('token');
    window.location.href = '/'
});