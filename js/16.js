const tech = [100, 20, 'Angular', 'React']
const numbers = [10, 30, 50]


// Filter te trae todos los valores que sean iguales y/o diferentes a los que especifiquemo

const filtrarArrayNegativo = tech.filter( tech => tech !== 'React' )
console.table(filtrarArrayNegativo)

// Includes Comprueba si un elemento existe en el array
const resultado = tech.includes('Laravel')



// Some devuelve su al menos uno cumple la condición

const resultadoSome = numbers.some( numbers => numbers > 15) 

// Find busca y devuelve el primer número que cumpla con la condición

const resultadoFind = numbers.find( numbers => numbers > 15) 

// Every retorna true o false si todos los items cumplen con la condición

const resultadoEvery = numbers.every( numbers => numbers > 15) 

// Reduce suma todos los valores dentro del array

const resultadoReduce = numbers.reduce( (total, numero) => total + numero, 0) 



console.table(resultado, "Resultado de includes")
console.table(resultadoSome, "Resultado de Some")
console.table(resultadoFind, "Resultado de find")
console.table(resultadoEvery, "Resultado de every")
console.table(resultadoReduce, "Resultado de reduce")