// Unir dos objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Juan",
    premium: true
}

const unionObject = {
    producto: {...producto},
    cliente: {...cliente}
}

console.table(unionObject)