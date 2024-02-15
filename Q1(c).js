/* c.	Sum of all numbers in an array */

// annonymous function//

let Total = function (x){
    let sum = 0;
    for(let i=0; i<x.length;i++){
        sum = sum + x[i];
        console.log(sum);
}
    }
    

Total([1,2,3,4,5,6,7,8,9,10])

// IIFE//

// ((x) => {
//     let sum = 0;
//     for(let i=0; i<x.length;i++){
//         sum = sum + x[i];
//         console.log(sum);

// }})([1,2,3,4,5,6,7,8,9,10])
