//  g. Remove duplicates from an array //

// Anonymous functions - Method//

let removeDuplicates = function(array){
    console.log(array.filter((el,index) => array.indexOf(el)===index));
}
removeDuplicates([1,2,3,3,4,5,"srikanth","kriti","srikanth","kriti",9,21,5,2,21,5]);

// IIFE - Method//
((array)=>{
    console.log(array.filter((el,index) => array.indexOf(el)===index));
})([1,2,3,3,4,5,"srikanth","kriti","srikanth","kriti",9,21,5,2,21,5]);


