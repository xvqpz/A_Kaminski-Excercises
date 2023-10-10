let x = 2;
let y = -2;
let z = 4;

if(x <= y && x <= z){
    console.log(x)
    if(y <= z){
        console.log(y)
        console.log(z)
    }
    else{
        console.log(z)
        console.log(y)
    }
}
else if(z <= x && z <= y){
    console.log(z)
    if(y <= x){
        console.log(y)
        console.log(x)
    }
    else{
        console.log(x)
        console.log(y)
    }
}
else{
    console.log(y)
    if(x <= z){
        console.log(x)
        console.log(z)
    }
    else{
        console.log(z)
        console.log(x)
    }
}