// Object

const productoV = "Tablet"
const precio = 300
const disponible = true

// Expresado lo mismo, pero con objeto. 

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)

// Ingresando a las propiedades del objeto
console.log(producto.nombre) //Tablet

// Destructuring
const { nombre } = producto
console.log(nombre)

// Object Literal Enhacement

const autenticado = true
const user = "bruce"

const nuevoObjeto = {
    autenticado: autenticado,
    user: user
}

