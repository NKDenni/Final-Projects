// Weekend Challenge
// For this weekend challenge, consider the game Tic - Tac - Toe. How would you represent a 3x3 game board: specifically, whether each square is unoccupied or claimed by a player? Could you represent this with an array? What would the array contain? Is there a benefit from having an array of arrays?

//     Once you have a good design in mind, create a function that, given one of these gameboards, automatically determines and returns the overall state of the game. A game is always in one of five different states – one state might be “Player 1’s turn”; another might be “Game over: player 2 has won.”

// Once you have mastered that, can you extend this function to handle gameboards of arbitrary size?

const prompt = require("prompt-sync")();

var arr = [['', '', ''], ['', '', ''], ['', '', '']];
var n = arr.length, i=0, m=n*n, count=0, tries=0, played=0;

function insertVal(r,c,v, arr){
    if(arr[r][c] != ' '){
        console.log("This location already played pick a different spot.");
        return;
    }
    if (arr[r][c] == undefined){
        console.log("This is not a playable location.");
        return;
    }
    arr[r][c] = v;
    played++;
}

function playing(arr, player) {
    for(i = 0; i < m; i++) {
        // Check win conditions if played == 4
        console.log("Where would you like to play?");
        let row = prompt("Which row? (1, 2 or 3): ");
        if (!(row == 1 || row == 2 || row == 3)) {
            console.log("Invalid input");
            tries++;
            if(tries == 3){
                console.log("Looks like you don't wanna play")
                return;
            }
            continue;
        }
        let r = row - 1;
        let col = prompt("Which column? (1, 2 or 3): ");
        if (!(col == 1 || col == 2 || col == 3)) {
            console.log("Invalid input");
            tries++;
            if (tries == 3) {
                console.log("Looks like you don't wanna play")
                return;
            }
            continue;
        }
        let c = col - 1;
        insertVal(r, c, player, arr);
        tries = 0;
        console.log(arr);
        i++;
    }
}

function player2(arr) {

}

function ticTacToe(arr){
    const player = prompt("Lets play! Are you player x or player o?(o or x): ");
    if (!(player == 'x' || player == 'o')){
        // console.log(player);
        console.log("Invalid selection please pick x or o. ");
        count++;
        // console.log(count);
        if(count == 3){
            console.log('Play seriously or not at all bye.');
            return;
        }
        ticTacToe(arr);
    } else {
        console.log(`Welcome player ${player}!`);
        playing(arr,player);
    }
}

ticTacToe(arr);
