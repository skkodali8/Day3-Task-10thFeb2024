
/* b.	Convert all the strings to title caps in a string array */

// Anonymous Functions//

let nameArr = function(arr){
let nameCap = []
for (let i=0; i<arr.length; i++){
    arr[i] = arr[i].toUpperCase();
    nameCap.push(arr[i]);   
}
console.log(nameCap);
}
nameArr(["srikanth","namrata","kriti","nidhi"]);

// IIFE -Mehod//

((arr) => {
    let nameCap = []
    for (let i=0; i<arr.length; i++){
        arr[i] = arr[i].toUpperCase();
        nameCap.push(arr[i]);   
    }
    console.log(nameCap);
    })(["srikanth","namrata","kriti","nidhi"]);