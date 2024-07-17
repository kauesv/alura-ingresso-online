/*
Crie uma função que aceite uma string como parâmetro, utilize a função 
parseInt para converter essa string em um número inteiro e retorne o resultado.
*/
let numeroString = "100";
console.log(typeof(numeroString)); // string

function StringToInt(string){
    return parseInt(string);
}

console.log(StringToInt(numeroString)); // 100
console.log(typeof(StringToInt(numeroString))); // number


/*
Escreva um programa de calculadora simples com funções separadas para 
adição, subtração, multiplicação e divisão. Utilize um bloco condicional 
para determinar qual função executar com base em uma variável que representa 
a operação desejada.
*/
function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erro: divisão por zero.";
    }
}

function calculadora(operacao, a, b) {
    switch (operacao) {
        case 'soma':
            return adicao(a, b);
        case 'subtracao':
            return subtracao(a, b);
        case 'multiplicacao':
            return multiplicacao(a, b);
        case 'divisao':
            return divisao(a, b);
        default:
            return "Operação inválida.";
    }
}

console.log(calculadora('soma', 5, 3));  // 8


/*
Implemente uma função que aceite um número como parâmetro e utilize 
um bloco condicional para determinar se o número é par ou ímpar.
*/
let numero = 2;

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(verificarParOuImpar(numero)); //Ímpar


/*
Crie uma função que converta a temperatura de Celsius para 
Fahrenheit e vice-versa. Utilize uma variável para indicar a escala 
desejada e um bloco condicional para determinar qual conversão realizar
*/
let temperaturaCelsius = 25;

function converterTemperatura(valor, escala) {
    if (escala.toLowerCase() === 'celsius') {
        return (valor * 9/5) + 32; // Celsius para Fahrenheit
    } else if (escala.toLowerCase() === 'fahrenheit') {
        return (valor - 32) * 5/9; // Fahrenheit para Celsius
    } else {
        return "Escala inválida";
    }
}

console.log(converterTemperatura(temperaturaCelsius, 'celsius')); //77
