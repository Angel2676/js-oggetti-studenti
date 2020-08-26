// ASSEGNAZIONE
// Step 1
// Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome ed età.
// Step 2
// Stampare a schermo attraverso il for in tutte le proprietà.
// Step 3
// Creare un array di oggetti di studenti.
// Step 4
// Ciclare su tutti gli studenti e stampare per ognuno
// nome e cognome.
// Step 5
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// Step 6
// Usate prima i console.log e poi provare a stampare con jQuery:


// Soluzione
// 1 step - creazione oggetto
// var studente = {
//     "nome": "Gennaro",
//     "cognome": "Belli",
//     "eta": 40
// };

// console.log(studente);


// *****************************************+

// 2 step - ciclo for in per stampa proprieta
// for (var k in studente) {
//     console.log(studente[k]);
// };

// *****************************************+


// 3 step - Creare un array di oggetti studenti

var studenti = [
    {
        "nome" : "Giacomo",
        "cognome" : "Massa",
        "eta" : 25
    },

   {
         "nome" : "Filippo",
         "cognome" : "Pero",
         "eta" : 20
     },

     {
         "nome" : "Alberto",
         "cognome" : "Volli",
         "eta" : 35
     },

     {
         "nome" : "Nicola",
         "cognome" : "Rossi",
         "eta" : 40
     },

     {
         "nome" : "Gennaro",
         "cognome" : "Viola",
         "eta" : 40
     },
];

console.log(studenti);

// *****************************************+

// 4 step - Ciclare e stampare nome e cognome

// for (var i = 0; i < studenti.length; i++) {
//     for ( var k in studenti[i]) {
//         console.log(studenti[i].nome + " " + studenti[i].cognome );
//     }
// };


// *****************************************+


// 5 step - Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var n = prompt("Inserisci nome");
var c = prompt("Inserisci cognome");
var e = parseInt(prompt("Inserisci eta"));

newStudent = {
    "nome" : n,
    "cognome" : c,
    "eta" : e
};

studenti.push(newStudent);
console.log(studenti);
