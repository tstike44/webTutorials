var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

app.get('/:operator/:num1/:num2', function (req, res) {
    if (isNaN(req.params.num1) || isNaN(req.params.num2)) {
        return res.send("parameter 2 and 3 in the url must be numbers.");
    }
    var num1 = parseFloat(req.params.num1);
    var num2 = parseFloat(req.params.num2);
    switch (req.params.operator) {
        case 'add':
        case '+':
            return res.json(num1 + num2);
        case 'subtract':
        case '-':
            return res.json(num1 - num2);
        case 'multiply':
        case '*':
            return res.json(num1 * num2);
        case 'divide':
        case '/':
            return res.json(num1 / num2);
        default:
            return res.send("parameter 1 in the url must be add/subtract/multiply/divide");
    }
})


app.listen(port, function () {
    console.log('listening on port: ' + port);
})