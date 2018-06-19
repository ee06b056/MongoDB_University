const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

let server = app.listen(3000, function () {
    let port = server.address().port;
    console.log('Server running on port %s', port);
});