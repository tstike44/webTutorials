var dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function () {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
};

var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function () {
        if (this.raining === true) {
            console.log(this.noise);
        }
    }
};

dogs.makeNoise();

cats.raining = true;

cats.makeNoise();

function massHysteria(cats, dogs) {
    if (cats.raining === true && dogs.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}

massHysteria(cats, dogs);