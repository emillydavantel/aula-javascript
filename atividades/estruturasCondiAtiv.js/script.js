let numero = prompt("Digite um numero: ") // qualquer coisa sera do tipo string

if (isNaN(parseInt(numero))) {
    alert("Digite um numero")
} else {
    let resultado = numero % 2 === 0 ? "par" : "impar"

    alert(`O número ${numero} é ${resultado}`)
}