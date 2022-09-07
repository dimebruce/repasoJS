// Manipulación de objetos 

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// Evitar que se sobreescriban y borren valores dentro del objeto.

// Object.freeze(producto)
// Object.seal(producto)

// Modificando el valor de nombre

producto.nombre = "Monitor Curvo"
console.table(producto)

// Añadiendo una nueva llave con valor

producto.imagen = "imagenProducto.jpg"
console.table(producto)


// Borrando una propiedad del objeto.

delete producto.disponible
console.table(producto)


