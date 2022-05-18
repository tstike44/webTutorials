var createBoard = function() {
    var board = {
        rows: [],
        checkFull: function () {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    if (!board.rows[i].squares[j].owner) {
                        return false;
                    }
                }
            }
            return true;
        },
        checkWinHorizontal: function () {
            for (var i = 0; i < 3; i++) {
                var allThreeFilled = true;
                for (var j = 0; j < 3; j++) {
                    if (board.rows[i].squares[j].owner !== game.currentPlayer) {
                        allThreeFilled = false;
                        break;
                    }
                }
                if (allThreeFilled) {
                    return true;
                }
            }
            return false;
        },
        checkWinVertical: function () {
            for (var i = 0; i < 3; i++) {
                var allThreeFilled = true;
                for (var j = 0; j < 3; j++) {
                    if (board.rows[j].squares[i].owner !== game.currentPlayer) {
                        allThreeFilled = false;
                        break;
                    }
                }
                if (allThreeFilled) {
                    return true;
                }
            }
            return false;
        },
        checkWinDiagonal: function () {
            if (board.rows[0].squares[0].owner === game.currentPlayer
                && board.rows[1].squares[1].owner === game.currentPlayer
                && board.rows[2].squares[2].owner === game.currentPlayer) {
                return true;
            }
            if (board.rows[2].squares[0].owner === game.currentPlayer
                && board.rows[1].squares[1].owner === game.currentPlayer
                && board.rows[0].squares[2].owner === game.currentPlayer) {
                return true;
            }
            return false;
        },
        checkWin: function () {
            return board.checkWinHorizontal() || board.checkWinVertical() || board.checkWinDiagonal();
        },
        clear: function () {
            for (var i = 0; i < board.rows.length; i++) {
                var row = board.rows[i];
                row.clear();
            }
        }
    };
    for (var i = 0; i < 3; i++) {
        board.rows.push(createRow(i));
    }
    return board;
}