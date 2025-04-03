// ----------- AULA 01 ----------- //


// MÉTODO .map PARA MAPEAR OS ITENS DE UM ARRAY

// let nomes = ["Maria", "João", "Pedro", "Augusto"];

// nomes.map(imprime); // "imprime" ESTÁ ASSOCIADO A UMA FUNÇÃO DE CALLBACK PARA TER UM PARÂMETRO ONDE IMPRIMIR AS INFORMAÇÕES TEMPORARIAMENTE

// function imprime(nome){
//     console.log(nome);
// }


// COMO FUNCIONA O MAP

// É POSSÍVEL IMPRIMIR 3 VALORES COM O MÉTODO MAP:
// 1º - imprime o valor atual
// 1º - imprime o índice do valor atual
// 3º - imprime o próprio array

// nomes.map((nome, index, array) => {
//     console.log(nome);
//     console.log(index);
//     console.log(array);
// })


// EXERCÍCIO 01
// let numbers = [3, 6, 9, 12];

// let newNumbers = numbers.map((number) => {
//     return number * 3;
// })

// console.log(numbers);
// console.log(newNumbers);


// EXERCÍCIO 01 - OLD
// let array = [5, 8, 3, 6];

// const novoArray = array.map((arrayAtual) => {
//     return arrayAtual *3;
// });

// console.log(array);
// console.log(novoArray);



// MÉTODO .filter PARA FILTRAR ITENS DE UM ARRAY EM UM NOVO ARRAY

// // EXEMPLO PARES
// let numbers = [2, 3, 5, 6, 7, 8, 10, 12, 13, 14];

// let evenNumbers = numbers.filter((number) => {
//     if(number % 2 ==0){
//         return true
//     } else {
//         return false
//     }
// });

// console.log(evenNumbers);

// // EXEMPLO ÍMPARES
// let numbers = [2, 3, 5, 6, 7, 8, 10, 12, 13, 14];

// let oddNumbers = numbers.filter((number) => {
//     if(number % 2 ==0){
//         return false
//     } else {
//         return true
//     }
// });

// console.log(oddNumbers);


// EXERCÍCIO
// let numeros = [18, 12, 35, 46, 15, 10, 8, 75, 81, 2]

// const novosNumeros = numeros.filter(numerosAtuais => {
//     if(numerosAtuais < 18){
//         return numerosAtuais;
//     }
// })

// console.log(numeros);
// console.log(novosNumeros);


// EXERCÍCIO - OUTRA FORMA DE RESOLVER (COM OPERADOR TERNÁRIO)
// let numeros = [18, 12, 35, 46, 15, 10, 8, 75, 81, 2]

// const novosNumeros = numeros.filter((numerosAtuais) => {
//     return (numerosAtuais < 18) ? (true) : (false)
// })

// console.log(numeros);
// console.log(novosNumeros);


// // MÉTODO .reduce PARA SOMAR OS VALORES DE UM ARRAY

// let numbers = [1, 22, 31, 40, 3, 5];

// const newNumbers = numbers.reduce((total, currentNumber) => {
//     return total + currentNumber     
// }, 0); // ESSE NÚMERO/VALOR INICIAL PODE SER O NÚMERO QUE EU QUISER. NORMALMENTE SERÁ 0 OU SE NÃO HOUVER NENHUM, SERÁ O PRIMEIRO ELEMENTO/NÚMERO DO ARRAY.

// console.log(newNumbers);

// let numbers = [1, 22, 31, 40, 3, 5];

// const higherNumber = numbers.reduce((currentHigher, currentNumber) => {
//     if(currentNumber > currentHigher){
//         return currentNumber
//     } else {
//         return currentHigher
//     }
// }, 0)

// console.log(higherNumber)


// DESTRUCTURING - SPREAD

let names = ["Ana Helena", "Rafaela", "Eduarda", "Cláudia"];
let names2 = ["Matheus", "Paulo", "Felipe", "André"];

let allNames = [...names, ...names2];
console.log(allNames);
