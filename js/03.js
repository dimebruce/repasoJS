// Tipos de datos

// undefined
 
let cliente
console.log(typeof(cliente))


// Boolean

const descuento = true
console.log(typeof descuento)


// Number

const numero1 = 20.10
const numero2 = 50
const numero3 = -
console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)


// String

const alumno = "Adgar"
const producto = "monitor"
const numero = "30"
console.log(typeof alumno)
console.log(typeof producto)
console.log(typeof numero)

//BigInt

const numeroGrande = BigInt(565665651651651608749541987419561491849)
console.log(typeof numeroGrande)


// Conversiones


const numeroString = "50"
const numeroNoString = 50
console.log(Number(numeroString) + numeroNoString)


// Symbol 

const primerSymbol = Symbol(50)
const segundoSymbol = Symbol(50)
console.log( primerSymbol === segundoSymbol )

//Null

const promo = null
console.log(typeof promo)