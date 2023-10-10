// Bankas suteikia paskolą tokiu atveju, kai pajamos vienam šeimos nariui yra ne mažesnės
// kaip s eurų per mėnesį, ir dar lieka k eurų paskolai mokėti. Šeimą sudaro n asmenų. Tėvo
// atlyginimas yra t, motinos – m eurų per mėnesį. Parašykite programą, kuri ekrane parodytų
// pranešimą ”Bankas suteiks paskolą”, jei šeima tenkina sąlygas, reikalingas paskolai gauti,
// arba ”Bankas paskolos nesuteiks”, jei šeima netenkina sąlygų, reikalingų paskolai gauti.

let minBapkes = 1000;
let paskolaiMoketi = 250;
let seimosN = 4;
let t = 2500;
let m = 2200;
let bendras = (t + m) /seimosN; //1175

if(bendras >= minBapkes && (bendras - paskolaiMoketi) >= 0){
    console.log(`Bankas duos paskola`);
}
else{
    console.log(`Bankas ne duos paskolos`);
}
