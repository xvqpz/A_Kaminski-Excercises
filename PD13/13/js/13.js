// Parduotuvėje viena prekė kainuoja p1, antroji – p2 eurų.
// Parduotuvė skelbia p procentų nuolaidą visoms prekėms.
// Pirkėjas nori įsigyti abi prekes už s eurų. Parenkite programą,
// skaičiuojančią, ar pirkėjui užteks pinigų abiems prekėms įsigyti
// ir kiek jos iš viso kainuos.


let bandele = 1.49;
let sumustinis = 2.20;
let nuolaida = 20;
let pinigai = 5;
let krepselis = bandele + sumustinis;

if(pinigai > krepselis - (krepselis * nuolaida / 100)){
    krepselis = krepselis - (krepselis * nuolaida / 100);
    console.log(`Pirkejui uzteks pinigu abiems prekems isigyti, Is viso viskas kainuoja ${krepselis.toFixed(2)}`);
}
else{
    console.log(`Pirkejas ne turi bapkiu`);
}
