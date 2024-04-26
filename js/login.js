//Constantes
const body = document.querySelector('body');
const containerForm = document.querySelector('.container-form');
const signinBtn = document.querySelector('.signin-btn');
const signupBtn = document.querySelector('.signup-btn');
//Eventos
signupBtn.addEventListener('click', ()=>{
    console.log("hola");
    containerForm.classList.add('active');
    body.classList.add('active');
})

signinBtn.addEventListener('click', ()=>{
    containerForm.classList.remove('active');
    body.classList.remove('active');
})
