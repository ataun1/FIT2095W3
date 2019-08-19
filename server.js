let express = require('express');

let app = express();
let router = require('./router.js');

app.use('/', router);
//app.use('/newItem', router);

app.listen(8080);
