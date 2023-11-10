// chiedere quanti km vuoi percorrere e età passeggero
// calcolare prezzo totale del viaggio in base ai km (0.21 euro a km)
// sconto del 20% sui minorenni e 40% sui over 65

console.log('ciaooo')

const kmDaPercorrere = parseInt(prompt('Quanti km vuoi percorrere?'));
const etaPasseggero = parseInt(prompt('Quanti anni ha il passeggero?'));

let prezzoViaggio = kmDaPercorrere * 0.21;

console.log(prezzoViaggio)

if (etaPasseggero < 18) {
    const sconto = prezzoViaggio * 20 / 100;
    // prezzoViaggio = prezzoViaggio - sconto;
    prezzoViaggio -= sconto;
    console.log(sconto,prezzoViaggio);
} else if (etaPasseggero > 65) {
    const sconto = prezzoViaggio * 40 / 100;
    prezzoViaggio -= sconto;
    console.log(sconto,prezzoViaggio)
} else {
    console.log(prezzoViaggio)
}

