var num1 =Number.parseInt(prompt('Digite um número: '))
var num2 =Number.parseInt(prompt('Digite um outro número: '))

var soma = num1 + num2

console.log(`a soma dos números é: ${soma}`)

var resultado = document.getElementById('area')

resultado.innerHTML = `<h1>A soma dos números é: ${soma}<h1/>`