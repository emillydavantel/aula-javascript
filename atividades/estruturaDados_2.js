let pessoas = [
    { id: 1, nome: "Alice", idade: 25, profissao: "Engenheira" },
    { id: 2, nome: "Bob", idade: 30, profissao: "Designer" },
    { id: 3, nome: "Charlie", idade: 22, profissao: "Dev" }, // virgula e opcional = se for uma estrutura json, caso não tenha outro valor abaixo, a virgula e proibida
]

// adicona um novo elemento na array
pessoas.push({ id: 4, nome: "Diana", idade: 28, profissao: "Analista" })


// Acessa propriedades de um objeto na array
console.log("\nInformacoes de bob: ")
console.log("Nome: ", pessoas[1].nome)
console.log("Idade: ", pessoas[1].idade)
console.log("Profissao: ", pessoas[1].profissao)

// Metodo array - tamanho
console.log("\nMetodo array: ")
console.log("Numero de pessoas: ", pessoas.length)

// Filtra pessoas com idade superiior a 25 anos
let maioresDe25 = pessoas.filter(function (pessoa) {
    return pessoa.idade > 25
})
console.log("Pessoas com mais de 25 anos")
console.log(maioresDe25)

// Cria uma array apenas de nomes
let nomes = pessoas.map(function (pessoa) {
    return pessoa.nome
}) // precisa de retorno (declaracao implicita)
console.log("Array de nomes: ")
console.log(nomes)


let nomesForEach = pessoas.forEach(function (pessoa) {
    return pessoa.nome
}) // nao precisa de retorno (declaracao implicita)

