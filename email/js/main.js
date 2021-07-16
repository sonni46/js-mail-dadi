// **Mail**
// Chiedi all’utente la sua email,

var utente = prompt("Scrivi la tua email");

// controlla che sia nella lista di chi può accedere,

var lista = ["pippo@hotmail.it","paperino@hotmail.it",]

var elementoTrovato = 0

for ( var i = 0; i < lista.length; i++) {

    if (utente == lista[i]) {
        alert("ben tornato");
        elementoTrovato++
    }
    else if (elementoTrovato == 0)
    {
       alert("errore")
       elementoTrovato-= 2
    }
}

// stampa un messaggio appropriato sull’esito del controllo.

