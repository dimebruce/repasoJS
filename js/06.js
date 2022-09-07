// Destructuring con dos o más objetos. 

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true
}

const {nombre, precio} = producto

// Aquí no funciona porque la variable nombre se repite, así que se le asigna un alias. 
const {nombre: nombreCliente, premium} = cliente

console.log(nombre)
console.log(nombreCliente)