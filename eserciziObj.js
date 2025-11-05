//Creare un oggetto a vostra scelta

//    -aggiungere una nuova proprietà
//    -modificare una proprietà
//    -eliminare una proprieà
//    -aggiungere una funzione
//    -richiamare la funzione

let film = {

    titolo: "Indiana Jones",
    regista: "Tizio",
    anno : 1988,
    produzione: "USA"
}

//aggiungo proprietà
film.cast = "Eroi";

//modificare proprietà
film.anno = 1990;

//eliminare proprietà
delete film.produzione;

//aggiungere una funzione
film.inizio = function() {

    //console.log("Il film inizia alle ore 9");
};

//richiamo funzione
film.inizio();

console.log(film);



//ESERCIZIO : inserimento di studenti , calcolo media e miglior voto 

// In questo programma, l utente dovrà inserire i dati di 3 studenti con prompt(), 
// Nome, Cognome e Voto
// Dovrà esser mostrato l elenco completo degli studenti,
// Calcolare e stampare la media dei voti
// Trovare lo studente con il voto piu alto e stampare lo studente migliore


//Per 3 volte devo chiedere 3 dati : nome cognome e voto ( string, string, number(float))
//Salvo i dati in un array di oggetti perchè sono 3 studenti con 3 proprietà


//array vuoto della classe
let classe = [];


//chiedo all utente per 3 volte 3 dati
for (i = 0; i < 3; i++){

  let nome = prompt("Inserisci il tuo nome : ");
  let cognome = prompt("Inserisci il cognome : ");
  let voto = parseFloat(prompt("Inserisci il voto : "));

  //creo l oggetto studente e lo aggiungo all array classe
  let studente = {nome : nome, cognome : cognome, voto : voto }; 

  //aggiungo studente all array classe
  classe.push(studente);

}

//stampa dei risultati
console.log("Elenco studenti : ");


for (let i = 0; i < classe.length; i++){

  console.log(classe[i].nome + classe[i].cognome + " - voto : " + classe[i].voto);
    
}

console.log(classe);

//calcolo media

//inizializzo contatore a zero, che sarà la somma dei voti
let somma = 0;

for (let i = 0; i < classe.length; i++){

  somma += classe[i].voto; // somma = somma + voto

}

//Media
let media = somma / classe.length;

console.log("la media dei voti è : " + media.toFixed(1));


//non conosco qual è il voto piu alto
//ma se ipotizzo che il primo sia il migliore

//trovo lo studente con il voto piu alto


let votoMigliore = classe[0]; // il primo oggetto ha il voto piu alto

for(let i = 1; i < classe.length; i++){

  if (classe[i].voto > votoMigliore.voto){

    votoMigliore = classe[i];

  }
}


let votoMax = classe[0].voto; //assumo che il primo sia il migliore 
let isMigliore = true; //imposto migliore a true

//trovo voto massimo
for (let i = 1; i < classe.length; i++){

  if (classe[i].voto > votoMax){

    votoMax = classe[i].voto;
  
  }

}



//controllo se esiste uno studente che ha lo stesso voto massimo
for(let i = 0; i < classe.length; i++ ){

  if(classe[i].voto === votoMax ){

    //se piu' di uno ha lo stesso valore, non esiste il migliore
    if (classe.filter(s => s.voto === votoMax).length > 1){

      isMigliore = false;

    }

  }

}

if(isMigliore){

  let migliore = classe.find(s => s.voto === votoMax);

  console.log("Esiste un voto piu alto di tutti : " + votoMax);
  console.log("Miglior studente : " + migliore.nome);

}else {

  console.log("nOn esiste un voto piu alto di tutti ( ci sono parità )");

}

console.log("media dei voti : " + media.toFixed(1));

//IMPLEMENTARE CONTROLLO SE I VOTI SONO UGUALI, NON ESISTE IL MIGLIORE









