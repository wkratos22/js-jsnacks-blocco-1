let num1 = prompt("Inserisci il primo numero");
let num2 = prompt("Inserisci il secondo numero");

if (num1>num2){
    // document.getElementById("numeroVincente").inner = ("Il numero vincente è "+ " " + num1)
    document.getElementById("numeroVincente").innerHTML += `<div>il numero vincente è:${num1}</div>`;
    console.log(num1)
} else {
    // document.getElementById("numeroVincente").inner = ("Il numero vincente è "+ " " + num2)
    document.getElementById("numeroVincente").innerHTML += `<div>il numero vincente è: ${num2}</div>`;
    console.log(num2)
}
