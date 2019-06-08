var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/blockchain', function (req, res) {

})

app.post('/transaction', function (req, res) {
    console.log(req.body)
    res.send(`The amount of the transaction is ${req.body.amount} bitcoin.`)
})

app.get('/mine', function (req, res) {

})

app.listen(3000, function () {
    console.log('listening on port 3000...');
})