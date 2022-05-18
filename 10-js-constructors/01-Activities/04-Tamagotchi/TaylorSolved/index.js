function DigitalPal() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks! I'm full.");
        }
    }
    this.sleep = function () {
        if (this.sleepy) {
            console.log("Zzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I'm not tired!");
        }
    }
    this.play = function () {
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Later?");
        }
    }
    this.increaseAge = function () {
        this.age++;
        console.log("Happy birthday to me! I am " + this.age + " poops old!")
    }
}

var dog = new DigitalPal();
dog.outside = false;
dog.bark = function () {
    console.log("Woof!");
}
dog.goOutside = function () {
    if (this.outside) {
        console.log("We're already outside though...");
    } else {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    }
}
dog.goInside = function () {
    if (this.outside) {
        console.log("Do we have to? Fine...");
        this.outside = false;
    } else {
        console.log("I'm already inside...");
    }
}


dog.play();
dog.play();
dog.feed();
dog.feed();
dog.sleep();
dog.sleep();
dog.goOutside();
dog.goOutside();
dog.goInside();
dog.goInside();