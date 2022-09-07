// Funciones  - Function Declaration

function suma(num1, num2 = 10) {
    console.log(num1 + num2)
}
suma(150)


// Retornando dentro de las funciones

function suma2(num1, num2 = 10) {
    return num1 + num2
}
const resultado = suma2(150, 150) 
console.log(resultado) // 300
