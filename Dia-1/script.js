console.log("Testando!");

let firstName = 'Lucas';
let lastName = 'Albuquerque';
console.log(firstName);
console.log(lastName);

let price = 45;
price = 25;
console.log(price); 

/*A variável Const ela é inalteravel, diferente das let e var*/
const num = 40;
//num = 25;
console.log(num);

/* Tipos de Variáveis Primitivas  */
let itemName = "Pen-drive";
let itemPrice = 100;
let itemAvailable = true;
let itemColor;
let itemCod = null;

console.log(itemName);
console.log(itemPrice);
console.log(itemAvailable);
console.log(itemColor);
console.log(itemCod);

/* Objectos */

const person = {
  /*props*/
  name: "Lucas",
  age: 28,
  cor: "black",
  address: "Telegrafista Armando Pessoa",
};

console.log(person)
console.log(person.name);
console.log(person.age);
console.log(person.cor);
console.log(person.address);

/* ARRAY */
const frutas = ["Maçã", "Banana", "Uva", "Morango"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);

/* FUNCTIONS */

function saleStatus(status, total) {
    console.log('Transaction: ' + status + '. Total: $' + total);
}

saleStatus('Approved', 100);

function percentage10(price) {
   return price - (price * 10 / 100);
}

let total = percentage10(20);

console.log(total);
