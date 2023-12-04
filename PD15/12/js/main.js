//Parašykite JavaScript programą, skirtą dviejų masyvų sąjungai apskaičiuoti.

let masyvusMasyvas = [3, 5, 6, 7, 8, 1];
let sum1 = 0;
let neMasyvusMasyvas = [3, 1, 8];
let sum2 = 0;


for(i = 0; i < masyvusMasyvas.length; i++){
    sum1 += masyvusMasyvas[i];
}

for(i = 0; i < neMasyvusMasyvas.length; i++){
    sum1 += neMasyvusMasyvas[i];
}

let finalSum = sum1 + sum2;

console.log(finalSum);

