//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5
const userEvenOrOdd = prompt("Scegli tra pari o dispari")
console.log(userEvenOrOdd)

let userNumber;
do {
    userNumber = parseFloat(prompt("Scegli un numero da 1 a 5"))
} while (isNaN(userNumber)|| userNumber < 1 || userNumber > 5)
    console.log(userNumber)

//Generiamo un numero random (da 1 a 5) per il computer 
 function randomNumber(min, max){
    rangeNumber = Math.floor(Math.random(max - min +1) + min)
    return rangeNumber
 }

const cpuNumber = randomNumber(1,5)
console.log(cpuNumber)