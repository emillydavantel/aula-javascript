// Inicia dicionario
var pessoa = {
    nome: "Carlos",
    idade: 28,
    profissao: "Dev"
}

// inicia array de numeros
let numeros = [1, 2, 3, 4, 5]
//             0  1  2  3  4 

//Métodos de array
console.log("Array original: ", numeros.join(", "))

// adiciona elemento no final da array
numeros.push(6)
console.log(numeros)

// remove elemento no final da array
numeros.pop()
console.log(numeros)

// adiciona elemento no inicio da array
numeros.unshift(0)
console.log(numeros)

// remove o primeiro elemento da array
numeros.shift()
console.log(numeros)

// encontra a posicao de um elemento no array
let posicaoDois = numeros.indexOf(2)
console.log("Posicao 2: ", posicaoDois)

// remove elemento a partir de uma determinada posicao
numeros.splice(1, 2) // (indice, quantidade)
console.log(numeros)


