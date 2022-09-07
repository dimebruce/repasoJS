// Manipulación del DOM con eventos click


const heading = document.querySelector("#heading")

heading.addEventListener('click', () => {
    heading.textContent = "Nuevo titulo a un click 🧙‍♂️"
})