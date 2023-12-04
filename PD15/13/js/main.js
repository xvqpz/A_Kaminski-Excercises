//Parašykite JavaScript programą, kuri randa skirtumą tarp dviejų masyvų.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 3, 2, 4, 5];
y = 0;
for(i = 0; i < arr1.length; i++){
    y++;
    if(arr1[i] === arr2[i]){
        console.log(`${y} slot of the array is identical`)
    }
    else{
        console.log(`${y} slot of the array is different \n the difference is ${arr1[i]} in the first array and ${arr2[i]} in the second array`)
    }
}

