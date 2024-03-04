let age = 41;
let years = 10;
console.log(age);
//console.log(years);
age = 36;
console.log(age);

const piNumber = 3.14;
console.log(piNumber);
// valorile din constante nu pot fi schimbate

let userName = 'Valentin';
console.log('name: ');
console.log(userName);

// Operatori data numerice
// adunare
let firstNumber = 10;
firstNumber = 12;
let secondNumber = 21;
let sum = firstNumber + secondNumber;
console.log(`Rezultatul sumei dintre ${firstNumber} si ${secondNumber} este ${sum}`);
// string interpolation

// scadere
let pastAge = age - years;
console.log(`Acum ${years} ani aveam varsta de ${pastAge}`);
console.log(`Acum ${years} ani aveam varsta de ${age - years}`);

// inmultire
let numberA = 5;
let numberB = 10;
let multiplyResult = numberA * numberB;
console.log(`${numberA} inmultit cu ${numberB} da ${multiplyResult}`);

// impartire
let numberC = 25;
let numberD = 10;
let divisionResult = numberC / numberD;
console.log(`${numberC} impartit la ${numberD} rezulta ${divisionResult}`);

// restul impartirii
let numberE = 15;
let numberF = 4;
let moduloResult = numberE % numberF;
console.log(`Restul impartirii lui ${numberE} la ${numberF} este ${moduloResult}`);
