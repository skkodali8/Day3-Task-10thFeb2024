// f.	Return median of two sorted arrays of the same size.//

// Anonymous functions - Method//

let medianArr =  function(arr1,arr2){
let arr = arr1.concat(arr2);
let length = arr.length;

if (length%2 == 1){
    console.log(arr[Math.floor(length/2)]);
}else{
    console.log((arr[Math.floor(length/2)] + arr[Math.floor(length/2)-1])/2);
}
}
medianArr([1,2,3,4,5],[6,7,8,9,10]);

// IIFE - Method//

((arr1,arr2)=>{
    let arr = arr1.concat(arr2);
    let length = arr.length;
    
    if (length%2 == 1){
        console.log(arr[Math.floor(length/2)]);
    }else{
        console.log((arr[Math.floor(length/2)] + arr[Math.floor(length/2)-1])/2);
    }
    })([1,2,3,4,5],[6,7,8,9,10]);