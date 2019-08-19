let express = require('express');

let app = express();

app.get('/math/:operation/:operand1/:operand2', function (request, response) {

    let opt = request.params.operation;

    let op1 = request.params.operand1;

    let op2 = request.params.operand2;



    if (opt === "add") {

        result = parseInt(op1) + parseInt(op2);

        response.send("Output: " + result + "");
    }

    else if (opt === "sub") {

        result = parseInt(op1) - parseInt(op2);

        response.send("Output: " + result + "");
    }

    else {

        response.send("Invalid operation!");
    }
})

app.listen(8080);



