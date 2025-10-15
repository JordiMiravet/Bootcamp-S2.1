"use strict"

// Exercici 1.1.1
// Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. 
// Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.

export const add = (num1, num2) => num1 + num2;

// Exercici 1.1.2
// Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres 
// i que retorni un número aleatori entre 0 i 100.

export const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// Exercici 1.1.3
// Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet 
// que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. 
// Per exemple: console.log(Hola, ${this.name});.

class Person {
    constructor(name){
        this._name = name;
    }
    get name(){ return this._name };

    greet = () => `Hola, ${this.name}`;
}

export function createPerson(name) {
    const person = new Person(name);  
    return person; 
}

// Exercici 1.1.4
// Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números 
// i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.

export const returnNumbers = () => {

    const arrayNumbers = []
    for(let i = 0; i < 5; i++){
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        arrayNumbers.push(randomNumber);
    };
    
    for(let i = 0; i < arrayNumbers.length; i++) {
        console.log(arrayNumbers[i])
    }
};

// Exercici 1.1.5 
// Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.

export const countDown = () => setTimeout(() => {
    console.log("Hola, aquest missatge es transmetrá amb 3 segons de retard");
}, 3000);

// Exercici 1.2.1 
// Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre 
// i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. 
// Si no, ha de retornar 'No pots conduir'.

export const potConduir = (age) => {
    return age >= 18 
        ? "Pots conduir" 
        : "No pots conduir";          
}

// Exercici 1.2.2
// Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari 
// per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. 
// Si no, retorna 'num2 és més gran'.

export const compareNumbers = (num1, num2) => { 
    return num1 > num2 
    ? `${num1} és més gran que ${num2}`
    : `${num2} és més gran que ${num1}`
}

// Exercici 1.2.3
    // 1ª part del exercici :
    // Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris 
    // per determinar si un número és positiu, negatiu o zero.

export const determineNumberType  = num => {
    return num === 0 
        ? "es zero" 
        : num > 0 
            ? "es positiu"
            : "es negatiu"
} 

    // 2ª part del exercici :
    // Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) 
    // i utilitzi l'operador ternari per determinar el valor màxim.

export const trobarMaxim = (a, b, c) => {
    // return Math.max(a, b, c);
    return a > b && c 
        ? a
        : b > c && a
            ? b
            : c
}

// Exercici 1.2.4
// Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. 
// Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

export const parOImpar = (arrayElements) => {
    const arrayEvenOrOdd = []
    arrayEvenOrOdd.length = 0;

    for (let i = 0; i < arrayElements.length; i++) {
        let element = arrayElements[i] % 2 === 0
            ? `${arrayElements[i]} es par`
            : `${arrayElements[i]} es impar`;
        arrayEvenOrOdd.push(element);
    }

    return arrayEvenOrOdd;
}

// Exercici 1.3.1
// Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. 
// La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

export function processar(nombre, callback){
    return callback(nombre);
}

// Exercici 1.3.2
// Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. 
// La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

export function calculadoraCB(n1, n2, callback){
    return callback(n1, n2);
}

// Exercici 1.3.3
// Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. 
// La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

export function esperarISaludar(name, callback){
    setTimeout(() => {
        callback(name);
    }, 2000);
}

// Exercici 1.3.4
// Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. 
// La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

export function processarElements(array, callback){
    array.forEach(callback);
}

// Exercici 1.3.5
// Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. 
// La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.

export function processarCadena(cadenaCaracters, callback){
    const cadenaUpper = cadenaCaracters.toUpperCase();
    return callback(cadenaUpper);
}


