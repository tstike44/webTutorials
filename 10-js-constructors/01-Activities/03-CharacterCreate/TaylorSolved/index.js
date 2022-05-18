function Character(name, profession, gender, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
}

Character.prototype.printStats = function () {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('=======================');
    console.log('~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('name: ', this.name);
    console.log('profession: ', this.profession);
    console.log('gender: ', this.gender);
    console.log('age: ', this.age);
    console.log('strength: ', this.strength);
    console.log('hitPoints: ', this.hitPoints);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('=======================');
    console.log('~~~~~~~~~~~~~~~~~~~~~~~');
}

Character.prototype.attack = function (player2) {
    player2.hitPoints -= this.strength;
}

Character.prototype.isAlive = function () {
    if (this.hitPoints > 0) {
        console.log(this.name + ' is alive.');
        return true;
    }
    console.log(this.name + ' is dead.');
    return false;
}
Character.prototype.levelUp = function () {
    this.age++;
    this.strength += 5;
    this.hitPoints += 25;
}

var hunter = new Character('Sylvanas', 'Hunter', 'Female', 500, 10, 2);
var warrior = new Character('Garrosh', 'Warrior', 'Male', 1000, 500, 30);

hunter.printStats();
hunter.isAlive();
hunter.attack(warrior);
warrior.isAlive();
warrior.printStats();
hunter.levelUp();
warrior.attack(hunter);
hunter.isAlive();
hunter.printStats();