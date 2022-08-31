const form = document.querySelector('.form');
const login = document.querySelector('.form__username');
const pass = document.querySelector('.form__password');
const token = window.localStorage.getItem('token');

if(token){
    window.location.href = '/'
}

form.addEventListener('submit', e =>{
    e.preventDefault();
    alert(`okey ${login.value} bro`);
    login.value = null;
    pass.value = null
})