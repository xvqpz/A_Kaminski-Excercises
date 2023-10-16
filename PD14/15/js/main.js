// Elektroninės parduotuvės trečiojo gimtadienio proga buvo organizuota loterija, kurioje bi-
// lietų numeriai buvo triženkliai skaičiai iš intervalo [s1; s2]. Laimingi bus bilietai, kurie be
// liekanos dalijasi iš trijų ir kurių bent vienas skaitmuo taip pat dalijasi iš trijų be liekanos
// (skaitmenys negali būti lygūs nuliui). Parašykite programą šiam uždaviniui spręsti. Bilietų
// numeriai turi būti rodomi ekrane.

// let s1 = 222;
// let s2 = 245;

// let array = [];

// for(let i = s1; i <= s2; i++){
//     if(i % 3 === 0){
        
//     }
// }

let a = 222;
let b = 245;

for (let i = a; i <= b; i++){
    if (i % 3 === 0 ){
        let c = i.toString();
        if (c.includes('3') || c.includes('6') || c.includes('9')){
            console.log(c);
        }
    }
}