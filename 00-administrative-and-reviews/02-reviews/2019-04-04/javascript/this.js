var slotMachine1 = {
    color: "metallic",
    numReels: 3,
    lineBets: [1,3,5,10,15],
    cost: 5,
    playGame: function (lineBetIndex) {
        console.log("Slot #1 You just bet: " 
            + (slotMachine1.lineBets[lineBetIndex] * slotMachine1.cost)
            + " cents.");
        var num = Math.floor(Math.random() * 5);
        if (num === 3) {
            console.log('You won 5 cents!');
        } else if (num === 2) {
            console.log('You just won a dollar!');
        } else {
            console.log('You lost!');
        }
    }
}

slotMachine1.playGame(4);

var slotMachine2 = {
    color: "metallic",
    numReels: 3,
    lineBets: [1,3,5,10,15],
    cost: 5,
    playGame: function (lineBetIndex) {
        console.log("Slot #2 You just bet: " 
            + (this.lineBets[lineBetIndex] * this.cost)
            + " cents.");
        var num = Math.floor(Math.random() * 5);
        if (num === 3) {
            console.log('You won 5 cents!');
        } else if (num === 2) {
            console.log('You just won a dollar!');
        } else {
            console.log('You lost!');
        }
    }
}

slotMachine2.playGame(4);

// CONSTRUCTOR

function SlotMachine(p_name, p_color, p_numReels, p_lineBets, p_cost) {
    this.name = p_name;
    this.color = p_color;
    this.numReels = p_numReels;
    this.lineBets = p_lineBets;
    this.cost = p_cost;
    this.playGame = function (lineBetIndex) {
        console.log(this.name + " You just bet: " 
            + (this.lineBets[lineBetIndex] * this.cost)
            + " cents.");
        var num = Math.floor(Math.random() * 5);
        if (num === 3) {
            console.log('You won 5 cents!');
        } else if (num === 2) {
            console.log('You just won a dollar!');
        } else {
            console.log('You lost!');
        }
    }.bind(this);
}

var slotMachine3 = new SlotMachine("Slot Machine #3", "blue", 5, [5, 10, 15, 20], 100);

slotMachine3.playGame(2);
var slotMachine4 = new SlotMachine("Slot Machine #4", "brown", 3, [1], 50);
slotMachine4.playGame(0);
var slotMachine5 = new SlotMachine("Slot Machine #5", "green", 7, [5, 10, 15, 20], 10);
slotMachine5.playGame(0);
var slotMachine6 = new SlotMachine("Slot Machine #6", "yellow", 5, [5, 10, 15, 20], 100);
slotMachine6.playGame(0);
var slotMachine7 = new SlotMachine("Slot Machine #7", "blue", 5, [5, 10, 15, 20], 100);

slotMachine7.playGame(0);
var genericPlayGame = slotMachine7.playGame;
genericPlayGame(0);

setTimeout(slotMachine7.playGame, 100);

function multiply(x, y) {
    return x * y;
}

console.log(multiply(3,4));

var multiply2 = (x, y) => {
    return x * y;
}

console.log(multiply2(3,4));

var multiply3 = (x, y) => x * y;

console.log(multiply3(3,4));

const square = x => x * x;

console.log(square(4));

const arr = [1,2,3];
arr.forEach(function (item) {
    console.log(item);
});

// arr.map takes one array and returns a new one
const newArr = arr.map(function (item) {
    return item * 2;
});
// arr => 1, 2, 3
// newArray => 2, 4, 6

// arr.filter filter out items in the array 
const filteredArr = arr.filter(function (item) {
    return item > 1;
});
// arr => 1, 2, 3
// filteredArray => 2, 3

// arr.reduce aggregations (sum)
const sum = arr.reduce(function (prevValue, item) {
    return prevValue + item;
}, 0);
// arr => 1, 2, 3
// sum => 6

