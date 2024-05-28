/*
Crie um script que declare uma variável e verifique se o valor
é uma string. Se for exiba a mensagem "é uma string", caso não
exiba a mensagem "não é uma string".
*/

let minhaString = "É uma string?";

if (typeof minhaString === 'string') {
    console.log(`É uma string`)
} else {
    console.log(`Não é uma string`)
}