let originalArray = [1, 2,2,3,4,5,666,7,7,7,7,7,7, 3, 4, 3, 2, 5, 6, 6, 7];
let uniqueSet = new Set(originalArray);
let newArray = Array.from(uniqueSet);

console.log("Array with Duplicates Removed:", newArray);
