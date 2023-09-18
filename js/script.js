/*
// 1. Salva in una variabile il nome inserito dall'utente
const paliStr = (prompt('Inserisci una parola'));

// 2. Salva la posizione del primo e dell'ultimo carattere
const firstChar = 0;
const lastChar = paliStr.length - 1;

// 3. Dichia un counter
let counter = 0;

// 4. Se il primo carattere è uguale all'ultimo allora aumenta di 1 il counter 
for (let i = 0; i <= lastChar; i++ ) {
  
  if ( paliStr.charAt(firstChar + i) === paliStr.charAt(lastChar - i) ) {
    counter ++ ;
  }

}

// 5.
const paliHTML = document.querySelector('#palindrome')

// 6. Se il counter === lunghezza parola allora stampa il messaggio ok altrimenti error
if (counter === paliStr.length) {
  paliHTML.innerHTML = paliStr + ' è una parola  palindroma';
} 
else {
  paliHTML.innerHTML = paliStr + ' NON è una parola  palindroma';
}
*/

/* 
4. Somma i numeri
5. Se la somma è uguale alla scelta dell'utente allora vince lui altrimenti il pc (function)
*/


// 1. Chiedi all'utente di scegliere tra pari e dispari  un numero da 1 a 5
const choose = prompt('Cosa scegli, "pari" o "dispari"?');
const numUser = parseInt(prompt('Scegli un numero da 1 a 5'));

// 2. Genera un numero per il pc (tramite funzione)
const numComputer = randomize(1, 5);

function randomize (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 3. Somma i numeri
const sum = numUser + numComputer;
console.log(choose, numUser, numComputer, sum);

// 4. 
message = (isEven(sum)) ? 


// 5. 
function isEven(num) {
  if ( num % 2 ) return false;
  else return true;
};


// 6.
let message;

const evenOdd = document.querySelector('#even-odd')

evenOdd.innerHTML = message;


















