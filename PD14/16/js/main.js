let n = 3;
let suma = 0;
let vizitai = [18, 10, 10];
let k = 0;

for(let i = 0; i < vizitai.length; i++){
  suma += vizitai[i];
    if(vizitai[i] >= 20){
        k++;
    }
}
    let vidurkis = suma / vizitai.length;

    console.log(`m = ${vidurkis.toFixed(1)}, k = ${k}`)