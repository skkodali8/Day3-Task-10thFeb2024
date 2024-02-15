/* 1.	Do the below programs in anonymous function & IIFE */


// a. Print the odd numbers in an array//

// annonymous function

let oddNumbers = function(x){
    for(let i=0;i<= x.length; i++){
        if(i % 2 != 0){
        console.log(i);
        }
    }
}
oddNumbers([1,2,3,4,5,6,7,8,9,10])

// IIFE -Method//

(function(x){
    for(let i=0; i<=x.length;i++){
        if(i%2 != 0){
        console.log(i);
    }
}
})([1,2,3,4,5,6,7,9,9,10])

