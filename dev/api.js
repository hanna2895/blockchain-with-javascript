var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const uuid = require('uuid/v1');
const bitcoin = new Blockchain;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/blockchain', function (req, res) {
    res.send(bitcoin)
})

app.post('/transaction', function (req, res) {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient)
    res.json({ note: `Transaction will be added in block ${blockIndex}.`})
})

app.get('/mine', function (req, res) {
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transactions: bitcoin.pendingTransactions,
        index: lastBlock['index'] + 1
    };
    const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData)

    const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce)

    const nodeAddress = uuid().split('-').join('');
    
    bitcoin.createNewTransaction(12.5, "00", nodeAddress)
    
    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);

    res.json({
        note: 'New block mined successfully',
        block: newBlock
    })


})

app.listen(3000, function () {
    console.log('listening on port 3000...');
})