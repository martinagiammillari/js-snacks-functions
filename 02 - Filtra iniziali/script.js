/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function filterByLetter(names, letter) {
  return names.filter(name => name[0].toLowerCase() === letter.toLowerCase());
}

// Invoca la funzione qui e stampa il risultato in console

const result = filterByLetter(names, "A");

console.log(result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]