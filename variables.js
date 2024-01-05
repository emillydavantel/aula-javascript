// declaracao
// let, var e const

// global
var nameVar = "string - conjunto de caracteres" // o valor inicial é opcional - type String

function scope() {
    console.log("var: ", nameVar)

    // local
    let nameLet = true // boolean = true or false
    console.log("let: ", nameLet)

    // block
    const nameConst = 10 // number
    console.log("const: ", nameConst)

}


function scope2() {
    // console.log(nameLet)
    // console.log(nameConst)
    console.log(nameVar) // sucesso
}

scope()
scope2()

// Fracamente tipado
nameVar = "Alterado"
console.log("var: ", nameVar)

// nameLet, por estar fora do scopo, pode ser redeclarada
let nameLet = 1 // number
nameLet = true // boolean

