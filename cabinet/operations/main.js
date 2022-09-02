const openBtn = document.querySelector('.operation__select__btn');
const epsSum = document.querySelector('.eps__sum');
const epsVal = document.querySelector('.eps__value');
const epsmodal = document.querySelector('.modal__wrapper');
const epsform = document.querySelector('.eps__form');
const epsinput = document.querySelector('.eps__form__input');
const epserror = document.querySelector('.eps__input__error');

let epsvalue = false;

openBtn.addEventListener('click', () =>{
    openMOdal();
})

epsmodal.addEventListener('click', (e) =>{
    if(e.target.matches('.modal__wrapper')){
        closeMOdal()
    }

    if(e.target.matches('.eps__item')){
        epsVal.textContent = `Укажите сумма: (${e.target.dataset.eps})`;
        epsvalue = e.target.dataset.eps
    }
    if(epsvalue){
        epsSum.textContent += ' '+ epsvalue;
        closeMOdal()
    }
});


epsinput.addEventListener('input', ()=>{
    if(!epsvalue){
        epserror.classList.remove('d-none');
        epserror.textContent = 'uka avval eps value tanla';
    }
    if(isNaN(epsinput.value)){
        epsinput.value = epsinput.value.substring(0, epsinput.value.length-1)
    }
});

epsform.addEventListener('submit', e =>{
    if(!epsvalue){
        e.preventDefault();
        epserror.classList.remove('d-none');
        epserror.textContent = 'uka avval eps value tanla';
    }
    if(epsinput.value.length <=1){
        e.preventDefault();
        epserror.classList.remove('d-none');
        epserror.textContent = 'uka avval summa kirit';
    }
    if( epsvalue && epsinput.value.length >1){
        epserror.classList.add('d-none');
        alert(`uka ${epsinput.value} ${epsvalue} ga xisobing to'ldirildi!`)
    }
})

function openMOdal(){
    epsmodal.classList.remove('d-none')
}

function closeMOdal(){
    epsmodal.classList.add('d-none')
}