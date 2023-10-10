//Yra duoti tris skaičiai a, b, c. Parašykite programą, kuri rastų dviejų didžiausių skaičių
//sumą

let a = 5;
let b = 5;
let c = 3;

if(a <= b && a <= c){
    console.log(b + c);
}
else if(b <= a && b <= c){
    console.log(a + c);
}
else{
    console.log(a + b);
}