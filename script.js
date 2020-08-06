// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.

// il software chiede all'utente il suo nome
var nome = prompt("inserisci il tuo nome");

// il software chiede all'utente il sesso
var sesso = prompt("inserisci maschio o femmina");


document.getElementById('presentazione').innerHTML = "Ciao" + " " + nome;







// // L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
//
// // primo numero creo una variabile co il prompt e gli assegno il nome primo numero
// // parseInt() serve a trasformare la stringa che si trova all'interno delle sue parentesi in un numero intero
// var primoNumero = parseInt(prompt("inserisci il primo numero"));
// // secondo numero creo una variabile co il prompt e gli assegno il nome secondo numero
// var secondoNumero = parseInt(prompt("inserisci il secondo numero"));
//
//  if (primoNumero > secondoNumero) {  //condizione
//   console.log(primoNumero); //azione quando si verifica la condizione indicata sopra
// }
// else if (primoNumero < secondoNumero) { //condizione
//   console.log(secondoNumero);//azione quando si verifica la condizione indicata sopra
// }
// else { //altrimenti se nessuna delle precedenti condizioni si verifica allora eseguira il comando scritto sotto
//   console.log("il primo numero è uguale al secondo numero");
// }
