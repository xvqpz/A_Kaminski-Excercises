let x = 0;
let y = -1;

for(i = 0; i < 121; i++){
  y++;
    if(y === 11){
    y = 0;
    x++;
}
let xy = x * y;
       
console.log(`${x} * ${y} = ${xy}`);
}
