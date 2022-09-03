const sidebar = document.querySelector('.sidebar');
const nav = document.querySelector('.open__toggle');
const closeNav = document.querySelector('.close__toggle');
const item = document.querySelectorAll('.sidebar__item');
const logOut = document.querySelector('.log__out');
const modal = document.querySelector('.modal');
const modalBody = document.querySelector('.modal__body');
const logOutBtn = document.querySelector('.log__out__btn');
const closeModal = document.querySelector('.close__modal__btn');

nav.addEventListener('click', ()=>{
    sidebar.classList.add('show')
})

closeNav.addEventListener('click', ()=>{
    sidebar.classList.remove('show')
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
});
for(let i of item){
    i.addEventListener('click', ()=>{
        sidebar.classList.remove('show');
    })
}