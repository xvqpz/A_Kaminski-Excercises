//Parašykite JavaScript programą, kuri sujungia du masyvus ir pašalina visus pasikartojančius
// elementus.

let robka = [4, 5, 9, 3, 5 , 7, 1, 3];
let robka2 = [7, 8, 4, 2, 8, 9, 1, 3, 5];

let combainas = robka.concat(robka2);

let uniqueSet = new Set(combainas);
let newArray = Array.from(uniqueSet);

console.log(newArray);