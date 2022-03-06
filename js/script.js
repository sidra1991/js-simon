
// Visualizzare in pagina 5 numeri casuali.


const number = document.getElementById(`container`);
const text = document.getElementById(`output`);
const randomSeries = []

for (let generatore = 1; generatore < 6; generatore++) {
    let random = Math.floor(Math.random()* 11);
    number.innerHTML += `<div class="cell">  ${random} </div>`;

    text.innerHTML = "memorizza i numeri"
    randomSeries.push(random);
}




// Da lì parte un timer di 30 secondi. (Cioè lasciate i numeri visibili per 30 secondi allo scadere dei quali li nascondete)
// Dopo aver nascosto i numeri chiedete all'utente (con dei prompt) di inserirli in ordine, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.