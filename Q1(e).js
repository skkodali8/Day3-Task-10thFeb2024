// e.	Return all the palindromes in an array//


// Annonymous Function- Method//


let Numbers = function (arr){
let palindrom =[];
for(let i=0; i<arr.length; i++){
    let num = arr[i];
    let temp = "";
    while(num>0){
        let digit = num %10;
        temp+= digit;
        num = Math.floor(num/10);
    }
    let  newNum = parseInt(temp);

    if(arr[i] === newNum){
        palindrom.push(newNum);
    }
}

console.log(palindrom);
}

Numbers ([121,969,456,666,121,876])


// IIFE -Method//
(function (arr){
    let palindrom =[];
    for(let i=0; i<arr.length; i++){
        let num = arr[i];
        let temp = "";
        while(num>0){
            let digit = num %10;
            temp+= digit;
            num = Math.floor(num/10);
        }
        let  newNum = parseInt(temp);
    
        if(arr[i] === newNum){
            palindrom.push(newNum);
        }
    }
    
    console.log(palindrom);
    })([121,969,456,666,121,876])