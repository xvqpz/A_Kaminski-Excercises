//? Parašykite programą, kuri išvestų į ekraną visus keliamuosius metus nuo n iki m (imtinai)
//? remiantis Grigaliaus kalendoriumi. Julijaus kalendoriuje keliamieji metai yra tie, kurie be
//? liekanos dalijasi iš 4, pavyzdžui 1504, 1500, 1600. Grigaliaus kalendoriuje keliamieji metai
//? skaičiuojami kaip Julijaus kalendoriuje, tačiau paskutiniai amžiaus metai (dalijasi iš 100 be
//? liekanos) yra keliamieji tik tada, jei be liekanos dalijasi iš 400, pavyzdžui 1504, 1600.

let metai = 1997;
let naujimetai = 2018;
let list = [];
for (let i = metai; i <= naujimetai; i++){
    list.push(i);
}

for(let q = 0; q < list.length; q++){
    let year = list[q];

    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
        console.log(year);
    }
}