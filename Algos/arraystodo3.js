// Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same array(not a copy), preserving non - negatives’ order. As always, do not use built-in array functions.

function removeNegatives(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] <0){
            arr[i] = null;
        }
    }
    return arr
}

var testArr =[-3, 5, -6, 2, -9, 0, 2, -4, 1, 7, 21]
console.log(removeNegatives(testArr));

//     Second - to - Last
// Return the second - to - last element of an array. Given[42, true, 4, "Kate", 7], return "Kate". If array is too short, return null.

function secondToLast(arr){
    if(arr.length <= 1){
        return null;
    }
    return arr[arr.length-2];
}

var testArr = [-3, 5, -6, 2, -9, 0, 2, -4, 1, 7, 21];
console.log(secondToLast(testArr));

var testArr2 = [-3];
console.log(secondToLast(testArr2));

//     Second - Largest
// Return the second - largest element of an array. Given[42, 1, 4, Math.PI, 7], return 7. If the array is too short, return null.

function secondLargest(arr){
    var big = 0;
    var second = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > big){
            big = arr[i];
        }
    }
    for (var j = arr.length-1; j >= 0; j--) {
        // console.log('t-'+j);
        if (arr[j] >= big) {
            // console.log(arr[j]);
        } else if (second < arr[j]){
            second = arr[j];
            // console.log(second);
        }
    }
    return second;
}

var testArr = [42, 1, 4, 47, Math.PI, 7, 2, 43];
console.log(secondLargest(testArr))

//     Nth - to - Last
// Return the element that is N - from - array’s - end. Given([5, 2, 3, 6, 4, 9, 7], 3), return 4. If the array is too short, return null.

function nToLast(arr, n){
    for(var i = arr.length; i >=arr.length-n; i--){
        if(i=arr.length-n){
            return arr[i]
        }
    }
}

var testArr = [-3, 5, -6, 2, -9, 0, 2, -4, 1, 7, 21];
console.log(nToLast(testArr, 4));

//     Nth - Largest
// Liam has "N" number of Green Belt stickers for excellent Python projects. Given arr and N, return the Nth - largest element, where(N - 1) elements are larger. Return null if needed.

function nLargest(n, arr) {
    var small = arr[0];
    var index = 0;
    var newArr = [];
    for (var j = arr.length; j > 0; j--){
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < small) {
                small = arr[i];
                index = i;
            } else if (arr[i] == small) {
                small = arr[i];
                index = i;
            }
            
        }
        // console.log(index);
        // console.log(small);
        arr[index] = arr[arr.length - 1];
        arr[arr.length - 1] = small;
        arr.pop();
        newArr.push(small);
        // console.log(arr);
        // console.log(newArr);
        small = arr[0];
    }
    return newArr[newArr.length-n];
}

var testArr = [42, 1, 4, 47, Math.PI, -7, 2, 43];
console.log(nLargest(3, testArr));


// Skyline Heights
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. Let’s say you are given an array with heights of consecutive buildings, starting closest to you and extending away. Array [-1, 7, 3] would represent three buildings: first is actually out of view below street level, behind it is second at 7 stories high, third is 3 stories high(hidden behind the 7 - story). You are situated at street level. Return array containing heights of buildings you can see, in order.Given[-1, 1, 1, 7, 3] return [1, 7]. Given[0, 4] return [4]. As always with challenges, do not use built-in array functions such as unshift().

function heights(arr){
    var tall = 0;
    var newArr = [];
    for(var i =0; i <arr.length; i++){
        if(arr[i] > tall){
            tall = arr[i];
            newArr.push(tall);
        }
    }
    return newArr;
}

var testArr = [-1, 0, 4, 12, -1, 7, 3, 20];
var testArr2 = [42, 1, 4, 47, Math.PI, -7, 2, 43];
console.log(heights(testArr));
console.log(heights(testArr2));