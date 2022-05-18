var createInfoBox = function() {
    var infoBox = {
        element: document.getElementById('information-box'),
        defaultClass: 'alert-primary',
        defaultText: 'Player x starts, Click a square to choose.',
        update: function() {
            if (game.winner) {
                infoBox.winner = game.winner;
                infoBox.element.textContent = infoBox.winner.winningText;
                infoBox.element.classList.remove(infoBox.defaultClass);
                infoBox.element.classList.add(infoBox.winner.defaultClass);
            } else {
                if (infoBox.winner) {
                    infoBox.element.classList.remove(infoBox.winner.defaultClass);
                    infoBox.winner = null;
                    infoBox.element.classList.add(infoBox.defaultClass);
                    infoBox.element.textContent = infoBox.defaultText;
                } else {
                    infoBox.element.textContent = "Good luck " + game.currentPlayer.name + ".";
                }
            }
        }
    }
    return infoBox;
}