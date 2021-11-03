// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(val, arr){
    var newArr =[];
    newArr.push(val);
    for(var i=0; i < arr.length; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

var testArr = [8, 2, 5, 1, 6];
var testVal = "test"
console.log(pushFront(testVal, testArr));

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built -in array methods except pop().

function popFront(arr){
    var newArr = [];
    for(var i=1; i < arr.length; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(popFront(testArr));

// Insert At
// Given an array, index, and additional value, insert the value into array at given index.Do this without using built-in array methods. You can think of pushFront(arr, val) as equivalent to insertAt(arr, 0, val).

function insertAt(val, index, arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if( i === index ){
            newArr.push(val)
        } 
        newArr.push(arr[i]);
    }
    return newArr;
}

var testArr = [8, 2, 5, 1, 6];
var testVal = "test";
var testLoc = 3;
console.log(insertAt(testVal, testLoc, testArr));

// Remove At(Bonus Challenge)
// Given an array and an index into array, remove and return the array value at that index.Do this without using built -in array methods except pop().Think of popFront(arr) as equivalent to removeAt(arr, 0).

function removeAt(index, arr) {
    var newArr = [];
    var popVal = arr[index];
    console.log(popVal);
    for (var i = 0; i < arr.length; i++) {
        if (i === index) {
            i += 1;
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var testArr = [8, 2, 5, 1, 6];
var testLoc = 0;
console.log(removeAt(testLoc, testArr));

// Swap Pairs(Bonus Challenge)
// Swap positions of successive pairs of values of given array.If length is odd, do not change the final element.For[1, 2, 3, 4], return [2, 1, 4, 3].For example, change input["Brendan", true, 42] to[true, "Brendan", 42].As with all array challenges, do this without using any built -in array methods.

function swapPairs(arr){
    if(arr.length %2 !== 0){
        for (var i = 0; i < arr.length-1; i++) {
            if(i %2 == 0){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (i % 2 == 0) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

var testArr = [8, 2, 5, 1, 6];
var testArr2 = [5, 8, 2, 3];
console.log(swapPairs(testArr));
console.log(swapPairs(testArr2));


// Remove Duplicates(Bonus Challenge)
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together.As with all these array challenges, do this without using any built -in array methods.
// Second: Solve this without using any nested loops.

function deDup(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        var check = arr[i];
        if(check !== arr[i+1]){
            newArr.push(check);
        }
    }
    return newArr;
}


var testArr = ["a", "a", "b", "c", "d", "e", "e", "e", "f", "g", "h", "i", "j", "k", "k"];
console.log(deDup(testArr));

