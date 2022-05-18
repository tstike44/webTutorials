var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useCreateIndex: true, useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    var kittySchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
            unique: true
        },
        age: Number,
        born: Date,
        personality: String,
        color: String
    });
    kittySchema.methods.speak = function () {
        var greeting = this.name
            ? "Meow! my name is " + this.name
            : "I don't have a name";
        console.log(greeting);
    }
    var Kitten = mongoose.model('Kitten', kittySchema);

    var Meimei = new Kitten({ name: "Meimei" });
    console.log(Meimei);
    Meimei.speak();
    Meimei.ruleFollower = false;
    Meimei.save(function (err, hotdog) {
        if (err) return console.error(err);
        hotdog.speak();
    });

    Kitten.find(function (err, hamburger) {
        if (err) return console.error(err);
        console.log('firstFind: ', hamburger);
    });
    Kitten.find({ name: 'Pepper' }, function (err, cheeseburger) {
        if (err) return console.error(err);
        console.log('secondFind: ', cheeseburger);
    });
});