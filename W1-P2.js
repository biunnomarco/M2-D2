/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
//? RISPOSTA 1
/* -Number: un qualsiasi numero, interi o decimale che sia, compreso tra -(2^53 ) e 2^53. 
        Esistono inoltre valori speciali come +o- infinity e Not a Number che vengono assegnati a operazioni matematicamente impossibili o oprerazioni
        che coinvolgono un datatype che non è un numero.
    -String: è una sequenza di caratteri di qualsiasi tipo (anche numeri) purchè siano delimitati da "doppi apici" o 'singoli apici'.
        può essere di qualsiasi lunghezza, anche vuota.
    -Boolean: è una entità logica e può avere solo ed esclusivamente 2 valori: true (vero)  oppure false (falso). Può ad esempio essere il 
        risultato di un confronto tra 2 variabili come: var1=18; var2=20; console.log(var1===var2) restituirà false
    -Undefined: è un valore che non esiste ancora. Si ha quando viene dichiarata una variabile senza definirne il contenuto.
    -Null: null invece a differenza di undefined è un valore che viene assegnato (var1 = null) per indicare che il contenitore è vuoto.
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
//? RISPOSTA 2
/* Gli oggetti sono dei datatype strutturali di Javascript. Sono in sostanza dei gruppi di variabili che descrivono la stessa entità.
    Se ad esempio dovessi definire per un membro della classe vari attributi come ad esempio nome, cognome, età, occupazione ecc. mi basterebbe 
    dichiarare un ogetto ed al suo interno dichiarare tutte le variabili che mi servono:
    let student {
        name: "Marco",
        surname: "Biunno",
        age: 31,
        ecc...
    }
    Importantissimo, gli oggetti devo racchiudere tutto il contenuto tra {parentesi graffe} e tutti le variabili dichiarate all'interno devono
    essere separate da una virgola.
*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
//? RISPOSTA 3
//* console.log(12+20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
//? RISPOSTA 4
//* let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
//? RISPOSTA 5
//* let name = "Marco";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
//? RISPOSTA 6
//* console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
//? RISPOSTA 7
/* let name1 = "John";
let name2 = "john";

console.log(name1===name2);
console.log(name1.toLowerCase===name2.toLowerCase) */



