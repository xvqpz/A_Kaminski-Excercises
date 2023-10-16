// Parašykite programą, kuri randa visus sveikuosius skaičius nuo 1 iki 300, kurie turi tik
// penkis daliklius.

for (let i = 0; i <= 300; i++) {    
    let dalikliai = 0;
    
    for (let y = 1; y <= i; y++) {
        if (i % y === 0) {
            dalikliai++;
        }
    }

    if (dalikliai === 5) {
        console.log(i);
    }
}