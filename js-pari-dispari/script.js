//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
const userEvenOrOdd = prompt("Scegli tra pari o dispari")
console.log(`Il giocatore ha scelto "${userEvenOrOdd}"`)

//Inserisce un numero da 1 a 5
let userNumber;
do {
    userNumber = parseFloat(prompt("Scegli un numero da 1 a 5"))
} while (isNaN(userNumber)|| userNumber < 1 || userNumber > 5)
    console.log(`Numero scelto dal giocatore: ${userNumber}`)

//Generiamo un numero random (da 1 a 5) per il computer 
 function randomNumber(min, max){
    rangeNumber = Math.floor(Math.random(max - min +1) + min)
    return rangeNumber
 }

const cpuNumber = randomNumber(1,5)
console.log(`CPU: ${cpuNumber}`)

//Sommiamo i due numeri
let tot = userNumber + cpuNumber
console.log(`La somma è: ${tot}`)

//Stabiliamo se il numero è pari o dispari
function isEven(num){
    if(num % 2  === 0){
        evenOrOdd = "pari"
        return evenOrOdd;
    }  
    evenOrOdd = "dispari"
    return evenOrOdd;
}
const num = isEven(tot);
console.log(num);

//dichiaro il vincitore
if (userEvenOrOdd.toLowerCase() === evenOrOdd.toLowerCase()){
    alert("Hai vinto")
} else {
    alert("Hai perso")
}