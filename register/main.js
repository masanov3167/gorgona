const form = document.querySelector('.form');
const name = document.querySelector('.form__name');
const login = document.querySelector('.form__login');
const email = document.querySelector('.form__email')
const pass = document.querySelector('.form__pass');
const token = window.localStorage.getItem('token');

if(token){
    window.location.href = '/'
}

form.addEventListener('submit', e =>{
    e.preventDefault();
    alert('okey bro')
});