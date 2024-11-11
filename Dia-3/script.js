/* OPERADORES ARITMÉTICOS */

let num1 = 3;
let num2 = 2;

var total = num1 + num2;

//Adição
console.log(num1 + num2);
// Subtração
console.log(num1 - num2);
// Multiplicação
console.log(num1 * num2);
// Divisão
console.log(num1 / num2);
// Resto da divisão
console.log(num1 % num2);
//Exponencial
console.log(num1 ** num2);
//Incrementação
console.log(++total);
//Decrementação
console.log(--total);

/* OPERADORES DE ATRIBUIÇÃO */

let num3 = 4;
let num4 = 5;

num3 += 20;

console.log(num3);

/* OPERADORES DE COMPARAÇÃO */

let num5 = 10;
console.log(num5 > 0);
console.log(num5 >= 0);
console.log(num5 < 0);
console.log(num5 <= 0);
console.log(num5 == 10);
console.log(num5 === 10);
console.log(num5 !== 10);
console.log(num5 != 0);

/* OPERADORES DE IGUALDADE */
let num6 = 15;
let num7 = 15;
let num8 = '15';
console.log(num6 === num7); // -----> Strict ver se o tipo e o valor são iguais
console.log(num7 == num8); // -----> lose ver se o valor são iguais

/* OPERADORES TERNARIOS */
let driver = 90;
let speed = driver > 110 ? 'Above' : 'Below';
console.log(speed);

/* OPERADORES LÓGICOS */
let temIdadeMinima = true;
let temTituloEleitor = true;
let podeVotar = temIdadeMinima && temTituloEleitor ? 'Positivo' : 'Negativo';
console.log(podeVotar);
/* OPERADORES LÓGICOS COM STRING */
let corCliente = 'white';
let corEstoque = 'black';
let corVendida = corCliente || corEstoque;
console.log(corVendida);
/* PRECEDÊNCIA DE OPERADORES */
let num = 3 + 4 * 2;
console.log(num);
/*IF E ELSE*/
let driverSpeed = 80;
if (driverSpeed > 110) {
    console.log('You are over speeding');
} else if (driverSpeed > 40 && driverSpeed < 110){
    console.log('You are speeding ok');
} else {
    console.log('You are slow speeding');
}
/*SWITCH E CASE*/
let airport = 'MCO';
switch (airport) {
    case 'MCO':
        console.log('Orlando');
        break;
    case 'JFK':
        console.log('John F. Kennedy');
        break
    case 'SEA':
        console.log('Seattle');
        break
    default:
        break;
}
/* FOR */
for (let i = 1; i <= 10; i++) {
    console.log('Number ' + i);
}
/* WHILE */
let i = 1;
while (i <= 10) {
    console.log('Numero ' , i);
    i++;
}
/*BREAK*/
let t = 1;
while (t <= 10) {
    if(t === 8) break
    console.log('numero: ', t);
    t++;
}
/*DO WHILE */
let j = 1;
do{
    console.log('numero ', j);
    j++;
} while (j <= 10);
/* FOR IN */
const myCar = {
    model: 'BMW',
    year: 2023,
    km: 68000
}
for (let i in myCar){
    console.log(i, myCar[i]);
}
/* FOR OF */
const friends = ['Lucas', 'Duda', 'Bruna', 'Kayna', 'Felipe', 'Natalia'];
for (let f of friends){
    console.log(f);
}

/* Desafio 1 */
let text = document.querySelector('#text').innerHTML = 'burgers';