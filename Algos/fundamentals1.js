
const prompt = require("prompt-sync")();

// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

function swap(aName, aNumber){
    myName = aNumber;
    myNumber = aName;
    return;
}


let myName = 'nathan';
let myNumber = 42;
console.log(myName+' '+myNumber);
swap(myName, myNumber);
console.log(myName + ' ' + myNumber);

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

for (i=-52; i < 1067; i++){
    console.log(i);
}


// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(){
    for(let i=0; i < 99; i++) {
        console.log("Good Morning!!" + ` ${i}`);
    }
}

beCheerful();

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for(let i = -300; i <= 0; i += 3 ){
    if (i == -6 || i == -3){
        continue;
    }
    console.log(i);
}


// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

let i = 2000;

while(i <= 5280){
    console.log(i);
    i++;
}

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

function isBirthday(){
    const day = prompt("Pick a day: ");
    const month = prompt("Pick a month: ");
    if(day == 7 && month == 1){
        console.log("How did you know?");
    } else {
        console.log("Just another day")
    }
}

isBirthday();


// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function leapYear(year){
    if(year % 4 == 0){
        if(year % 100 == 0){
            if (year % 400 == 0){
                console.log("Is a leap year");
            } else {
                console.log("Not a leap year");
            }
        } else {
            console.log("Is a leap year")
        }
    } else {
        console.log("Not a leap year");
    }
}

const year = prompt("Check if leap year (YYYY): ");
leapYear(year);

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

let count=0;

for(var i=512; i<=4096; i++){
    if(i % 5 == 0){
        console.log(i);
        count++;
    }
}

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

let i = 6;

while( i <= 60000 ){
    console.log(i);
    i += 6;
}

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for(let i=1; i<=100; i++){
    if(i % 5 == 0){
        console.log("Coding");
        if(i % 10 == 0){
            console.log(" Dojo");
        }
        continue;
    }
    console.log(i);
}

// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.

const wdyk = () => {
    const incoming = prompt("What do you know?: ");
    console.log(incoming);
}

wdyk();

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

    // The sum is zero. Adding all the negative odd numbers to the positive numbers nets zero.

let i = 1, sum = 0;

while (i < 300000){
    sum = i - i;
    i +=2;
}
console.log(sum);

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

let i = 2016;

while (i > 0){
    console.log(i);
    i -= 4;
}

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

const countDown = (lowNum, highNum, mult) => {
    let i = highNum;
    while (i >= lowNum){
        console.log(i);
        i -= mult;
    }
}

countDown(2,9,3)

// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

const finalCount = (param1, param2, param3, param4) => {
    let i = param2;
    while (i < param3) {
        if(i == param4){
            i++;
        }
        if(i % param1 == 0){
            console.log(i);
        }
        i++;
    }
}

finalCount(3,5,17,9)