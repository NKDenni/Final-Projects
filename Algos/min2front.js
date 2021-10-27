// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. Given [4, 2, 1, 3, 5], change it to [1, 4, 2, 3, 5] and return it.
// As always, do this without using built-in functions.

function minToFront(arr){
    let min = arr[0];
    let index = 0;
    for(var i=0; i< arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
            index = i;
        }
    }
    let temp = arr[0];
    arr[0] = min;
    arr[index] = temp;
    return arr;
}

var testArr = [5, 7, 9, 0, 8, 2, 3, 21];
console.log(minToFront(testArr)); 
var testArr2 = [5, 7, 9, 0, 8, 0, 2, 3, 21];
console.log(minToFront(testArr2));