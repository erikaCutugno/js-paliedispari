//Chiedere all’utente di inserire una parola


let wordReverse = "";
//Funzione che data una parola ne crea l'inverso per poi dare true
//se la parola inserita è uguale al suo inverso (palindroma);
//false se non sono uguali

function isPalindrome (word){
    for (let i=word.length-1; i>=0; i--){
        wordReverse += word[i];
        if (wordReverse === word){
            return true;
        } 
    }
    return false;
}

const userWord = prompt("Inserisci una parola");
const word = isPalindrome(userWord.toLowerCase())
console.log(word)