// Manipulación del DOM con eventos submit

const form = document.querySelector('#formulario')
form.addEventListener('submit', e => {
    e.preventDefault() // Previene la acción por default

    // Chaining .value porque trae el valor que contiene ese input
    const name = document.querySelector("#name").value
    const password = document.querySelector("#password").value

    const alertPrevia = document.querySelector('.alert')
    if (alertPrevia) {
        alertPrevia.remove()
    }

    const alert = document.createElement('DIV')
    alert.classList.add('alert')

    if (name === '' || password === '') {
        alert.textContent = "Todos los campos son obligatorios"
        alert.classList.add('alert', 'alert-danger')
    } else {
        alert.textContent = "Enviando la DATA ..."
        alert.classList.add('alert', 'alert-success')
    }

    form.appendChild(alert)
    console.log(alert);
})