"use strict"


// --------------------------------------------------
// Exercici 1.1.1
    // Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. 
    // Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.

export const add = (num1, num2) => num1 + num2;


// --------------------------------------------------
// Exercici 1.1.2
    // Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres 
    // i que retorni un número aleatori entre 0 i 100.

export const randomNumber = () => Math.floor(Math.random() * 100) + 1;


// --------------------------------------------------
// Exercici 1.1.3
    // Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet 
    // que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. 
    // Per exemple: console.log(Hola, ${this.name});.

class Person {
    constructor(name){
        this._name = name;
    }
    get name(){ return this._name };

    greet = () => `Bon dia, ${this.name}!`;
}

export function createPerson(name) {
    const person = new Person(name);  
    return person; 
}


// --------------------------------------------------
// Exercici 1.1.4
    // Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números 
    // i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.

export const printNumbers = (arr = []) => arr.forEach( n => console.log(n));


// --------------------------------------------------
// Exercici 1.1.5 
    // Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.

export const countDown = (message, delay = 3000) => setTimeout(() => {
    console.log(message);
}, delay);


// --------------------------------------------------
// Exercici 1.2.1 
    // Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre 
    // i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. 
    // Si no, ha de retornar 'No pots conduir'.

export const potConduir = (age) => {
    return age >= 18 
        ? "Pots conduir" 
        : "No pots conduir";          
}


// --------------------------------------------------
// Exercici 1.2.2
    // Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari 
    // per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. 
    // Si no, retorna 'num2 és més gran'.

export const compareNumbers = (num1, num2) => { 
    return num1 > num2 
    ? `${num1} és més gran que ${num2}`
    : `${num2} és més gran que ${num1}`
}


// --------------------------------------------------
// Exercici 1.2.3
    // 1ª part del exercici :
    // Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris 
    // per determinar si un número és positiu, negatiu o zero.

export const determineNumberType  = num => {
    return num === 0 
        ? "Es zero" 
        : num > 0 
            ? "Es positiu"
            : "Es negatiu"
} 

    // 2ª part del exercici :
    // Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) 
    // i utilitzi l'operador ternari per determinar el valor màxim.

export const trobarMaxim = (a, b, c) => {
    // return Math.max(a, b, c);
    return a > b && a > c 
        ? a
        : b > c 
            ? b
            : c
}


// --------------------------------------------------
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


// --------------------------------------------------
// Exercici 1.3.1
    // Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. 
    // La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

export function processar(nombre, callback){
    return callback(nombre);
}


// --------------------------------------------------
// Exercici 1.3.2
    // Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. 
    // La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

export function calculadoraCB(n1, n2, callback){
    return callback(n1, n2);
}


// --------------------------------------------------
// Exercici 1.3.3
    // Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. 
    // La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

export function esperarISaludar(name, callback){
    setTimeout(() => {
        callback(name);
    }, 2000);
}


// --------------------------------------------------
// Exercici 1.3.4
    // Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. 
    // La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

export function processarElements(array, callback){
    array.forEach(callback);
}


// --------------------------------------------------
// Exercici 1.3.5
    // Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. 
    // La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.

export function processarCadena(cadenaCaracters, callback){
    const cadenaUpper = cadenaCaracters.toUpperCase();
    return callback(cadenaUpper);
}


// --------------------------------------------------
// Exercici 1.4.1
    // Operador Spread en Arrays: Crea dues arrays, array1 i array2. 
    // Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

const arraySpreadOne = [1, 2, 3, 4, 5];
const arraySpreadTwo = [6, 7, 8, 9, 10];
export const sumArrays = [...arraySpreadOne, ...arraySpreadTwo]


// --------------------------------------------------
// Exercici 1.4.2
    // Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest 
    // per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

export const sumarRest = (...rest) =>{
    let suma = 0;
    rest.forEach((n) => {
        suma += n;
    })
    return suma;
}


// --------------------------------------------------
// Exercici 1.4.3
    // Copiant objectes amb Spread: Crea un objecte 'objecte1'. 
    // Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. 
    // Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

export const objecte1 = {
    name: "Jordi",
    mail: "jordimiravet.dev@gmail.com"
}

export const objecte2 = {...objecte1, name: "Marc", mail: "marcviaplana.dev@gmail.com"}


// --------------------------------------------------
// 1.4.4 
    // Rest en Destructuring: Crea una array amb diversos elements. 
    // Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, 
    // i després assignar la resta dels elements a una tercera variable.

export const arrayRestTwo = [2, "pedra", null, true, "casa", 53]
const [ element1, element2, ...resta ] = arrayRestTwo;


// --------------------------------------------------
// 1.4.5 
    // Spread en Funcions: Crea una funció que accepti tres arguments.
    // Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

const threeArguments = (a, b, c) => {
    return [a , b , c];
}

const arrayThreeArguments = ["Pilota", false , 99 ];
export const callResult = threeArguments(...arrayThreeArguments)


// --------------------------------------------------
// 1.4.6 
    // Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. 
    // Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

const objecteFusio1 = {
    name: "Jordi",
    lastName: "Miravet"
};

const objecteFusio2 = {
    mail: "jordimiravet.dev@gmail.com"
};

export const objecteFusionat = { ...objecteFusio1, ...objecteFusio2 };


// --------------------------------------------------
// 1.5.1
    // Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

const mapArray = [1, 2, 3, 4]
export const mapArraySquare = mapArray.map( (n) => n**2 );


// --------------------------------------------------
// 1.5.2
    // Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

const filterArray = [1, 2, 3, 4];
export const filterArrayEven = filterArray.filter( n => n % 2 === 0);


// --------------------------------------------------
// 1.5.3
    // Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.

const findArray = [1, 10 , 8, 11];
export const findArrayFirstNum = findArray.find( n => n > 10);


// --------------------------------------------------
// 1.5.4
    // Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.

const reduceArray = [13, 7, 8, 21];
export const reduceArraySuma = reduceArray.reduce((base, n) => base += n, 0);


// --------------------------------------------------
// 1.5.5
    //Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:
        // - Filtra els nombres majors o iguals a 10.
        // - Multiplica cada nombre filtrat per 2.
        // - Calcula la suma dels nombres filtrats i multiplicats per 2.
        // - La funció ha de retornar el resultat de la suma.

const arrayMulti = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];
export const arrayMultiMake = arrayMulti.filter(n => n >= 10).map(n => n*2).reduce((base, n) => base + n, 0);


// --------------------------------------------------
// 1.5.6 
    // Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

const numberMoreThanTen = n => n > 10;
const arrayEveryAndSome = [11, 12, 13, 14];

export const arrayEvery = arrayEveryAndSome.every(numberMoreThanTen);
export const arraySome = arrayEveryAndSome.some(numberMoreThanTen);


// --------------------------------------------------
// 1.6.1
    // forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

const arrayForEach = ['Anna', 'Bernat', 'Clara'];

    // const arrayForEachNames = arrayForEach.forEach( name => console.log(name))
export function arrayForEachNames(){ arrayForEach.forEach( name => console.log(name)); } 


// --------------------------------------------------
// 1.6.2
    // for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

const arrayForOfNames = ['Anna', 'Bernat', 'Clara'];

export function arrayForOf(){
    for( const name of arrayForOfNames){
        console.log(name)
    }
}


// --------------------------------------------------
// 1.6.3
    // filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. 
    // let numeros = [1, 2, 3, 4, 5, 6];

const arrayFilter = [1, 2, 3, 4, 5, 6];
export const newArrayFilter = arrayFilter.filter(n => n % 2 === 0)


// --------------------------------------------------
// 1.6.4
    // for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; 
    // Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.

let obj = { nom: "Ona", edat: 25, ciutat: 'Barcelona' };

export const forInKeyValue = () => {
    for( const key in obj){
        console.log(key, ":", obj[key])
    }
}


// --------------------------------------------------
// 1.6.5
    // for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5,
    // llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];

let numeros = [1, 2, 3, 4, 5, 6]

export const numerosBreak = () => {
    let newNumeros = [];
    for(const numero of numeros){
        newNumeros.push(numero);
        if(numero === 5) break;
    }
    console.log(newNumeros)
}


// --------------------------------------------------
// 1.6.6
    // for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): 
    // let noms = ['Anna', 'Bernat', 'Clara']

let noms = ['Anna', 'Bernat', 'Clara']

export const forOfIndex = () => {
    for(const [i, nom] of noms.entries()){
        console.log(nom , i);
    }
}


// --------------------------------------------------
// 1.7.1
    // Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

export function functionPromise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hola, món");
        }, 2000);
    });
}


// --------------------------------------------------
// 1.7.2
    // Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.

export const functionPromiseThen = () => {
    const promise =  new Promise((resolve) => {
        setTimeout(() => resolve("Hola, món"), 2000)
    })
    promise.then((resultat) => console.log(resultat));
}


// --------------------------------------------------
// 1.7.3
    // Promesa amb reject: 
    // Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

export const functionPromiseReject = (input) => {
    const promiseReject = new Promise((resolve, reject) => {
        setTimeout(() => {
            input == "Hola" 
            ? resolve("Correcte")
            : reject("Incorrecte")
        }, 2000)
    })

    promiseReject.then((result) => console.log(result))
}


// --------------------------------------------------
// 1.7.4
    // Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1,
    // i que després imprimeixi aquest resultat a la consola.

export const functionAsyncAwait = async () => {
    let promise = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hola, món!")
        }, 2000);
    });
    console.log(promise);
}


// --------------------------------------------------
// 1.7.5
    // Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

export const functionTryCatch = async () => {
    try{
        let promise = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const message = "Hola, món"
                message === "Hola, món"
                    ? resolve("Ha sortit be")
                    : reject("Ha sortit malamen");
            }, 2000)
        });
        console.log("Missatge de succes :", promise );
    } catch (error) {
        console.log("Missatge d'error :", error);
    }
}


// --------------------------------------------------
// 1.7.6
    // Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. 
    // Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.
    
export const promiseAll = () => {
    let promiseOne = new Promise((resolve, reject) => {
        setTimeout(() => {
            const response = true;
            if(response){
                resolve("Tot ha anat be");
            } else {
                reject("Alguna cosa ha fallat");
            }
        }, 2000)
    });
    let promiseTwo = new Promise((resolve, reject) => {
        setTimeout(() => {
            const response = true;
            if(response){
                resolve("Tot ha anat be");
            } else {
                reject("Alguna cosa ha fallat");
            }
        }, 3000)
    });
    Promise.all([promiseOne, promiseTwo])
        .then((succes) => {
            console.log(succes)
        })
        .catch((error) => {
            console.log(error)
        });
}
    