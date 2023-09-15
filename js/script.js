/* 
1. Chiedi all'utente di scegliere tra pari e dispari 
2. Chiedi all'utente di scegliere un numero da 1 a 5
3. Genera un numero per il pc (function)
4. Somma i numeri
5. Se la somma è uguale alla scelta dell'utente allora vince lui altrimenti il pc (function)
*/

// 1. Chiedi all'utente di scegliere tra pari e dispari 
const choose = prompt('Cosa scegli, "pari" o "dispari"?');
console.log(choose);

// 2. Chiedi all'utente di scegliere un numero da 1 a 5
const numUser = parseInt(prompt('Scegli un numero da 1 a 5'));
console.log(numUser);

// 3. Genera un numero per il pc (function)
const numComputer = randomize(1, 5);

function randomize (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(numComputer);

// 4.
const sum = numUser + numComputer;
console.log(sum);

// 5. 
isEven = false;

if ( choose === 'pari' ) {

  if ( sum % 2 === 0) {
    console.log('user win');
  }
  else {
    console.log('pc win');
  }

}
else if ( choose === 'dispari' ) {

  if ( sum % 2 === 0) {
    console.log('pc win');
  }
  else {
    console.log('user win');
  }

}




















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