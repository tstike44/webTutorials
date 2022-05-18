var sith = {
    name: "palpatine",
    occupation: "emperor",
    alive: true
}

var darthVader = {
    name: "Anakin",
    occupation: "father",
    alive: true
}

function killPerson() {
    var sith = {
        name: "palpatine",
        occupation: "emperor",
        alive: true
    }
    sith.alive = false;
}

killPerson(sith);
console.log(sith.alive);