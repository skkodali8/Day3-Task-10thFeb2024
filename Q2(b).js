// b.Convert all the strings to title caps in a string array//
// Arrow function- Method//

let nameArr = (arr) => {
    let nameCap = []
    for (let i=0; i<arr.length; i++){
        arr[i] = arr[i].toUpperCase();
        nameCap.push(arr[i]);   
    }
    console.log(nameCap);
    }
    nameArr(["srikanth","namrata","kriti","nidhi"]);
    