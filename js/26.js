// Manipulación del DOM con eventos submit

const form = document.querySelector('.formulario')
form.addEventListener('submit', e => {
    e.preventDefault() // Previene la acción por default

    // Chaining .value porque trae el valor que contiene ese input
    const name = document.querySelector("#name").value
    const password = document.querySelector("#password").value

    if (name === '' || password === '') {
        console.log("Todos los campos son obligatorios");
    } else {
        console.log("Enviando la data ...");
    }
})