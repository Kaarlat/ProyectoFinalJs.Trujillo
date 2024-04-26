// Constantes
// const signupForm = document.getElementById("signup-form");
const btn_register = document.getElementById("btn-register");

btn_register.addEventListener("click", (event) => {
  event.preventDefault();

  Swal.fire({
    title: "Registro exitoso!",
    text: "Inicia sesión para acceder.",
    icon: "success",
    confirmButtonText: "OK",
  }).then((result) =>{
    if(result.isConfirmed){
        window.location.reload()
    }
    console.log(result)
  })
});
