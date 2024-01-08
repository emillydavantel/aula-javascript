// Loops = Blocos de repeticao no javaScript
// Objectivo: Compreender e aplicar blocos de repeticao em JS para criar iteracoes eficientes na aplicacao
// Blocos de repeticao (loops) - for e while são essenciais para executar determina instrucao ou conjunto de instrucoes varias vezes

// exemplo sem bloco de repeticao
// tabuada do 10
let dez1 = 10 * 1
let dez2 = 10 * 2
let dez3 = 10 * 3
let dez4 = 10 * 4
let dez5 = 10 * 5

console.log("10 x 1: ", dez1)
console.log("10 x 2: ", dez2)
console.log("10 x 3: ", dez3)
console.log("10 x 4: ", dez4)
console.log("10 x 5: ", dez5)


// loop com for
// assinatura
// for(varivavel de controle, condicao, incremento ou decremento)

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// inicializacao (let i = 1) inicializa a variavel de controle do loop
// condicao (i <= 5) define a condicao para o loop
// incremento (i++) incrementa a variavel de controle apos cada iteracao

// ------------------------------------------------

// estrutura de repeticao while - utilizado quando a condicao de repeticao nao e conhecida antecipadamente
// while(enquanto essa condicao for verdadeira execute){ o que sera executado }

let j = 1

console.log("\nWhile: ")
while (j <= 5) {
    console.log(j)
    j++
}

// inicializacao (let j = 1) inicializa a variavel de controle fora do loop
// condicao (j <= 5) define a condicao para continuar loop
// incremento (j++) incrementa a variavel de controle  dentro do loop


