/*
* Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. 
* A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. 
* Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.
*/

let notaA = prompt('Digite a nota A: ')
let notaB = prompt('Digite a nota B: ')
let notaC = prompt('Digite a nota C: ')
notaA = parseFloat(notaA) * 2
notaB = parseFloat(notaB) * 3
notaC = parseFloat(notaC) * 5
const somaPesos = 2 + 3 + 5
const media = (notaA + notaB + notaC) / somaPesos

console.log('MEDIA: ' + media.toFixed(1))
