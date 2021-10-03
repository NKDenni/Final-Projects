// Reverse
// Given a numerical array, reverse the order of values, in -place.The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array – move values within the array that you are given. As always, do not use built -in array functions such as splice().

function reverse(arr){
    for(var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

var testArr = [5, 7, 9, 0, 8, 2, 3]
console.log(reverse(testArr));

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-round' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given([1, 2, 3], 1), change the array to [3, 1, 2]. Don't use built-in functions.
// Second: allow negative shiftBy(shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays / shiftBys in the millions.
// Fourth: minimize the touches of each element.

function rotateArr(arr, shiftBy){
    if(shiftBy < 0){
        // ShiftBy loop determines how many times we shift left
        for(var i = 0; i < Math.abs(shiftBy); i++){
            // Saves the first Item in the array
            var temp = arr[i];
            // Loops through the array
            for (var j = 1; j < arr.length; j++){
                // Moves the value at arr[j] down one index position.
                arr[j-1] = arr[j];
            }
        // Puts the saved value at the end of the array
        arr[arr.length-1] = temp;
        }
    return arr;
    }

    for(var i = 0; i < shiftBy; i++){
        // shiftBy determines how many times we shift the values in the array right
        var temp = arr[arr.length - 1];
        // Grabs the last value in the list so we don't lose the data
        // shifts every item up one index in the list
        for (var j = arr.length-1; j >= 0; j--){
            arr[j] = arr[j-1];
        }
        // Puts the saved value at the beginning of the array
        arr[0] = temp;
    }
    return arr;
}

var testArr = [8, 2, 5, 1, 6];
var shift = -2;
console.log(rotateArr(testArr, shift));

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built -in array functions.

function filterRange(min, max, arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < min) {
            arr[i] = null;
        }
        if(arr[i] > max) {
        arr[i] = null;
        }
    }
    return arr;
}

var testMin = 2;
var testMax = 10;
var testArr = [5, 7, 13, 0, 8, 20, 3]
console.log(filterRange(testMin, testMax, testArr));

// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function join(arr1, arr2) {
    console.log(arr1);
    console.log(arr2);
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i]);
    }
    for(var j = 0; j < arr2.length; j++){
        newArr.push(arr2[j])
    }
    return newArr;
}

var testArr1 = ['a', 'b', 'c', 'd', 'e'];
var testArr2 = [5, 7, 1, 8, 3, 6]
console.log(join(testArr1, testArr2));
