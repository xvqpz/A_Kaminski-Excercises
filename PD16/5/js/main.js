//Parašykite JavaScript funkciją, kuri paskaičiuoja kiek yra raidžių pateiktoje eilutėje (tarpai
//neįskaičiuojami)
function kiekRaidziu(sak) {
    let tekstas = sak.split(" ").join("");
    return tekstas.length
}

console.log(kiekRaidziu("cia du"));
