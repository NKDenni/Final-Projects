// Average(Warmup)
//     (Warm - up) Always run through some quick algorithm problems before any coding interview, to get yourself warmed up. How about this one: return the average value of an array of unsorted numbers.

const average = (arr) => {
    let sum = 0, len = arr.length, i;
    for(i=0; i<len; i++){
        sum = sum + arr[i];
    }
    mean = sum / len;
    return mean;
}

var testArr = [5, 3, 12, 6, 8, 1, 0, 11, 13, 10, 2, 9, 7, 4, 14, 15];
var testArr2 = [2, 2, 2, 2, 2, 2, 2, 2];

console.log(average(testArr));
console.log(average(testArr2));

// Balance Point
// Write a function that returns whether the given array has a balance point between indices, where one side’s sum is equal to the other’s.Example: [1, 2, 3, 4, 10] → true(between indices 3 & 4), but [1, 2, 4, 2, 1] → false.

const balancePoint = (arr) => {
    let left = 0, right = 0, n = 1, odd = 0, l = arr.length-1, halfLen = Math.floor(arr.length / 2);

    // Check length if even or odd
    if (arr.length % 2 != 0){
        odd = 1; 
    }

    // Confirm lengths
    let rightLen = halfLen ;
    let leftLen = halfLen + odd;
    console.log(leftLen);
    console.log(rightLen);

    // First pass before itterating to see which side is bigger
    for (i = 0; i < leftLen; i++) {
        left = left + arr[i];
        console.log(`Left: ${left}`);
    }

    for (j = l; j > rightLen; j--) {
        right = right + arr[j];
        console.log(`Right: ${right}`);
    }

    // Return true if first pass finds balance point
    if (left == right){
        console.log(`Left: ${left} Right: ${right}`);
        return true;
    } else {
        console.log(`Left: ${left} Right: ${right}`);
    }

    // Check condition if first pass returns left side larger than right
    if (left > right) {
        right = 0;
        left = 0;
        while (n < halfLen) {
            let rightLen = halfLen - n - odd;
            let leftLen = halfLen - n;
            for (i = 0; i < leftLen; i++) {
                left = left + arr[i];
                console.log(`Left: ${left}`);
            }
            for (j = l; j > rightLen; j--) {
                right = right + arr[j];
                console.log(`Right: ${right}`);
            }
            if (left == right) {
                console.log(`Left: ${left} Right: ${right}`);
                return true;
            }
            if (right > left) {
                console.log(`Left: ${left} Right: ${right}`);
                return false;
            }
            console.log(leftLen);
            right = 0;
            left = 0;
            n++;
        }
    }

    // Check condition if first pass returns right side larger than left
    if (right > left) {
        right = 0;
        left = 0;
        while (n < halfLen) {
            console.log(`Is this odd ${odd}`);
            let rightLen = halfLen + n;
            let leftLen = halfLen + n + odd;
            for (i = 0; i < leftLen; i++) {
                left = left + arr[i];
                console.log(`Left: ${left}`);
            }
            for (j = l; j > rightLen; j--) {
                right = right + arr[j];
                console.log(`Right: ${right}`);
            }
            if (left == right) {
                console.log(`Left: ${left} Right: ${right}`);
                return true;
            }
            if (left > right) {
                console.log(`Left: ${left} Right: ${right}`);
                return false;
            }
            console.log(leftLen);
            right = 0;
            left = 0;
            n++;
        }
    }
}

var testArr2 = [1, 2, 3, 4, 10];
var testArr3 = [-2, 5, 7, 0, 3];
var testArr4 = [10, 4, 3, 2, 1];

console.log(balancePoint(testArr));
console.log(balancePoint(testArr2));
console.log(balancePoint(testArr3));
console.log(balancePoint(testArr4));


// Balance Index
// Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on either side(exclude its own value). Return - 1 if none exist. Ex.: [-2, 5, 7, 0, 3] → 2, but [9, 9] → -1.

const balanceIndex = (arr) => {
    let left = 0, right = 0, n = 1, odd = 0, l = arr.length - 1, halfLen = Math.floor(arr.length / 2);

    // Check length if even or odd
    if (arr.length % 2 == 0) {
        return -1;
    }

    // Confirm lengths
    let rightLen = halfLen;
    let leftLen = halfLen;
    console.log(leftLen);
    console.log(rightLen);

    // First pass before itterating to see which side is bigger
    for (i = 0; i < leftLen; i++) {
        left = left + arr[i];
        console.log(`Left: ${left}`);
    }

    for (j = l; j > rightLen; j--) {
        right = right + arr[j];
        console.log(`Right: ${right}`);
    }

    // Return true if first pass finds balance index
    if (left == right) {
        console.log(`Left: ${left} Right: ${right}`);
        return true;
    } else {
        console.log(`Left: ${left} Right: ${right}`);
    }

    // Check condition if first pass returns left side larger than right
    if (left > right) {
        right = 0;
        left = 0;
        while (n < halfLen) {
            let rightLen = halfLen - n;
            let leftLen = halfLen - n;
            for (i = 0; i < leftLen; i++) {
                left = left + arr[i];
                console.log(`Left: ${left}`);
            }
            for (j = l; j > rightLen; j--) {
                right = right + arr[j];
                console.log(`Right: ${right}`);
            }
            if (left == right) {
                console.log(`Left: ${left} Right: ${right}`);
                return true;
            }
            if (right > left) {
                console.log(`Left: ${left} Right: ${right}`);
                return false;
            }
            console.log(leftLen);
            right = 0;
            left = 0;
            n++;
        }
    }

    // Check condition if first pass returns right side larger than left
    if (right > left) {
        right = 0;
        left = 0;
        while (n < halfLen) {
            console.log(`Is this odd ${odd}`);
            let rightLen = halfLen + n;
            let leftLen = halfLen + n + odd;
            for (i = 0; i < leftLen; i++) {
                left = left + arr[i];
                console.log(`Left: ${left}`);
            }
            for (j = l; j > rightLen; j--) {
                right = right + arr[j];
                console.log(`Right: ${right}`);
            }
            if (left == right) {
                console.log(`Left: ${left} Right: ${right}`);
                return true;
            }
            if (left > right) {
                console.log(`Left: ${left} Right: ${right}`);
                return false;
            }
            console.log(leftLen);
            right = 0;
            left = 0;
            n++;
        }
    }
}

var testArr = [5, 3, 12, 6, 8, 1, 0, 11, 13, 10, 2, 9, 7, 4, 14, 15];
var testArr2 = [1, 2, 3, 4, 10];
var testArr3 = [-2, 5, 7, 0, 3];
var testArr4 = [10, 4, 3, 2, 1];

console.log(balanceIndex(testArr));
console.log(balanceIndex(testArr2));
console.log(balanceIndex(testArr3));
console.log(balanceIndex(testArr4));


function twoSum(nums, target) {
    // instatiate varibles
    var sum, len = nums.length;
    console.log(len);
    console.log(nums[0]);
    //loop through array 
    for (var i = 0; i < len; i++) {
        console.log(nums[i]);
        for (var j = 1; j < len; j++) {
            sum = nums[i] + nums[j];
            console.log(sum);
            if (sum == target) {
                console.log(target);
                return [i, j];
            }
        }
    }

};

var testArr = [2,7,11,15];
var targ = 9;

console.log(twoSum(testArr, targ));