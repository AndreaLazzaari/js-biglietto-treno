// chiedere quanti km vuoi percorrere e età passeggero
// calcolare prezzo totale del viaggio in base ai km (0.21 euro a km)
// sconto del 20% sui minorenni e 40% sui over 65

console.log('ciaooo')

const kmDaPercorrere = parseInt(prompt('Quanti km vuoi percorrere?'));
const etàPasseggero = parseInt(prompt('Quanti anni ha il passeggero?'));

let prezzoViaggio = parseInt (kmDaPercorrere * 0.21);

console.log(prezzoViaggio)

if (etàPasseggero < 18) {
    prezzoViaggio = parseInt()
}
