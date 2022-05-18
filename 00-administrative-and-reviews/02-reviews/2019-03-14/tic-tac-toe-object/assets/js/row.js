var createRow = function(i) {
    var row = {
        squares: [],
        clear: function () {
            for (var i = 0; i < row.squares.length; i++) {
                var square = row.squares[i];
                square.clearOwner();
            }
        }
    };
    for (var j = 0; j < 3; j++) {
        row.squares.push(createSquare(i,j));
    }
    return row;
}