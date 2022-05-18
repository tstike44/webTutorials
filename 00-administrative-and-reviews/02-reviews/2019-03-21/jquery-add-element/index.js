

function createRandomDiv(parent, num) {
    var newDiv = $('<div class="even-cooler-div">All the html we want ' + num + '</div>');
    parent.append(newDiv);
    newDiv.click(function () {
        alert('It worked ' + num);
        console.log(num);
    });
}

$(document).ready(function () {
    var coolDiv = $('.cool-div');
    var listDiv = $('.list');
    var gameDiv = $('.game');
    var questionsDiv = $('.questions');

    //~~~~~~~~~~~~~~~~~~~~~//
    // Create Element:     //
    //~~~~~~~~~~~~~~~~~~~~~//
    coolDiv.click(function () {
        var randomNum = Math.floor(Math.random() * 100);
        createRandomDiv(listDiv, randomNum);
    });

    for(var i = 0; i < 4; i++) {
        var randomNum = Math.floor(Math.random() * 100);
        createRandomDiv(listDiv, randomNum);
    }

    console.log(randomNum);
    gameDiv.click(stepOne);
    function stepOne() {
        alert('Step 1');
        stepTwo();
    }

    function stepTwo() {
        alert('Step 2');
        stepThree();
    }

    function stepThree() {
        function stepFour() {
            var cont = confirm(scopedToThree + 'Continue?');
            if (cont) {
                stepOne();
            }
        }
        var scopedToThree = 12;
        alert('Step 3');
        stepFour();
    }

    var numArray = [1, 2, 3, 4];

    function convertArray(arr) {
        var arr2 = [];
        for(var i = 0; i < arr.length; i++) {
            arr2.push(arr[i] + ' extra stuff');
        }
        return arr2;
    }

    console.log(numArray);
    numArray = convertArray(numArray);
    console.log(numArray);

    var game = {
        quizItems: [{
            question: "How many cats does Taylor have?",
            options: ["1", "2", "3", "4"],
            answer: "1"
        }, {
            question: "How many cats does Taylor have?",
            options: ["1", "2", "3", "4"],
            answer: "2"
        }, {
            question: "How many cats does Taylor have?",
            options: ["1", "2", "3", "4"],
            answer: "3"
        }, {
            question: "How many cats does Taylor have?",
            options: ["1", "2", "3", "4"],
            answer: "4"
        }]
    }

    for(var i = 0; i < game.quizItems.length; i++) {
        createQuizItem(i);
    }

    function createQuizItem(num) {
        var quizItem = game.quizItems[num];
        var quizItemElem = $('<div>');
        var questionElem = createQuestion(quizItem.question);
        var optionsContainer = $('<div>');
        optionsContainer.click(function () {
            if ($(this).data('is-answered') !== true) {
                $(this).data('is-answered', true);
                optionsContainer.children().each(function () {
                    if ($(this).data('is-answer')) {
                        $(this).addClass('correct');
                    }
                })
            }
        })
        quizItemElem.append(questionElem, optionsContainer);
        for(var i = 0; i < quizItem.options.length; i++) {
            var option = quizItem.options[i];
            var optionElem = createOption(option, option === quizItem.answer);
            optionsContainer.append(optionElem);
        }
        questionsDiv.append(quizItemElem);
    }
    function createQuestion(question) {
        var qE = $('<div>');
        qE.text(question);
        return qE;
    }
    function createOption(option, isRight) {
        var oE = $('<div class="option">');
        oE.text(option);
        oE.data('is-answer', isRight);
        oE.click(function () {
            if (!oE.parent().data('is-answered')) {
                if (!isRight) {
                    oE.addClass('incorrect');
                }
            }
        })
        return oE;
    }

});

