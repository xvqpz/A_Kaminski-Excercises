// Sukurkite JavaScript funkciją, kuri priimtų JavaScript objektą ir grąžintų naują objektą tik
// su tomis savybėmis, kurios tenkina tam tikrą sąlygą (pvz., savybės reikšmė didesnė nei 10).

const masina ={
    variklis: 'v8',
    skaitiklis: 300654,
    arabas: 'yra'
}

const masina2 ={
    variklis: 'v12',
    skaitiklis: 20654,
    arabas: 'nera :(('
}


function hmmmm(obj){
    if(obj.skaitiklis >= 35000){
        obj.skaitiklis -= 300000
        console.log(obj);
    }   else {
        console.log(obj);
    }
}


function aaaaa(obj){
    if(obj.skaitiklis < 35000){
        delete obj.puslapiu;
        console.log(obj);
    }   else {
        console.log(obj);
    }
}

hmmmm(masina);
aaaaa(masina);

hmmmm(masina2);
aaaaa(masina2);