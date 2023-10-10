let x = 72;
let y = [...x.toString()];

if(y[0]< y[1]){
    console.log(`${y[1]} is the bigger number.`);
}
else if(y[1] < y[0]){
    console.log(`${y[0]} is the bigger number.`);
}
else{
    console.log(`The numbers are equal.`);
}