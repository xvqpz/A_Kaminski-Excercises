//* Vairuotojas iš sandėlio į parduotuvę turi pervežti n dėžių prekių. Į mašiną telpa m dėžių
//* prekių. Sukurkite programą, kuri apskaičiuotų ir kompiuterio ekrane parodytų, kiek kartų
//* k turės nuvažiuoti vairuotojas į sandėlį, kad parvežtų visas prekių dėžes į parduotuvę.

let dezes = 40;
const masina = 4;
let trips = 0;

if(dezes > 0 ){
    trips = Math.ceil(dezes / masina);
    console.log(`vazios ${trips} kartu`)
}
else{
    console.log(`tu viska sugadinai`)
}