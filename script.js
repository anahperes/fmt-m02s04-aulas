// MÉTODO .map PARA MAPEAR OS ITENS DE UM ARRAY

let array = [5, 8, 3, 6];

const novoArray = array.map((arrayAtual) => {
    return arrayAtual *3;
});

console.log(array);
console.log(novoArray);


// MÉTODO .filter PARA FILTRAR ITENS DE UM ARRAY EM UM NOVO ARRAY

let numeros = [18, 12, 35, 46, 15, 10, 8, 75, 81, 2]

const novosNumeros = numeros.filter(numerosAtuais => {
    if(numerosAtuais < 18){
        return numerosAtuais;
    }
})

console.log(numeros);
console.log(novosNumeros);


// MÉTODO .reduce PARA 

let numbers = [1, 22, 31, 40, 3, 5];

const newNumbers = numbers.reduce((total, currentNumber) => {
    total + currentNumber     
}, 0)