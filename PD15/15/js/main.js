//Parašykite JavaScript programą, kuri pašalina nurodytą elementą iš masyvo.

const myArray = [1, 2, 3, 4, 5];

const index = myArray.indexOf(4);

const x = myArray.splice(index, 1);

console.log(myArray);

