// The Luhn formula is sometimes used to validate credit card numbers. Create the function isCreditCardValid(digitArr) that accepts an array of digits on the card (13 - 19 depending on the card), and returns a boolean whether the card digits satisfy the Luhn formula, as follows:

// 1) Set aside the last digit; do not include it in these calculations(until step 5);
// 2) Starting from the back, multiply the digits in odd positions(last, third - to - last, etc.) by 2;
// 3) If any results are larger than 9, subtract 9 from them;
// Add all numbers(not just our odds) together;
// Now add the last digit back in – the sum should be a multiple of 10.

// For example, when given digit array [5, 2, 2, 8, 2], after step 1) it becomes [5, 2, 2, 8], then after step 2) it is [5, 4, 2, 16]. Post - 3) we have[5, 4, 2, 7], then following 4) it becomes 18. After step 5) our value is 20, so ultimately we return true.If the final digit were any non - multiple - of - 10, we would instead return false.


function isCreditCardValid(arr){
    // console.log(arr.length);
    if (arr.length < 13){
        return "Card is invalid";
    }
    if (arr.length > 19 ){
        return "Card is invalid";
    } else {
        var last = arr[arr.length-1]
        arr.pop();
        // console.log(last);
        var sum = 0;
        for(var i = arr.length; i >= 0; i -= 2){
            // console.log(i);
            if (arr[i] != undefined) {
                arr[i] = arr[i] * 2;
            }
            if (arr[i] > 9){
                arr[i] = arr[i] - 9;
            }
        }
        for (var j = 0; j < arr.length; j++){
            sum = sum + arr[j];
        }
        sum = sum + last;
        // console.log(sum);
    }
    if( sum % 10 === 0){
        return "Card is valid";
    } else { return "Card is not valid"; }
}

var testArr = [5, 2, 2, 8, 2, 1, 2, 3, 9, 8, 7];
console.log(isCreditCardValid(testArr));
var testArr2 = [5, 2, 2, 8, 2, 1, 2, 3, 9, 8, 7, 0, 9, 8, 9, 1, 3, 4, 2, 4, 2];
console.log(isCreditCardValid(testArr2));
var testArr3 = [5, 2, 2, 8, 2, 1, 2, 3, 9, 8, 7, 0, 8, 4, 9, 2];
console.log(isCreditCardValid(testArr3));