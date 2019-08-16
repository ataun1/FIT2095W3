let express = require('express');
let router = express.Router();
let  db = [];

router.get('/', function(request, response){
    //
})

router.get('/list', function(request, response){
    response.generateList();
})

router.get('/newItem/:n1/:n2/:n3', function(request, response){
    let item = {
        id: Math.round(Math.random()*1000),
        name = request.query.name
         = request.query.qty

    }
})

function generateList(){
    let str = 'ID   Name    Quantity    Price   Cost<br/>';
    for(let i = 0; i <db.length; i++ ){
        str+= db[i].id + '  |   ' + db[i].name + '  |   ' + db[i].quantity 
        + db[i].price + '   |   ' + db[i].price * db[i].quantity;
    }
    return str;
}