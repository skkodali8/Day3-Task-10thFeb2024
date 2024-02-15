// a.Print odd numbers in an array //

// arrow Functions //

let oddNumbers =(x)=>{
    for(let i=0;i<= x.length; i++){
        if(i % 2 != 0){
        console.log(i);
        }
    }
}   
oddNumbers([1,2,3,4,5,6,7,8,9,10])