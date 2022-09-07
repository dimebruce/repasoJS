// Manipulación del DOM desde JS


const heading = document.querySelector("#heading")
heading.textContent = "Un nuevo titulo desde JS 😲"
console.log(heading.textContent);

const inputName = document.querySelector('#name')
inputName.value = "Ya no es dimebruce, sino Mr. Wayne" 

const enlaces = document.querySelectorAll(".navegacion a")


enlaces.forEach( enlaces => enlaces.textContent = "Nueva Tech" )

