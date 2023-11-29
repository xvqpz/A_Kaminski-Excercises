let arr = 'QQQQQQQQQQQQQwwwwwwwwwwwwwww'; 
let kriause = '';

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i].toUpperCase()){
        kriause += arr[i].toLowerCase();
    } else if (arr[i] === arr[i].toLowerCase()){
        kriause += arr[i].toUpperCase();
    }
}

console.log(kriause);