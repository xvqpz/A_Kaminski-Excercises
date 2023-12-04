//Parašykite JavaScript programą, kuri sumaišo masyvo elementus.

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex > 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  let arr = [2, 4, 6, 7, 9, 1, 2, 3, 'a', 's', 'e', 11, 37, 42];
  shuffle(arr);
  console.log(arr);