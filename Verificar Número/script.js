/*
Crie um script que declare uma variável e verifique se o seu valor é número. 
Se for, exiba a mensagem  "É um número" caso contrário, exiba a mensagem 
"não é um número"  Exemplo: Typeof 
*/

let minhaVariavel = prompt("Escreva algo: ");

if (typeof minhaVariavel === 'number') {
    alert("É um número!")
} else {
    alert("Não é número!")
}
   