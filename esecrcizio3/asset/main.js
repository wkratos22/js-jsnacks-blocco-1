var numeri = [];
var numero;

for (var i = 0; i < 10; i++){
  numero = parseInt(prompt('Inserisci un numero'));
  numeri.push(numero);
}
console.log(numeri);

let somma = 0;

for (let i = 0; i < numeri.length; i++) {
    somma += numeri[i];
    
}
console.log(somma);
document.getElementById("sommaNumeri").innerHTML += `<div>:La somma dei numeri è: ${somma}</div>`;

