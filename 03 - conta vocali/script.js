/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */




// Dichiara la funzione qui.
function countVowels(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of word.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

const word = 'javascript';
console.log(countVowels(word)); 

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)