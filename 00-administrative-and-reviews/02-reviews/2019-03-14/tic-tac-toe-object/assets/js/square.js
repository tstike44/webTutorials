var createSquare = function(i, j) {
    var id = "sqr-" + i + "-" + j;
    var square = {
        element: document.getElementById(id),
        defaultClass: 'alert-secondary',
        owner: null,
        click: function() {
            if (game.isOver) {
                game.start();
                return;
            }
            if (!square.owner) {
                square.updateOwner();
                game.checkState();
                game.updateCurrentPlayer();
            }
        },
        updateOwner() {
            square.owner = game.currentPlayer;
            square.element.textContent = square.owner.name;
            square.element.classList.remove(square.defaultClass);
            square.element.classList.add(square.owner.defaultClass);
        },
        clearOwner() {
            if (square.owner) {
                square.element.classList.remove(square.owner.defaultClass);
                square.element.classList.add(square.defaultClass);
                square.element.textContent = "";
                square.owner = null;
            }
        }
    }
    square.element.onclick = square.click;
    return square;
}