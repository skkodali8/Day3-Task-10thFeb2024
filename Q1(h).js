// h.	Rotate an array by k times

//// Anonymous functions - Method//

let arrayRotation=function (arr,k){
    for(let i=0;i<k; i++){
        arr.unshift(arr.pop());
}
console.log(arr);
}
arrayRotation([1,2,3,4,"Kriti","Nidhi",5,6,7],5)

// IIFE - Method//

((arr,k)=>{
    for(let i=0;i<k; i++){
        arr.unshift(arr.pop());
}
console.log(arr);
})([1,2,3,4,"Kriti","Nidhi",5,6,7],5)
