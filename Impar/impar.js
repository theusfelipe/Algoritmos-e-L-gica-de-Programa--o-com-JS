// Declaração da variável
let minhaVariavel = 7; // Você pode alterar este valor para testar diferentes casos

// Função para verificar se é número
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Função para verificar se é ímpar
function isOdd(number) {
    return number % 2 !== 0;
}

// Verificação e exibição da mensagem apropriada
if (isNumber(minhaVariavel)) {
    if (isOdd(minhaVariavel)) {
        console.log("É um número ímpar");
    } else {
        console.log("Não é um número ímpar");
    }
} else {
    console.log("Não é um número");
}