let arr = [1, 2, 3, 4, 5, 6, 7];

let robka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let baklazonas = 0;
let baklazonodaugyba = 1;

for(i = 0; i < robka.length; i++){
   baklazonas+= robka[i];
}

for(i = 0; i < robka.length; i++){
    baklazonodaugyba*= robka[i];
 }


console.log(baklazonas)
console.log(baklazonodaugyba)
