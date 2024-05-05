// Metodos Arrays

// reverse() me cambia el original, y el toReversed() me duevuelve la version al reves

console.group('Metodo reverse y toReversed')

console.log('reverse')

let arrayToys = ['doll','puzzle','ball','rubik cube']

console.log(arrayToys)
console.log('')

let arrayToysReverse = arrayToys.reverse().map(toy=>{
    return toy.toUpperCase()
})

console.log(arrayToys)
console.log(arrayToysReverse)
console.log('')

console.log('toReversed')

let arrayFruits = ['mango','tomato','banana','grape','pear','apple','orange']
console.log(arrayFruits)
console.log('')

let arrayFruitsToReversed = arrayFruits.toReversed()

console.log(arrayFruits)
console.log(arrayFruitsToReversed)
console.groupEnd()
console.log('')

console.group('Metodo toSorted (solo sirve para orden alfabetico 123ABC)')

let arrayDatosVarios = ['x','d','f','j','i','a','b',false,true,1]

console.log(arrayDatosVarios)
let arrayDatosVariosSorted = arrayDatosVarios.toSorted()
console.log(arrayDatosVariosSorted)
console.log('')

console.log('')
console.group('Metodo forEach (value,index)')
console.log(arrayDatosVariosSorted)
arrayDatosVariosSorted.forEach(function(value,index){
    console.log('El valor es:',value,'y su indice es:',index)
})

// Un for-of da los valores, pero un for-in me da las keys (o el indice, en listas)
console.groupEnd()
console.log('')

console.group('Metodo every')

console.log(arrayDatosVarios)
let everyArrayDatosVarios = arrayDatosVarios.every(value => isNaN(value))
console.log('¿Todos los valores de mi arrayDatosVarios son NaN?:', everyArrayDatosVarios)

let arrayNumUnoaDoce = [1,2,3,4,5,6,7,8,9,10,11,12]

console.log(arrayNumUnoaDoce)
let everyArrayNumUnoaDoce = arrayNumUnoaDoce.every(num => (num%2) == 0)
console.log('¿Todos los valores de mi arrayNumUnoaDoce son pares?:',everyArrayNumUnoaDoce)

console.groupEnd()
console.log('')

console.group('Metodo some')

console.log(arrayNumUnoaDoce)
let someArrayNumUnoaDoce = arrayNumUnoaDoce.some(num => (num%2) == 0)
console.log('¿Algunos valores de mi arrayNumUnoaDoce son pares?:',someArrayNumUnoaDoce)

let arrayValidUsers = ['maria','andre','lucas','jairo']
console.log(arrayValidUsers)
let askUsername = prompt('Escribe tu nombre para ingresar:')
console.log('El nombre ingresado es:',askUsername)

let someArrayValidUsers = arrayValidUsers.some(username => username === askUsername)
console.log('¿El nombre ingreado esta en el sistema?:',someArrayValidUsers)

console.groupEnd()
console.log('')

console.group('Metodo filter')

let arrayNumUnoaDiez = [1,2,3,4,5,6,7,8,9,10]
console.log(arrayNumUnoaDiez)

let arrayNumUnoaDiezPares = arrayNumUnoaDiez.filter((numPar)=>{
    return (numPar%2 === 0)
})
console.log('Los numeros pares de mi arrayNumUnoaDiez son:',arrayNumUnoaDiezPares)

let arrayNumUnoaDiezImpares = arrayNumUnoaDiez.filter((numImpar)=>{
    return (numImpar%2 !== 0)
})
console.log('Los numeros impares de mi arrayNumUnoaDiez son:',arrayNumUnoaDiezImpares)

console.groupEnd()
console.log('')