

// there are nine boxes with 3 rows of 3 columns
// if a user clicks on a button it'll say x or o
// we will start with x and alternate between x
// and o every click
// var tile = 'x';

// when a user clicks
// if (tile === 'x')
// tile = 'o';
// else 
// tile = 'x';

// if we use a for loop in a for loop
// we can create a bunch of elements to track
// on our page
var buttons = [];
var tile = 'x';
var gameover = false;
var information = document.getElementById('information-box');

for (var i = 0; i < 3; i++) {
    var row = [];
    // create another array
    for (var j = 0; j < 3; j++) {
        var id = "sqr-" + i + "-" + j;
        var newBox = document.getElementById(id);
        row.push(newBox);
        newBox.onclick = function (event) {
            if (gameover) {
                return resetGame();
            }
            if (!event.target.innerHTML) {
                event.target.innerHTML = tile;
                if (checkWin(tile)) {
                    gameover = true;
                    information.textContent = "player " + tile + " won.";
                    tile = 'x';
                    return;
                }
                // newBox.innerHTML = tile;
                if (checkButtonsFilled()) {
                    gameover = true;
                    information.textContent = "catsgame.";
                    tile = 'x';
                    return;
                }
                if (tile === 'x') {
                    tile = 'o';
                } else {
                    tile = 'x';
                }
            }
        }
    }
    buttons.push(row);
}

function resetGame() {
    gameover = false;
    information.textContent = 'Click a square to start a new game';
    clearButtons();
}
function clearButtons() {
    for (var i = 0; i < buttons.length; i++) {
        var row = buttons[i];
        for (var j = 0; j < row.length; j++) {
            var square = row[j];
            square.innerHTML = "";
        }
    }
}
function checkVerticalWin(letter) {
    for (var i = 0; i < 3; i++) {
        var allThreeFilled = true;
        for (var j = 0; j < 3; j++) {
            if (buttons[j][i].innerHTML !== letter) {
                allThreeFilled = false;
                break;
            }
        }
        if (allThreeFilled) {
            return true;
        }
    }
    return false;
}
function checkHorizontalWin(letter) {
    for (var i = 0; i < 3; i++) {
        var allThreeFilled = true;
        for (var j = 0; j < 3; j++) {
            if (buttons[i][j].innerHTML !== letter) {
                allThreeFilled = false;
                break;
            }
        }
        if (allThreeFilled) {
            return true;
        }
    }
    return false;

}
function checkDiagonalWin(letter) {
    if (buttons[0][0].innerHTML === letter
        && buttons[1][1].innerHTML === letter
        && buttons[2][2].innerHTML === letter) {
        return true;
    }
    if (buttons[0][2].innerHTML === letter
        && buttons[1][1].innerHTML === letter
        && buttons[2][0].innerHTML === letter) {
        return true;
    }
    return false;
}
function checkWin(letter) {
    return checkDiagonalWin(letter) 
    || checkVerticalWin(letter)
    || checkHorizontalWin(letter);
}
function checkButtonsFilled() {
    for (var i = 0; i < buttons.length; i++) {
        var row = buttons[i];
        for (var j = 0; j < row.length; j++) {
            var square = row[j];
            if (!square.innerHTML) {
                return false;
            }
        }
    }
    return true;
}

// indexes to visual placement:
// [0][0] [0][1] [0][2]
// [1][0] [1][1] [1][2]
// [2][0] [2][1] [2][2]