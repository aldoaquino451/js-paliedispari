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
