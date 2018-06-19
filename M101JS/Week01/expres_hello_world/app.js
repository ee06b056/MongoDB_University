const express = require('express');
const app = express();
const engines = require('consolidate');

app.engine('html',engines.nunjucks);
app.set('view engine','html');
app.set('views', __dirname+'/views');

app.get('/', (req, res) => {
    res.render('hello',{name:'libo'});
});

let server = app.listen(3000, function () {
    let port = server.address().port;
    console.log('Server running on port %s', port);
});