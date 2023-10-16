const a = 120;
let numberString = [];
let lyginiai = [];
let suma = 0;
let lyginiuSuma = 0;

for(let i = 0; i <= a; i++){
    if(a % i === 0){
        numberString.push(i);
    }
}

for (let y = 0; y < numberString.length; y++ ) {
    suma += numberString[y];
}

for(let g = 0; g <= a; g++){
    if (a % g === 0 && g % 2 === 0){
        lyginiai.push(g);
    }
}

for (let y = 0; y < lyginiai.length; y++ ) {
    lyginiuSuma += lyginiai[y];
}




console.log(`Visi dalykliai: ${numberString}`);
console.log(`Dalykliu suma: ${suma}`);
console.log(`Lyginiu dalykliu suma:${lyginiuSuma}`);