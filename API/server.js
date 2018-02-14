var express = require('express'),
    cors = require('cors'),
    fs = require('fs')

var app = express(),
    port = process.env.PORT || 8800

app.use(cors())

app.get('/', function (req, res) {
    res.send('Server works fine, dude!');
})

app.get('/getfile', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');

    var obj = JSON.parse(fs.readFileSync('public/data/data.json'));
    res.send(JSON.stringify(obj));
})

app.get('/getjson2', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');

    var obj = JSON.parse(fs.readFileSync('public/data/data2.json'));
    res.send(JSON.stringify(obj));
})


app.listen(port, function (err) {
    console.log('running server on port ' + port);
    console.log('CORS-enabled web server listening on port  ' + port);
});