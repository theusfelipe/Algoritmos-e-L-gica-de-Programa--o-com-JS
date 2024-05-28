let minhaVariavelPar = 10;

// Função para verificar se um valor é um número
function isNumber (value) {
    return typeof value === 'number';
} 

// Função para verificar se um número é par
function isEven(number) {
    return number % 2 === 0;
}


// Verificação do tipo e se é par
if (isNumber(minhaVariavelPar)) {
    if (isEven(minhaVariavelPar)) {
        console.log("É um número par");
    } else {
        console.log("Não é um número par");
    }
} else {
    console.log("Não é um número");
}