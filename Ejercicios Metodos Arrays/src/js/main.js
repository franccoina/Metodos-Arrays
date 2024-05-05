//Ejercicios: METODOS ARREGLOS

// 1. Crea un lista que almacene 10 nombres completos y ordenados alfabéticamente

let arrayNames = [
  "carlos",
  "lucas",
  "ana",
  "jorge",
  "luisa",
  "penelope",
  "orlando",
  "pepe",
  "john",
  "sara"
];
console.log(arrayNames.sort());

// 2. Crea una

let una;

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3. Utilizar un bucle for para sumar todos los elementos de un array de números.

let arrayNumbersSum = 0;

for (let i = 0; i < arrayNumbers.length; i++) {
    arrayNumbersSum += arrayNumbers[i];
}
console.log(arrayNumbersSum);
console.log("");

// 4. Iterar sobre las propiedades de un objeto utilizando un bucle for...in e imprimir sus valores.
let objectPerson = { username: "jose", age: 29, city: "lisboa" };

for (const key in objectPerson) {
    console.log(objectPerson[key]);
}
console.log("");

// 5. Utilizar un bucle for...of para sumar todos los números de un array.

let arrayNumbersSum2 = 0;

for (const num of arrayNumbers) {
    arrayNumbersSum2 += num;
}
console.log(arrayNumbersSum2);
console.log("");

// 6. Utilizar el método forEach() para imprimir en la consola todos los elementos de un array de
// strings.

arrayNames.forEach(username => {
    console.log(username);
});
console.log("");

// 7. Utilizar el método map() para obtener un nuevo array con cada elemento de un array de
// números multiplicado por 2.

let arrayNumbersClon = arrayNumbers.map(function(num){
    return num*2
})
console.log(arrayNumbersClon);
console.log("");

// 8. Utilizar el método filter() para obtener un nuevo array con solo los números pares de un
// array dado.

let arrayNumbersFiltered = arrayNumbers.filter(function (num) {
    return (num%2 == 0);
});
console.log(arrayNumbersFiltered);
console.log("");

// 9. Utilizar el método some() para comprobar si al menos uno de los elementos de un array de
// números es mayor que 10.

let arrayNumbersSome = arrayNumbers.some(num => num >10)
console.log(arrayNumbersSome);
console.log("");

// 10. Utilizar el método every() para comprobar si todos los elementos de un array de números
// son positivos.

let arrayNumbersEvery = arrayNumbers.every(num => num >0)
console.log(arrayNumbersEvery);
console.log("");

// 11. Utilizar el método sort() para ordenar un array de números de menor a mayor.

let arrayNumbersWeird = [332,354,466,46,4,6,3]
console.log(arrayNumbersWeird.sort());
console.log("");

// 12. Utilizar el método reverse() para invertir el orden de un array dado.

console.log(arrayNumbersWeird.reverse());
console.log("");

// 13. Crear una función toReversed() que tome un array y devuelva un nuevo array con los
// elementos en orden inverso.

let arrayNumbersWeirdReversed = arrayNumbersWeird.toReversed()

console.log(arrayNumbersWeirdReversed);
console.log("");

// 14. Utilizar el método forEach() para calcular la suma de todos los elementos de un array de
// números.
let arrayNumbersWeirdSum = 0

arrayNumbersWeird.forEach(num => {
    arrayNumbersWeirdSum += num
});
console.log(arrayNumbersWeirdSum);
console.log("");

// 15. Iterar sobre las propiedades de un objeto y contar cuántas son de tipo string utilizando un
// bucle for...in.

let howManyStrings = 0

for (const key in objectPerson) {
    if (typeof objectPerson[key] === 'string'){
        howManyStrings++
    }
}
console.log(howManyStrings);
console.log("");

// 16. Utilizar el método forEach() para imprimir en la consola todos los elementos de un array de
// objetos.

let arrayObjects = [
  { toy: "ball" },
  { color: "green" },
  { size: "big" },
  { weight: "heavy" },
];

arrayObjects.forEach(object => {
    console.log(object)
});
console.log("");

// 17. Utilizar el método map() para obtener un nuevo array con la longitud de cada string en un
// array dado.

let arrayLenghtStrings = arrayNames.map(function(username){
    return username.length
})
console.log(arrayLenghtStrings)
console.log('')

// 18. Utilizar el método filter() para obtener un nuevo array con solo las strings que contengan la
// letra 'a' en un array dado.

let arrayNamesFiltered = arrayNames.filter(function (username) {
    if (username.includes('a')){
        return username;
    }
});
console.log(arrayNamesFiltered);
console.log("");

// 19. Utilizar el método some() para comprobar si alguna string en un array dado tiene una
// longitud mayor que 10 caracteres.

let arrayNamesSome = arrayNames.some((username) => username.length > 10);
console.log(arrayNamesSome);
console.log("");

// 20. Utilizar el método every() para comprobar si todas las strings en un array dado contienen
// al menos una vocal.

let arrayNamesEvery = arrayNames.every((username) => username.includes('a')||username.includes('e')||username.includes('i')||username.includes('o')||username.includes('u'));
console.log(arrayNamesEvery);
console.log("");

// 21. Dado un array de objetos que representan libros con propiedades titulo y paginas, utilizar
// filter() para obtener un nuevo array con solo los libros que tengan más de 300 páginas.

let arrayObjectsBooks = [
  { title: "x", pages: 213 },
  { title: "y", pages: 713 },
  { title: "z", pages: 313 },
  { title: "w", pages: 113 },
];

let arrayBooks300Pages = arrayObjectsBooks.filter(function(book){
    if (book.pages > 300){
        return book
    }
})
console.log(arrayBooks300Pages);
console.log("");

// 22. Dado un array de números, utilizar filter() para obtener un nuevo array con solo los
// números que sean divisibles por 3.

let arrayNumbersDiv3 = arrayNumbers.filter(function (num) {
    if (num%3 == 0) {
        return num;
}
});
console.log(arrayNumbersDiv3);
console.log("");

// 23. Dado un array de strings, utilizar filter() para obtener un nuevo array con solo las strings
// que tengan una longitud mayor que 5.

let arrayNamesLenght5 = arrayNames.filter((username) => username.length > 5);
console.log(arrayNamesLenght5);
console.log("");

// 24. Dado un array de objetos que representan personas con propiedades nombre y edad,
// utilizar filter() para obtener un nuevo array con solo las personas mayores de 18 años.

let arrayObjectsPerson = [
  { username: "carlos", age: 23 },
  { username: "ann", age: 73 },
  { username: "james", age: 33 },
  { username: "luke", age: 13 },
];

let arrayObjectsAdultPerson = arrayObjectsPerson.filter(function (user) {
    if (user.age > 18) {
    return user.username;
    }
});
console.log(arrayObjectsAdultPerson);
console.log("");

// 25. Dado un array de booleanos, utilizar filter() para obtener un nuevo array con solo los
// valores true.

let arrayBool = [true, false,true, false,true, false];

let arrayBoolFiltered = arrayBool.filter((bool)=> bool==true)
console.log(arrayBoolFiltered);
console.log("");

// 26. Dado un array de números, utilizar map() para obtener un nuevo array con el cuadrado de
// cada número.

let arrayNumbersPow = arrayNumbers.map(function (num) {
    return Math.pow(num,2);
});
console.log(arrayNumbersPow);
console.log("");

// 27. Dado un array de strings, utilizar map() para obtener un nuevo array con cada string en
// mayúsculas.

let arrayUpperCaseStrings = arrayNames.map(function (username) {
    return username.toUpperCase;
});
console.log(arrayUpperCaseStrings);
console.log("");

// 28. Dado un array de objetos que representan productos con propiedades nombre y precio,
// utilizar map() para obtener un nuevo array con solo los precios de los productos.

let arrayObjectsProducts = [
  { productName: "lamp", price: 23 },
  { productName: "mouse", price: 73 },
  { productName: "keyboard", price: 33 },
  { productName: "phone", price: 13 },
];

let arrayObjectsProductsPrices = arrayObjectsProducts.map(function (product) {
    return product.price;
});
console.log(arrayObjectsAdultPerson);
console.log("");

// 29. Dado un array de objetos que representan personas con propiedades nombre y edad,
// utilizar map() para obtener un nuevo array con solo los nombres de las personas.

let arrayObjectsPersonNames = arrayObjectsPerson.map((personName)=> personName.username)

console.log(arrayObjectsPersonNames);
console.log("");

// 30. Dado un array de números, utilizar map() para obtener un nuevo array con la raíz cuadrada
// de cada número.

let arrayNumbersSqrt = arrayNumbers.map(function (num) {
    return Math.sqrt(num);
});
console.log(arrayNumbersSqrt);
console.log("");