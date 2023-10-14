// Parašykite programą, kuri simbolių eilutę atspausdina atvirkščiai. Papildoma sąlyga: turi
// būti panaudota LIFO duomenų struktūra.

const zodziai = "JavaScript for all";
let lifo = "";

for (let i = zodziai.length - 1; i >= 0; i--) {
  lifo += zodziai[i];
}

console.log(lifo);