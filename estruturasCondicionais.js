// Estruturas condicionais no JavaScript
// Objetivo: entender e aplicar estruturas condicionais em JS para cirar logica de controle de fluxo

// Estrutura IF
// Permite executar um bloco de código se a condicao for verdadeira
// Assinatura
// if(condicao){verdadeiro}else{falso}


// estrutura somente com if - executa apenas se for verdadeiro
let temperatura = 25
if (temperatura > 30) {
    console.log("Está quente!")
} // Ele não entra no bloco, pois a condicao e falsa


// estrutura com if - else = executa X se for verdadeiro ou executa Y
let idade = 18
if (idade >= 18) { // condicao verdadeira
    console.log("Você é maior de idade") // executa o bloco verdadeiro
} else {
    console.log("Você é menor de idade") // não executa o bloco falso
}

// Operador ternario - forma abreviada de escrever uma estrutura condicional
let status = (idade >= 18) ? "Maior de idade" : "Menor de idade"
console.log(status)

// estrutura if - else - executa varias verificacoes
let hora = 14
if (hora < 12) {
    console.log("Bom dia!")
} else if (hora < 18) {
    console.log("Boa tarde!") // bloco verdadeiro
} else {
    console.log("Boa noite!")
}


// estrutura switch case - usado quando há mais de uma verificacao a ser feita
let diaDaSemana = 3
let mensagem = "" // let mensagem

switch (diaDaSemana) {
    case 1:
        mensagem = "Domingo"
        break
    case 2:
        mensagem = "Segunda"
        break
    case 3:
        mensagem = "Terça"
        break
    // varios outros cases
    default:
        mensagem = "Dia desconhecido"
}

console.log(mensagem)





