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

// cum aflam cel mai mare numar de tip number
console.log(Number.MAX_SAFE_INTEGER);

// cum aflam cel mai muc numar de tip number
console.log(Number.MIN_SAFE_INTEGER);

// numere de top BugInt
let bigIntNumber = 1223456;
console.log(`BigInt value is ${bigIntNumber}`);

// String operation
const myName = 'Valentin Stefan';

// afisarea unui caracter de la o pozitie
// primul carcater
const firstCharInName = myName[0];
console.log(`Primul caracter din sirul'${myName}' este ${firstCharInName}`);

// lungimea sirului
const myNameLenght = myName.length;
console.log(`Lungimea sirului '${myName}' este ${myNameLenght}`);

// ultimul caracter din string

let lastCharIndex = myNameLenght - 1;
let lastChar = myName[lastCharIndex];
console.log(`Ultimul caracter din sir este ${lastChar}`);

// concatenare de stringuri
let firstName = 'Valentin';
let lastName = 'Stefan';
let separator = ' '
let fullName = firstName + separator + lastName;
console.log(`Numele meu complet este ${fullName}`);

// verificare numar par/impar

let checkedNumber = 21;

let remainder = checkedNumber % 22

let isEven = remainder === 0;
console.log(`Number ${checkedNumber} is even: ${isEven}`);

// Date booleane (true/false)

let isAdult = true;
console.log(`isAdult = ${isAdult}`);
let isOld = false;
console.log(`isOld = ${isOld}`);

// date null sau undefined

let nullValue = null;
console.log(`nullValue = ${nullValue}`);

let notInitialized;
console.log(`notInitialized = ${notInitialized}`);

// adaugare +1 la un numar
let x = 10;
console.log(`x=`, x);

x++;
console.log(`x=`, x);

// operatii de comparatie

// compararea egalitatii ==
let value1 = 22;
let value2 = 22;
let value3 = 23;
let value4 = `22`;

let firstCompareResult = value1 == value2;
console.log(`${value1} == ${value2} => ${firstCompareResult}`);
let secondCompareResult = value1 == value3;
console.log(`${value1} == ${value3} => ${secondCompareResult}`);
let stringAndNumberEquality = value1 == value4;
console.log(`${value1} == ${value4} => ${stringAndNumberEquality}`);

// comparator egalitate stricta ===
let strictEqualCompare = value1 ===value4;
console.log(`${value1} === ${value4} => ${strictEqualCompare}`);

let strictEqualCompareNumbers = value1 === value2;
console.log(`${value1} === ${value2} => ${strictEqualCompareNumbers}`);

// comparator mai mic(<) mai mic sau egal (<=)
let num1 = 5;
let num2 = 6;
let num3 = 5;
let lessThanComparison = num1 < num2;
console.log(`${num1} < ${num2} => ${lessThanComparison}`);
let lessThanComparison2 = num2 < num2;
console.log(`${num2} < ${num1} => ${lessThanComparison2}`);
let lessOrEqualComparsion = num1 <= num2;
console.log(`${num1} <= ${num2} => ${lessOrEqualComparsion}`);
let lessOrEqualComparsion2 = num1 <= num3;
console.log(`${num1} <= ${num3} => ${lessOrEqualComparsion2}`);

