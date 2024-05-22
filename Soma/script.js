/*
Solicite 2 numeros, faça a soma deles
e apresente o resultado final ao usuario
*/

alert("Soma entre dois números...")
let NumberOne = prompt("Escreve o primeiro número: ")
let NumberTwo = prompt("Escrevao o segundo número: ")

NumberOne = Number(NumberOne);
NumberTwo = Number(NumberTwo);

let soma = (NumberOne + NumberTwo);

alert(`A soma dos dois números é: ${soma} `)
