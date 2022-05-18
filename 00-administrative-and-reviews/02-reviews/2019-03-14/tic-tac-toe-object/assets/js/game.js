// coding convention ALL_UPPERCASE with underscores between
// means this is something that should be unchanging, including
// the property values.  We call this constant (not associated with const)
var CATSGAME = {
    winningText: 'Sorry, catsgame.',
    defaultClass: 'alert-dark'
}

var game = {
    currentPlayer: null,
    currentPlayerId: 0,
    infoBox: createInfoBox(),
    board: createBoard(),
    isOver: false,
    winner: null,
    players: [
        {
            name: 'x',
            defaultClass: 'alert-warning',
            winningText: 'Good job x, I always knew you would win!'
        },
        {
            name: 'o',
            defaultClass: 'alert-info',
            winningText: 'I never doubted you o, you win!'
        }
    ],
    checkState() {
        if (game.board.checkWin()) {
            game.isOver = true;
            game.winner = game.currentPlayer;
        }
        if (game.board.checkFull()) {
            game.isOver = true;
            game.winner = CATSGAME;
        }
        game.infoBox.update();
    },
    updateCurrentPlayer: function() {
        game.currentPlayerId = (game.currentPlayerId + 1) % 2;
        game.currentPlayer = game.players[game.currentPlayerId];
    },
    start: function() {
        game.currentPlayerId = 0;
        game.currentPlayer = game.players[game.currentPlayerId];
        game.winner = null;
        game.board.clear();
        game.isOver = false;
        game.infoBox.update();
    }
}

// make game begin!
game.start();