// Shuffle
// In JavaScript, the Array object has numerous useful methods. It does not, however, contain a method that will randomize the order of an array’s elements. Let’s create shuffle(arr), to efficiently shuffle a given array’s values. Work in-place, naturally. Do you need to return anything from your function?

function shuffle(arr){
    // declared all variables in one line.
    var n=arr.length,i,t;

    // rather than use a for loop and iterate through the whole array use a while check to decrement through the arrays length
    while(n){
        // used math random and math floor to generate a random index number and multiplied by the current length of the array
        i = Math.floor(Math.random() * n--);

        // grabbed the last value in the array and stored in t. Swapped the current shuffle value to the end. replaced the shuffled value 
        t = arr[n];
        arr[n] = arr[i];
        arr[i] = t;
    }
    // return arr;
}

var testArr = [1,2,3,4,5,6,7,8,9];
shuffle(testArr);
console.log(testArr);

// Remove Range
// Given array, and indices start and end, remove vals in that index range, working in-place(hence shortening the array). Given([20, 30, 40, 50, 60, 70], 2, 4), change to [20, 30, 70] and return it.

function rangeRemove(arr, s, e=s) {
    var n = arr.length, i;

    if (e == n) {
        while(n > s){
            arr.pop();
            n--;
        }
    } else if (e == s) {
        for (j = s + 1; j < n; j++) {
            arr[j - 1] = arr[j];
        }
        arr.pop();
    } else {
        for (i = s; i <= e; i++) {
            for (j = s + 1; j < n; j++) {
                arr[j - 1] = arr[j];
            }
        arr.pop();
        }
    arr.pop();
    }
}


var testArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
rangeRemove(testArr,3,5);
console.log(testArr);


// Intermediate Sums
// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], change it to [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 15, 1, 2, 1, 2, 6]

function subTotal(arr){
    var n=arr.length, sum = 0, i = 0;
    var newArr = [];

    while (i < n) {
        if (i % 10 == 0 && i !=0) {
            newArr.push(sum);
            sum = 0;
        };
        // console.log(i);
        sum += arr[i];
        // console.log(sum);
        newArr.push(arr[i]);
        if (i + 1 == n) {
            newArr.push(sum);
        };
        i++;
    };
    return newArr;
};

var testArr = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]; 
var testArr2 = [5, 7, 9, 0, 8, 2, 3, 21]
// subTotal(testArr);
console.log(subTotal(testArr));
// subTotal(testArr2);
console.log(subTotal(testArr2));


// Double Trouble
// Create a function that changes a given array to list each original element twice, retaining original order. Convert [4, "Ulysses", 42, false] to [4, 4, "Ulysses", "Ulysses", 42, 42, false, false].


function double(arr){
    var n = arr.length, i, count=0;
    // grab array length to iterate over length of array
    for(i = 0; i < n; i++){
        // grabs last val in original array and puts it at end of doubled array
        arr[2*n-1-count] = arr[n-1-i];
        // increment the counter up so that we can put the same value in the second to last place
        count++;
        arr[2*n-1-count] = arr[n-1-i];
        //incrememnt for the next value
        count++;
    }
}


var testArr = [4, "Ulysses", 42, false];
double(testArr);
console.log(testArr);


// Zip It
// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1, 2] and [10, 20, 30, 40], return new array containing [1, 10, 2, 20, 30, 40].

//     Second: combine the two arrays’ values into the first array, instead of into a new array. Much more fun!

function zipIt(arr1, arr2){
    var m = arr1.length, n=arr2.length, o=m+n, i=0;

    // check which array is longer 
    if (m > n) {
        // while i < o take longer array and push values into end of short array
        while (i < o) {
            // console.log(m); just checking
            // console.log(n);
            if (n == m) {
                arr2[o - 1 - i] = arr1[m - 1];
                i++;
                m--;
                arr2[o - 1 - i] = arr2[n - 1];
                n--;
            } else {
                arr2[o - 1 - i] = arr1[m - 1];
                m--;
            }
            i++;
        }
    } else {
        while (i < o) {
            if (n == m) {
                arr1[o - 1 - i] = arr2[n - 1];
                i++;
                n--;
                arr1[o - 1 - i] = arr1[m - 1];
                m--;
            } else {
                arr1[o - 1 - i] = arr2[n - 1];
                n--;
            }
            i++;
        }
    }
    
    // check if m and n are equal yet
    // if they are equal push value from long array and then short array until you get to index 0
}

var testArr1 = [0,9,8,7];
var testArr2 = [1,2,3,4,5,6];
zipIt(testArr1, testArr2);
console.log(testArr1);
console.log(testArr2);