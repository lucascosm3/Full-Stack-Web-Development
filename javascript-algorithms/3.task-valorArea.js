/*
*A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:
*Efetue o cálculo da área, elevando o valor de raio ao quadrado e multiplicando por π.
*/

let raio = prompt('Digite o Raio: ')
raio = parseFloat(raio)
console.log(typeof raio)
const area = Math.PI * Math.pow(raio, 2)

console.log(`Area = ${area} `)