var slotMachine = {
    color: "metallic",
    numReels: 3,
    lineBets: [1,3,5,10,15],
    cost: 5,
    playGame: function (lineBetIndex) {
        console.log("Slot #1 You just bet: " 
            + (slotMachine.lineBets[lineBetIndex] * slotMachine.cost)
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

var slotMachine2 = {
    color: "metallic",
    numReels: 3,
    lineBets: [1,3,5,10,15],
    cost: 5,
    playGame: function (lineBetIndex) {
        console.log("Slot #1 You just bet: " 
            + (slotMachine2.lineBets[lineBetIndex] * slotMachine2.cost)
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

console.log('This was executed.');

module.exports = {
    slotMachine1: slotMachine,
    slotMachine2: slotMachine2
}