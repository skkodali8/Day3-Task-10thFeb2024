
// d.Return all the prime numbers in an array//


// annonymous function- Method//


let Numbers = function(arr) {
  let primeNum = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 1; j <= arr[i]; j++) {
      if (arr[i] % j === 0) {
        count++;
      }
    }
    if (count == 2) {
      primeNum.push((arr[i]));
    }
  }
  console.log(primeNum);
}
Numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// IIFE - Method //

//  ((arr) => {
//     let primeNum = [];
//     for (let i = 0; i < arr.length; i++) {
//       let count = 0;
//       for (let j = 1; j <= arr[i]; j++) {
//         if (arr[i] % j === 0) {
//           count++;
//         }
//       }
//       if (count == 2) {
//         primeNum.push((arr[i]));
//       }
//     }
//     console.log(primeNum);
//   })([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);