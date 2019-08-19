let express = require('express');
let router = express.Router();
let  db = [];

router.get('/', function(request, response){
    //
})

router.get('/listAllItems', function(request, response){
    response.generateList();
})

router.get('/newItem/:name/:qty/:price', function(request, response){
    let item = {
        id: Math.round(Math.random()*1000),
        name : request.params.name,
        quantity : parseInt(request.params.qty),
        price : parseInt(request.params.price)
    }
    db.push(item);
    response.send(generateList());
})

router.get('/deleteItem/:id',function(request, response){
    for (let i = 0; i < db.length; i++){
        if (db[i].id === parseInt(request.params.id)){
            db.splice(i,1);
            break;
        }
    }
    response.send(generateList());
});

router.get('/totalValue', function(request, response){
    let totVal = 0;
    for (let i = 0; i < db.length; i++){
        totVal += db[i].price * db[i].quantity;
    }
    response.send("Total Value of the warehouse is : "+ totVal);
})

function generateList(){
    let str = 'ID   Name    Quantity    Price   Cost<br/>';
    for(let i = 0; i <db.length; i++ ){
        str+= db[i].id + '  |   ' + db[i].name + '  |   ' + db[i].quantity 
        +  '  |   ' +db[i].price +  '  |   '  + db[i].price * db[i].quantity + "<br/>"
        ;
    }
    return str;
}

module.exports = router;