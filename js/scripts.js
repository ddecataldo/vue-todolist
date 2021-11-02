/* 
* Descrizione:
Rifare l’esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array // OK
- ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
*/

Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        welcomeText: "Hello Vueoolean - Todolist",
        userText: "",
        myList: [
            "Fare la spesa",
            "Andare in banca",
            "Comprare il pane"
        ]
    },
    methods: {
        addClick(){

            // Inserisco in una variabile il valore digitato dall'utente nella form
            let getUserText = this.userText.trim();
            
            // Rimuovo eventuali spazi inseriti dall'utente grazie al metodo trim()
            if (this.userText.trim() === "") {
                return;
            }

            // Il metodo find mi permette di trovare il primo valore che corrisponde alla condizione del return.
            const found = this.myList.find((el) => {
                return el.toLowerCase() === this.userText.toLowerCase();
            });

            // Se found === true allora esci
            if (found) {
                return;
            }

            // Pusho nell'array la variabile
            this.myList.push(getUserText);
            
            // Resetto il campo input
            this.userText = "";
        },

        removeClick(elementRemove){

            // Con il metodo splice() rimuovo 1 elemento a in base all'indice
            this.myList.splice(elementRemove, 1)

        }

    }
});