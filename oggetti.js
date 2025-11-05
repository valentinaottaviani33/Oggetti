let a = "pippo"; //variabile di tipo stringa

let b = 9; //variabile number

let array = []; // array vuoto

let c = false; // booleano


//oggetto vuoto
let oggetto = {};


//---------------------------------OGGETTI--------------------------------


let persona = {

    nome : "Diego",
    cognome : "Aneli",
    eta : 43,
    citta : "Parma",
    sposato : false,
    parla : function(){

                console.log("sono una persona che parla");
            
            }
}


//accedere ai valori con la dot notation (.valore)
console.log("Nome dell oggetto persona : " + persona.nome);//nome
console.log("Cognome dell oggetto persona : " + persona.cognome);//cognome
console.log("Città dell oggetto persona : " + persona.citta);//città
console.log("Età dell oggetto persona : " + persona.eta);//età
console.log("Stato dell oggetto persona : " + persona.sposato);//stato


//richiamo funzione parla dell oggetto persona

persona.parla();


//modifica di proprietà
persona.eta = 35; //modifica
persona.eta = 30; //piu giovane
persona.sposato = true;

//aggiungere una proprietà
persona.professione = "Sviluppatore";


//eliminare una proprietà
delete persona.sposato;


console.log("oggetto :" , persona);


//STAMPARE CHIAVE CON CICLO "FOR...IN"
let studente = {

    nome : "Giulia",
    corso : "Informatica",
    anno : 3

};

for (let i in studente){

    console.log(i + "->" + studente[i]);

}

//clonare o copiare un oggetto con metodo "spread operator"
let copiaStudente = { ...studente };
let copia2 = { ...studente };
console.log(copiaStudente);

//copiare un oggetto con metodo "assign"
let copiaStudente2 = Object.assign({}, studente);

//come restituire un array con tutte le chiavi
console.log(Object.keys(studente));


//come restituire in un array tutti i valori
console.log(Object.values(studente));


//come restituire un array di coppie [chiave, valore]
console.log(Object.entries(studente));
 







//---------------------- NIDIFICAZIONE -> OGGETTI DENTRO OGGETTI


let scuola = {

    nome : "Itis L.da Vinci",
    
    indirizzoDomicilio : {
        via: "Via roma 1",
        citta : "Roma"
    },

    indirizzoResidenza : {
        via: "Via VERDI 38",
        citta : "Parma"
    }

};

console.log(scuola);
console.log(scuola.indirizzoDomicilio.citta) //Roma
console.log(scuola.indirizzoResidenza.citta) //Parma








//----------------------NIDIFICAZIONE -> ARRAY CON DENTRO OGGETTI


let persone = [

                {nome: "Marco", eta: 18, citta: "Roma"}, //   0
                {nome: "Mario", eta: 27, citta: "Milano"}, // 1
                {nome: "Pietro", eta: 38, citta: "Pisa"} //   2
              
              ];

//accesso oggetto 
console.log(persone[0]); //primo oggetto
console.log(persone[1]); //secondo oggetto
console.log(persone[2]); //terzo oggetto

//accesso proprietà specifica
console.log(persone[0].nome); // stampo il nome del primo oggetto
console.log(persone[2].citta); // Pisa

//stampare con ciclo for tutti i dati
for (let i = 0; i < persone.length; i++){

    console.log(persone[i].nome + " vive a " + persone[i].citta );
}

//Aggiungere un nuovo oggetto nell array di oggetti
persone.push({nome: "Diego", eta: 30, citta: "Udine", auto: true});

console.log(persone);

//come aggiungere una proprietà ad un singolo oggetto di un array di oggetti
persone[3].professione = "Sviluppatore";
console.log(persone[3]);

//come modificare una proprietà ad un singolo oggetto di un array di oggetti
persone[0].citta = "Milano";
console.log(persone[3]);






//---------------------------------FILTRARE O CERCARE NELL ARRAY DI OGGETTI

let listaPersone = [

        {nome: "Marco", eta: 18, citta: "Roma"}, //   0
        {nome: "Mario", eta: 27, citta: "Milano"}, // 1
        {nome: "Pietro", eta: 38, citta: "Pisa"} //   2
];

//mi salvo in una variabile il dato da filtrare
let personaCercata = listaPersone.find(p => p.nome === "Mario");
console.log(personaCercata);


//filtrare per età (range di eta con operatore di confronto)
let adulti = listaPersone.filter(p => p.eta > 25 && p.eta < 35  )
console.log(adulti);






//---------------------------------CONVERTIRE OGGETTI JSON E VICEVERSA----

//Da obj in string
let jsonString = JSON.stringify(persone);
console.log( jsonString);


//da jsonstring a obj
let dati = JSON.parse(jsonString);
console.log(dati[0].nome);

console.log(typeof dati);


//FORMATO .JSON -> JAVASCRIPT OBJECT NOTATION 
//XML(VECCHIO FORMATO)
