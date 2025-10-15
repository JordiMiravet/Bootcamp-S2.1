"use strict"

import { messages, isEmpty, isNotNumber, isOutOfRange, print } from "./helpers.js";
import { add, randomNumber, createPerson, returnNumbers, countDown,
    potConduir, compareNumbers, determineNumberType, trobarMaxim, parOImpar,
    processar, calculadoraCB, esperarISaludar, processarElements, processarCadena, 
    sumArrays, sumarRest, objecte1, objecte2, arrayRestTwo, callResult, objecteFusionat,
    mapArraySquare, filterArrayEven, findArrayFirstNum, reduceArraySuma, arrayMultiMake, arrayEvery, arraySome, 
    arrayForEachNames, arrayForOf, newArrayFilter, forInKeyValue, numerosBreak, forOfIndex } from "./functions.js"

document.addEventListener("DOMContentLoaded", () => {

    // --------------------------------------------------
    //  Exercici 1.1
    // Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. 
    // Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.

    function getInputsSum(){
        const num1 = parseFloat(document.getElementById("number1").value);
        const num2 = parseFloat(document.getElementById("number2").value);
        const resultSuma = document.getElementById("resultSuma");

        return { num1, num2, resultSuma }
    }

    const validateSuma = () => {
        const { num1, num2 } = getInputsSum();

        if(isEmpty(num1) || isEmpty(num2)) return "empty";
        if(isNotNumber(num1) || isNotNumber(num2)) return "notNumber";

        return true;
    };

    const formSum = document.getElementById("formSuma");

    formSum.addEventListener("submit", (e) => {
        e.preventDefault();

        const {num1, num2, resultSuma } = getInputsSum();
        const validate = validateSuma();
        if(validate){
            const suma = add(num1, num2); 
            print(resultSuma, `La suma de ${num1} i ${num2} es ${suma}`);
        } else {
            print (resultSuma, validate === "empty"
                ? messages.isEmpty
                : messages.isNotNumber
             )
        }
    })

    // --------------------------------------------------
    // Exercici 1.2
    // Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber que no necessiti paràmetres 
    // i que retorni un número aleatori entre 0 i 100.

    const buttonRandom = document.getElementById("buttonRandom");

    function getInputs12(){
        const resultRandomNum = document.getElementById("result12");

        return { resultRandomNum };
    }

    buttonRandom.addEventListener("click", () => {
        const { resultRandomNum } = getInputs12();
        const randomNum = randomNumber()

        print( resultRandomNum, randomNum);
    })

    // --------------------------------------------------
    // Exercici 1.1.3
    // Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name i una funció greet 
    // que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que inclogui el nom de la persona. 
    // Per exemple: console.log(Hola, ${this.name});.

    function getInputsPerson() {
        const namePerson = document.getElementById("inputName").value;
        const resultPerson = document.getElementById("resultPerson");
        return { namePerson, resultPerson };
    }

    function validatePerson(){
        const { namePerson } = getInputsPerson();
        if (isEmpty(namePerson)) return "empty";
        return true;
    }

    const formGreet = document.getElementById("form3");

    formGreet.addEventListener("submit", (e) => {
        e.preventDefault();

        const { namePerson, resultPerson } = getInputsPerson();

        const validate = validatePerson();
        if(validate){
            const person = createPerson(namePerson);
            const greetings = person.greet();

            print(resultPerson, greetings);  
        } else {
            print(resultPerson, messages.isEmpty);
        }
    });

    // --------------------------------------------------
    // Exercici 1.1.4
    // Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números 
    // i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.

    const arrayButton = document.getElementById("arrayButton");

    arrayButton.addEventListener("click", () => {   
        console.clear()
        returnNumbers(); 
    });

    // --------------------------------------------------
    // Exercici 1.1.5
    // Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.

    const buttonSet = document.getElementById("setTimeOutButton");

    buttonSet.addEventListener("click", () => {
        countDown();
    });

    // --------------------------------------------------
    // Exercici 1.2.1
    // Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre 
    // i utilitzi l'operador ternari per determinar si l'usuari pot conduir. Si l'edat és 18 o més, ha de retornar 'Pots conduir'. 
    // Si no, ha de retornar 'No pots conduir'.

    const formAge = document.getElementById("form4");

    function getInputsAge(){
        const age = parseInt(document.getElementById("inputAge").value);
        const resultAge = document.getElementById("resultAge");

        return { age, resultAge };
    }

    function validateAge(age){
        if(isEmpty(age) || isNotNumber(age) || isOutOfRange(age)) return false
        return true;
    }

    formAge.addEventListener("submit", (e) => {
        e.preventDefault();

        const { age, resultAge } = getInputsAge();
        const validate = validateAge(age);
    
        if(validate){
            const fitToDrive = potConduir(age);
            print(resultAge, fitToDrive);
        } else {
            print( resultAge, messages.isOutOfRange);
        }
    });

    // --------------------------------------------------
    // Exercici 1.2.2
    // Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari 
    // per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, retorna 'num1 és més gran'. 
    // Si no, retorna 'num2 és més gran'.

    function getInputsCompare() {
        const compNum1 = parseInt(document.getElementById("compareInput1").value);
        const compNum2 = parseInt(document.getElementById("compareInput2").value);
        const resultCompare = document.getElementById("resultCompare");

        return { compNum1, compNum2, resultCompare };
    }

    const formCompare = document.getElementById("formCompare");

    formCompare.addEventListener("submit", (e) => {
        e.preventDefault();
        const { compNum1, compNum2, resultCompare } = getInputsCompare();
        const textCompare = compareNumbers(compNum1, compNum2);

        print(resultCompare, textCompare)
    });

    
    // --------------------------------------------------
    // Exercici 1.2.3

    // Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors ternaris 
    // per determinar si un número és positiu, negatiu o zero.

    function getInputsType(){
        const typeNumber = parseInt(document.getElementById("inputTypeNumber").value);
        const resultTypeNumber = document.getElementById("resultTypeNumber");

        return { typeNumber, resultTypeNumber };
    }
    
    const formType = document.getElementById("formTypeNumber");

    formType.addEventListener("submit", (e) => {
        e.preventDefault();
        const { typeNumber, resultTypeNumber } = getInputsType();
        const textNumber = determineNumberType (typeNumber);

        print(resultTypeNumber, textNumber);
    })


    // Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) 
    // i utilitzi l'operador ternari per determinar el valor màxim.

    function getInputsMax(){
        const maxNum1 = parseInt(document.getElementById("maxInput1").value);
        const maxNum2 = parseInt(document.getElementById("maxInput2").value);
        const maxNum3 = parseInt(document.getElementById("maxInput3").value);

        const resultMax = document.getElementById("resultMax");

        return { maxNum1, maxNum2, maxNum3, resultMax };
    }

    const formMax = document.getElementById("formMax");

    formMax.addEventListener("submit", (e) => {
        e.preventDefault();
        const { maxNum1, maxNum2, maxNum3, resultMax } = getInputsMax()
        const numMaxim = trobarMaxim(maxNum1, maxNum2, maxNum3);

        print(resultMax, `El nº mes gran es ${numMaxim}`)
    });


    // --------------------------------------------------
    // Exercici 1.2.4

    // Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de números i utilitzi un bucle per a recórrer l'array. 
    // Dins del bucle, utilitza l'operador ternari per a determinar si cada número és parell o imparell.

    const buttonAdd = document.getElementById("buttonAddNumbers");
    const buttonEvenOrOdd = document.getElementById("buttonEvenOrOdd");

    const resultEvenOrOdd = document.getElementById("resultEvenOrOdd");

    const arrayElements = [];

    buttonAdd.addEventListener("click", () => {
        const inputElement = document.getElementById("inputNumberArray");
        const numberArray = parseInt(inputElement.value);

        if (!isEmpty(numberArray) && !isNotNumber(numberArray)) {
            arrayElements.push(numberArray);
        }
        inputElement.value = "";
    });

    buttonEvenOrOdd.addEventListener("click", () => {

        const resultParOImpar = parOImpar(arrayElements);

        print(resultEvenOrOdd, resultParOImpar.join(" / "));
    });

    // ----------------------------------------------------------------------------------------------------
    // Exercici 1.3.1
    // Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. 
    // La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.

    function getInputsCB(){
        const number = parseInt(document.getElementById("inputNumberCB").value);
        const result = document.getElementById("resultCallback");

        return { number, result };
    }

    const formCB = document.getElementById("formCallback");

    formCB.addEventListener("submit", (e) => {
        e.preventDefault();
        const { number, result } = getInputsCB();

        const scoreCallback = processar(number, (n) => n**2);
        print(result, scoreCallback);
    });

    // --------------------------------------------------
    // Exercici 1.3.2
    // Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. 
    // La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.

    const formCallback2 = document.getElementById("formCallback2");

    function getInputsCB2(){
        const number1 = parseInt(document.getElementById("inputB2NumberOne").value);
        const number2 = parseInt(document.getElementById("inputB2NumberTwo").value);
        const result = document.getElementById("resultCallback2");

        return { number1, number2, result };
    }

    formCallback2.addEventListener("submit", (e) => {
        e.preventDefault();

        const { number1, number2, result } = getInputsCB2();
    
        const scoreCallback = calculadoraCB(number1, number2, (a, b) => a + b);
        print(result, scoreCallback );
    });

    // --------------------------------------------------
    // Exercici 1.3.3
    // Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. 
    // La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

    function getInputsCB3(){
        const name = document.getElementById("inputB3name").value;
        const result = document.getElementById("resultCallback3");

        return { name, result }
    }

    const formCallback3 = document.getElementById("formCallback3");
    
    formCallback3.addEventListener("submit", (e) => {
        e.preventDefault();

        const { name, result } = getInputsCB3();
        
        esperarISaludar(name, function(nom){
            result.textContent = "Hola, " + nom + " con 2 segundos de retraso! xD";
        });
      
    });

    // --------------------------------------------------
    // Exercici 1.3.4
    // Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. 
    // La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

    const arrayCallback = [1, 5, -4, 6, 12];
    document.getElementById("buttonCB4").addEventListener("click", () => {
        const result = document.getElementById("resultCB4");

        
        const arrayTexts = [];

        processarElements(arrayCallback, num => {
            const text = num % 2 === 0 
                ? `${num} es par` 
                : `${num} es impar`;
            arrayTexts.push(text); 
        });

        print(result, arrayTexts.join(" / "));
    });

    // Exercici 1.3.5
    // Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. 
    // La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.

    document.getElementById("buttonCB5").addEventListener("click", () => {
        const result = document.getElementById("resultCB5");

        const textCadena = processarCadena("hola clase!", function(resultat){
            return "Cadena amb majúscules: ", resultat
        });

        print(result, textCadena);
    });

    // Exercici 1.4.1
    // Operador Spread en Arrays: Crea dues arrays, array1 i array2. 
    // Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

    const buttonSpreadOne = document.getElementById("buttonSpreadOne");
    buttonSpreadOne.addEventListener("click", () => {
        const result = document.getElementById("resultSpreadOne");
        
        print(result, `L'Spread emprat es veuria aixi : ${sumArrays.join(", ")}`);
    });

    // Exercici 1.4.2
    // Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest 
    // per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

    const arrayNumbersRest = [];

    const buttonRestOne = document.getElementById("buttonRestOne");
    buttonRestOne.addEventListener("click", () => {

        const number = parseInt(document.getElementById("inputRestNumber").value);
        const result = document.getElementById("resultRestOne");

        if(isEmpty(number) || isNotNumber(number)){
            print(result, messages.isNotNumber);
        } else {
            arrayNumbersRest.push(number)
            print(result, sumarRest(...arrayNumbersRest));
        }  
    })

    // Exercici 1.4.3
    // Copiant objectes amb Spread: Crea un objecte 'objecte1'. 
    // Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. 
    // Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

    const buttonSpreadThree = document.getElementById("buttonSpreadThree");
    buttonSpreadThree.addEventListener("click", () => {
        const result = document.getElementById("resultSpreadThree");

        print(result, `Primer Objecte : ${objecte1.name} ${objecte1.mail}
            Segon Objecte : ${objecte2.name} ${objecte2.mail} (copiat i modificat)`)
    })

    // 1.4.4 
    // Rest en Destructuring: Crea una array amb diversos elements. 
    // Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, 
    // i després assignar la resta dels elements a una tercera variable.

    const buttonRestFour = document.getElementById("buttonRestFour");
    buttonRestFour.addEventListener("click", () => {
        
        const [ element1, element2, ...resta ] = arrayRestTwo;

        console.log(arrayRestTwo);
        console.log(element1);
        console.log(element2);
        console.log(...resta);

    });

    // 1.4.5 
    // Spread en Funcions: Crea una funció que accepti tres arguments.
    // Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

    const buttonSpreadFive = document.getElementById("buttonSpreadFive");
    buttonSpreadFive.addEventListener("click", () => {
        const result = document.getElementById("resultSpreadFive");
    
        print(result, callResult.join(" / "))
    });

    // 1.4.6 
    // Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. 
    // Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

    const buttonSpreadSix = document.getElementById("buttonSpreadSix");
    buttonSpreadSix.addEventListener("click", () => {
        console.log(objecteFusionat)

    });

    // 1.5.1
    // Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.
    
    const buttonMap = document.getElementById("buttonMap");
    buttonMap.addEventListener("click", () => {
        const result = document.getElementById("resultMap");

        print(result, mapArraySquare.join(" / "))
    });

    // 1.5.2
    // Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

    const buttonFilter = document.getElementById("buttonFilter");
    buttonFilter.addEventListener("click", () => {
        
        const result = document.getElementById("resultFilter");
        print(result, filterArrayEven.join(" / "));
    });

    
    // 1.5.3
    // Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.

    const buttonFind = document.getElementById("buttonFind");
    buttonFind.addEventListener("click", () => {
        const result = document.getElementById("resultFind");

        print(result, findArrayFirstNum);
    });

    // 1.5.4
    // Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.

    const buttonReduce = document.getElementById("buttonReduce");
    buttonReduce.addEventListener("click", () => {
        const result = document.getElementById("resultReduce");

        print( result, reduceArraySuma)
    });

    // 1.5.5
    //Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:
        // - Filtra els nombres majors o iguals a 10.
        // - Multiplica cada nombre filtrat per 2.
        // - Calcula la suma dels nombres filtrats i multiplicats per 2.
        // - La funció ha de retornar el resultat de la suma.

    const buttonMulti = document.getElementById("buttonMulti");
    buttonMulti.addEventListener("click", () => {
        const result = document.getElementById("resultMulti");

        print( result, arrayMultiMake)
    });

    // 1.5.6 
    // Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

    function getInputsEveryAndSome(){
        const result = document.getElementById("resultEveryAndSome");
        return { result };
    }
    
    const buttonEvery = document.getElementById("buttonEvery");
    buttonEvery.addEventListener("click", () => {
        const { result } = getInputsEveryAndSome();
        print(result, arrayEvery ? "Si, tots son majors que 10" : "no, no tots son majors que 10")
    });

    const buttonSome = document.getElementById("buttonSome");
    buttonSome.addEventListener("click", () => {
        const { result } = getInputsEveryAndSome();

        print(result, arraySome ? "Si, algun/s número es major que 10" : "no, cap número es major que 10")
    });

    // 1.6.1
    // forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: 
    // let noms = ['Anna', 'Bernat', 'Clara'];

    const buttonForEachName = document.getElementById("buttonForEachName");
    buttonForEachName.addEventListener("click", () => {
        arrayForEachNames()
    })

    // 1.6.2
    // for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: 
    // let noms = ['Anna', 'Bernat', 'Clara'];

    const buttonForOfName = document.getElementById("buttonForOfName");
    buttonForOfName.addEventListener("click", () => {
        arrayForOf();
    })
    
    // 1.6.3
    // filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. 
    // let numeros = [1, 2, 3, 4, 5, 6];

    const buttonFilterArray = document.getElementById("buttonFilterArray") ;
    buttonFilterArray.addEventListener("click", () => {
        const result = document.getElementById("resultFilterArray");
        print(result, newArrayFilter.join(" / "))
    });

    // 1.6.4
    // for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; 
    // Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.

    const buttonForInKeyValue = document.getElementById("buttonForInKeyValue");
    buttonForInKeyValue.addEventListener("click", () => {
        console.clear();
        forInKeyValue();
    })

    // 1.6.5
    // for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5,
    // llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];
    
    const buttonNumbersBreak = document.getElementById("buttonNumbersBreak");
    buttonNumbersBreak.addEventListener("click", () => {
        console.clear();
        numerosBreak();
    });

    // 1.6.6
    // for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): 
    // let noms = ['Anna', 'Bernat', 'Clara']

    const buttonForOfIndex = document.getElementById("buttonForOfIndex");
    buttonForOfIndex.addEventListener("click", () => {
        console.clear();
        forOfIndex();
    });

    
    


    
    
    

    


     
    
     





    
    
    




    

    




    

































}); // DOMContentLoaded







