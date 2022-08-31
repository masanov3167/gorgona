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
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;

    if(email.value.match(mailformat)){
        alert('okey')
    }

    e.preventDefault();
});



function ValidateEmail(inputText)
{
var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
if(inputText.match(mailformat))
{
alert("You have entered a valid email address!");    //The pop up alert for a valid email address
form.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
// document.form1.text1.focus();
return false;
}
}