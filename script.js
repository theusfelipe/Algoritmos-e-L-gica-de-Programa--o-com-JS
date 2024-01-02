/*
Solicitar o nome do aluno e as 3 notas
do bimestre calcular a média daquele aluno.

A média positiva deverá ser maior que 6

Se o aluno passou do bimestre, dar os parabéns.

Se o aluno não passou no bimestre,
motivar o aluno a dar seu melhor na prova
de recuperação.


Em ambos os casos, mostre uma mensagem com o nome do aluno
e a nota.
*/
/*
    Fazer a média:
    (n1 + n2 + n3) / 3
*/
alert("Iremos calcular sua média bimestral...")
let studentName = prompt("Qual é o seu nome? ")
let n1 = prompt("Qual é a nota da primeira prova? ")
let n2 = prompt("Qual é a nota da segunda prova? ")
let n3 = prompt("Qual é a nota da terceria prova? ")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3
let result = average > 6
average = average.toFixed(2)

if (result) {
  alert("Parabéns " + studentName + "! sua média foi " + average)
} else {
  alert("Você não atingiu a média! Precisará fazer a recuperação, Estude mais!")
}
