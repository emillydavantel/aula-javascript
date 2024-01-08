// declarar variaveis
let numeroA = 10
let numeroB = 5

// Operadores aritmeticos
let soma = numeroA + numeroB
let sub = numeroA - numeroB
let multi = numeroA * numeroB
let divi = numeroA / numeroB
let resto = numeroA % numeroB

// operadores de comparacao
let igualdade = numeroA === numeroB
let diferente = numeroA !== numeroB
let maiorQue = numeroA > numeroB
let menorQue = numeroA < numeroB
let maiorOuIgual = numeroA >= numeroB
let menorOuIgual = numeroA <= numeroB

// operadores logicos
let andLogico = (numeroA > 5) && (numeroB < 10) // os dois devem ser verdadeiros para verdadeiro
let orLogico = (numeroA > 15) || (numeroB < 2) // um dos dois deve ser verdadeiro para verdadeiro
let notLogico = !(numeroA === numeroB) // inverte = se verdadeiro, falso. Se false, verdadeiro

// exibicao
console.log("Diferente: ", diferente)