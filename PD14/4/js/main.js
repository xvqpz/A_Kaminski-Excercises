// Kiekvieną dieną yra atliekami oro temperatūros matavimai. Matavimai yra atliekami vieną
// kartą per dieną. Matavimų rezultatai yra surašomi į lentelę: menėsio diena - temperatūra.
// Parašykite programą, skaičiuojančią kiekvieno mėnesio vidutinę temperatūrą ir bendrą vi-
// dutinę temperatūrą.

let sausis = [-11.5, -10.3, -12, -6.5, -5, -15.5]
let vasaris = [-16, -14.5, -11, -10.3, -3.5, 0]
let kovas = [-3, -2.5, 0, 5, 9.5, 11.2]

let sSuma = 0;
let vSuma = 0;
let kSuma = 0;

let finalSuma = 0;

for (let i = 0; i < sausis.length; i++ ) {
    sSuma += sausis[i];
}
  let sVid = sSuma / sausis.length;

for (let i = 0; i < vasaris.length; i++ ) {
    vSuma += vasaris[i];
}
  let vVid = vSuma / vasaris.length;

for (let i = 0; i < kovas.length; i++ ) {
    kSuma += kovas[i];
 }
  let kVid = kSuma / kovas.length;

let vidurkis = (sVid + vVid + kVid);

vidurkis = ((vidurkis / 3).toFixed(2));

console.log(`Vidutine sausio temperatura: ${sVid.toFixed(2)}. \nVidutine vasario temperatura: ${vVid.toFixed(2)}. \nVidutinė kovo temperatūra: ${kVid.toFixed(2)}. \nBendras atliktų matavimų vidurkis:${vidurkis}.`);
