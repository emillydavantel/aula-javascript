// tuple, dict, array

// Tuple = colecao imutavel
// (1, "nome", "idade")
// const tupleEx = (1, "abacaxi", true)
let tuple: [number, string, boolean]
tuple = [1, "name", true]


// ------------------------------
// dicionario (dict or dictionary) 
// { id: 1, name: "Emilly" }

const dicionarioEx = {
    id: 1,
    fruta: "Abacaxi",
    sabor: "Cítrico"
}

// Como acessar um dicionário
console.log(`O sabor da fruta ${dicionarioEx.fruta} é ${dicionarioEx.sabor}`)


// ------------------------------
// Array 
// [1, "palavra", true, [1, 2, 3], {id: 1, value: true}, [{id: 1, value: true}]]

let arr = ["Abacaxi", "Laranja", "Kiwi", "Limão"]
//index      0           1         2       3
//length  =  4  

// Acesso através do índice
console.log(arr[1]) // laranja
console.log(arr[0]) // Abacaxi
console.log(arr.length) // 4

arr[3] = "Amora"

