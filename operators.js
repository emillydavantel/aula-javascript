// Operadores matematicos, atribuicao, comparacao e logicos

// ---------------------------------------------
// Operadores matematicos
// +
// -
// *
// **
// /
// %
// ++
// --

// Examples:

const resultAddUp = 10 + 5 // 15
const resultSub = 10 - 5 // 10
const resultMult = 10 * 5 // 50
const resultExpo = 10 ** 2 // 100
const resultDiv = 10 / 2 // 5
const resultDivRema = 3 % 2 // 1
const resultIncrem = 1
resultIncrem++ // 2
const resultDecrem = 2
resultDecrem-- // 1
// ---------------------------------------------


// Operadores atribuicao
// =
// +=
// -=
// *=
// /=
// %=
// **=

let igual = "a"

let x = 1
x += 3 // x = 1 + 3

x = 1
x -= 3 // x = 1 - 3

x = 1
x *= 3 // x = 1 * 3

x = 1
x /= 3 // x = 1 / 3

x = 1
x %= 3 // x = 1 % 3

x = 1
x **= 3 // x = 1 ** 3
// ---------------------------------------------


// Operadores comparacao
// ==
// ===
// !=
// !==
// >
// <
// >=
// <=
// ?

const primeiro = 10
const segundo = 5

if (primeiro === segundo) { } //false
if (primeiro == segundo) { } // false - verifica somente se é o mesmo valor, não o mesmo tipo (nao recomendado)
if (primeiro !== segundo) { } //true
if (primeiro != segundo) { } // true - verifica somente se é o mesmo valor, não o mesmo tipo (nao recomendado)
if (primeiro > segundo) { } //true
if (primeiro < segundo) { } //false
if (primeiro >= segundo) { } //true
if (primeiro <= segundo) { } //false

primeiro > segundo ? true : false

// ---------------------------------------------


// Operadores logicos
// &&  = AND (se todos forem verdadeiros retorna verdadeiro)
// ||  = OR (se um deles for verdadeiro, retorne verdadeiro)
// !   = NOT (se verdadeiro, retorne falso. Se falso, retorne verdadeiro)

// Se fizer sol "E" fizer calor eu vou ao clube (AND)
// se fizer sol "OU" fizer calor eu vou ao clube (OR)
// se fizer sol "E" fizer calor eu vou ao clube (NOT) = Você não vai ao clube


const number1 = 10
const number2 = 5

if (number1 > number2 && number2 === 5) { } //1
if (number1 > number2 || number2 === 5) { } //2
if (number1 < number2 || number2 === 4) { } //3
if (number1 < number2 || number2 === 5) { } //4
if (!(number1 < number2 || number2 === 4)) { } //5


// tabela verdade
// 1 - true && true = true
// 2 - true || true = true
// 3 - false || false = false
// 4 - false || true = true
// 5 - false ! false = true

