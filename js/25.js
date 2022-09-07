// Manipulación del DOM con eventos inputs


const name = document.querySelector("#name")

name.addEventListener('input', (e) => {
    console.log(e.target.value);
})

const password = document.querySelector("#password")
password.addEventListener('input', mostrarPassword)

function mostrarPassword(){
    password.type = "text"

    setTimeout(() => {
        password.type = "Password"
    }, 1000);
}
