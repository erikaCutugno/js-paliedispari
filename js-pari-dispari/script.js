//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
let userEvenOrOdd;
do {
    userEvenOrOdd = prompt("Scegli tra pari o dispari")
}while (userEvenOrOdd.toLowerCase() !== "pari" && 
        userEvenOrOdd.toLowerCase() !== "dispari")
console.log(`Il giocatore ha scelto "${userEvenOrOdd}"`)

//Inserisce un numero da 1 a 5
let userNumber;
do {
    userNumber = parseFloat(prompt("Scegli un numero da 1 a 5"))
} while (isNaN(userNumber)|| userNumber < 1 || userNumber > 5)
    console.log(`Numero scelto dal giocatore: ${userNumber}`)

//Generiamo un numero random (da 1 a 5) per il computer 
 function randomNumber(min,max){
    rangeNumber = Math.floor(Math.random() * (max - min +1)) + min;
    return rangeNumber
 }

const cpuNumber = randomNumber(1,5)
console.log(`CPU: ${cpuNumber}`)

//Sommiamo i due numeri
let tot = userNumber + cpuNumber
console.log(`La somma è: ${tot}`)

//Stabiliamo se il numero è pari o dispari
function isEvenOrOdd(num){
    if(num % 2  === 0){
        let evenOrOdd = "pari"
        return evenOrOdd;
    } else{
        evenOrOdd = "dispari"
        return evenOrOdd;
    } 
}
const num = isEvenOrOdd(tot);
console.log(num);

//dichiaro il vincitore
if (userEvenOrOdd.toLowerCase() === evenOrOdd.toLowerCase()){
    alert("Hai vinto")
} else {
    alert("Hai perso")
}