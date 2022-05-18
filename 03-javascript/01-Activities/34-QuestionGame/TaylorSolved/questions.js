var questions = [
    {
        q: "Is the sky blue?",
        a: "t"
    },
    {
        q: "Is barry bonds a baseball player?",
        a: "t"
    }
];

var currentQ = 0;
var score = 0;
var scoreElem = document.getElementById("score");
var questionElem = document.getElementById("question");

function displayCurrentQ() {
    if (currentQ >= questions.length) {
        questionElem.innerHTML = "good job.";
        scoreElem.innerHTML = "final score: " + score;
        // finished questions.
        return; 
    }
    questionElem.innerHTML = "question: " + questions[currentQ].q;
    scoreElem.innerHTML = "score: " + score;
}
displayCurrentQ();

document.onkeyup = function (event) {
    var userGuess = event.key;
    if (userGuess != "f" && userGuess != "t") {
        //invalid input, stop checking code
        return;
    }
    if (currentQ >= questions.length) {
        // finished questions.
        return; 
    }

    if (userGuess == questions[currentQ].a) {
        score++;
        alert("You got it right!");
    } else {
        alert("You got it wrong.");
    }
    // what happens once a guess is made
    // (in between rounds)
    currentQ++;
    displayCurrentQ();
}