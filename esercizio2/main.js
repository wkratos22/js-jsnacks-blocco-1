let parola1 = prompt("Scrivi la prima parola");
let parola2 = prompt("Scrivi la seconda parola");

if (parola1.length > parola2.length){
    document.getElementById("parolaPiuLunga").innerHTML += `<div>:${parola2}-${parola1}</div>`;
} else{
    document.getElementById("parolaPiuLunga").innerHTML += `<div>:${parola1}-${parola2}</div>`;
}