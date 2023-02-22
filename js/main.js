/* 1 numero di chilometri che si vuole percorrere
   2 età
   3 calcolo del prezzo (0.21 €*km)  
   _sconto 20% se viaggiatore minore di 18 anni
   _sconto 40% se viaggiotore maggiore o uguale a 65 anni 
   4 totale con massimo 2 decimali
*/


const numeroKm = parseInt(prompt('Inserisci i chilometri da percorrere'));
document.getElementById('my_km').innerHTML = numeroKm;

const nEta = parseInt(prompt('Inserisci la tua età'));
document.getElementById('my_age').innerHTML = nEta;

const prezzoKm = 0.21;

let totTemp = (numeroKm * prezzoKm).toFixed(2);
console.log (totTemp)

let scontoVenti = (totTemp - ((totTemp / 100) * 20)).toFixed(2);

let scontoQuaranta = (totTemp - ((totTemp / 100) * 40)).toFixed(2);



if (nEta < 18) {

    console.log((scontoVenti));
    document.getElementById('my_price_old').innerHTML = totTemp;
    document.getElementById('my_price').innerHTML = scontoVenti + " (-20%)";

} else if (nEta >= 65) {

    console.log(scontoQuaranta);
    document.getElementById('my_price_old').innerHTML = totTemp;
    document.getElementById('my_price').innerHTML = scontoQuaranta + " (-40%)";

} else  {
    
    console.log (totTemp);
    document.getElementById('my_price').innerHTML = totTemp;
}

