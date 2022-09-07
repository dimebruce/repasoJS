const tech = [100, 20, 'Angular', 'React']

// Con Arrow Function

const remplazarArray = tech.map( tech => {
    if (tech === 'React') {
        return 'PHP'
    } else {
        return tech
    }
} )

console.table(remplazarArray)

// Map es el método que nos ayuda a iterar por cada posición del arreglo.


const filtrarArray = tech.filter( tech => tech === 'React' )
console.table(filtrarArray)



const filtrarArrayNegativo = tech.filter( tech => tech !== 'React' )
console.table(filtrarArrayNegativo)