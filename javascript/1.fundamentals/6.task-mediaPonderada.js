/*
*Leia 2 valores de ponto flutuante de dupla precisão A e B, que correspondem a 2 notas de um aluno. 
A seguir, calcule a média do aluno, sabendo que a nota A tem peso 3.5 e a nota B tem peso 7.5 (A soma dos pesos portanto é 11). 
Assuma que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.
*/

let nota1 = prompt('Digite a nota 1: ')
let nota2 = prompt('Digite a nota 2: ')
let pesoNotaA = 3.5
let pesoNotaB = 7.5
nota1 = parseFloat(nota1) * pesoNotaA
nota2 = parseFloat(nota2) * pesoNotaB
const somaPesos = pesoNotaA + pesoNotaB
const media = (nota1 + nota2) / somaPesos

console.log('MÉDIA: ', media.toFixed(5))
