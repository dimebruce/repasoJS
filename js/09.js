// Operaciones con arreglos

const tech = ['React', 'HTML', 'CSS', 'NodeJS', 'JS']

console.table(tech)

// Añadir elementos al array

tech.push('MongoDB') // Añade el valor al final del array
console.table(tech)

tech.unshift('MongoDB') // Añade el valor al inicio del array
console.table(tech)


// forma optimizada para uso de React

const nuevoArray = [... tech, "MongoDB"] // Añade el valor al final del array
const nuevoArray2 = ["MongoDB", ... tech] // Añade el valor al inicio del array


// Eliminar elementos del array

tech.pop('MongoDB') // Elimina el valor al final del array
console.table(tech)

tech.shift('MongoDB') // Elimina el valor al inicio del array
console.table(tech)

// forma optimizada para uso de React

tech.splice(2,1) // Borrara el índice 2, y sólo la 1. Si no se pone el segundo número, borra todo lo que hay después del índice 2
console.table(tech)


// Remplazar valores dentro del array

tech[0] = 'PHP'
console.table(tech)

// Forma optimizada para React

const remplazarArray = tech.map( function (tech) {
    if (tech === 'React') {
        return 'PHP'
    } else {
        return tech
    }
} )

console.table(remplazarArray)
