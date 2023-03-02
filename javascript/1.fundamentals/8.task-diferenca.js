/*
* Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B 
* pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).
*/

let valorA = prompt('Digite o valor A: ')
let valorB = prompt('Digite o valor B: ')
let valorC = prompt('Digite o valor C: ')
let valorD = prompt('Digite o valor D: ')
valorA = parseInt(valorA)
valorB = parseInt(valorB)
valorC = parseInt(valorC)
valorD = parseInt(valorD)
const diferenca = (valorA * valorB - valorC * valorD)

console.log(diferenca)