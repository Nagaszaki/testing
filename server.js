'use strict'
const express = require('express');
const app = express();

app.use(express.static('public'));

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(){
    console.log('Server is running at port: ' + port);
});
