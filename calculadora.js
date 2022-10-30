// EXERCÍCIO AULA 26 DE OUTUBRO

//CALCULADORA 

// adição
function adicionar (valor1, valor2) {
    let resultado = valor1 + valor2;
    return resultado;
}



//subtração 
function subtracao (valor1, valor2) {
    let resultado = valor1 - valor2;
    return resultado;
}

//multiplicação 
function multiplicacao (valor1, valor2) {
    let resultado = valor1 * valor2;
    return resultado;
}

//divisao 
function divisao (valor1, valor2) {
    let resultado = valor1 / valor2;
    return resultado;
}

console.log ("-------------- Teste de Operações / Calculadora --------------")


console.log(adicionar(5, 10));
console.log(subtracao(20,10));
console.log(multiplicacao(10,10));
console.log(divisao(5,0));



// QUADRADO DO NÚMERO
function quadradoDoNumeros(valor1) {
    let aoQuadrado = multiplicacao(valor1, valor1)
    return aoQuadrado;
}
console.log(quadradoDoNumeros(5));


//MEDIA DE 3 NÚMEROS
function mediaDeTresNumeros (valor1, valor2, valor3) {
    let somaDosTres = adicionar (valor1, valor2) + valor3;
    let media = divisao (somaDosTres, 3);
    return media; 
}
console.log(mediaDeTresNumeros (4, 6 , 8));


// CALCULA PORCENTAGEM
function calculaPorcentagem (inteiro, porcentagem) {
   let percentual = divisao (porcentagem, 100);
   let resultado = multiplicacao (inteiro, percentual); 
   return resultado;
}
console.log(calculaPorcentagem(500, 40));


// // GERADOR DE PORCENTAGEM
function geradorDePorcentagem (percentual, inteiro) {
    let porcentagem = multiplicacao (percentual, 100);
    let resultado = divisao (porcentagem, inteiro);
    return resultado;
}
console.log(geradorDePorcentagem(90,450));