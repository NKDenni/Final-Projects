const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Array to be sorted separated by commas ', inputArray => {
    console.log(`This is your input [${inputArray}]`);
    let input = inputArray;
    let arr = input.split(',')
    let output = quickSort(arr);
    console.log(output);
    readline.close();
});


const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};