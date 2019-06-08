const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

// bitcoin.createNewTransaction(50,'ALEXHT845SJ5TKCJ2','JENN5BG5DF6HT8NG9');
// bitcoin.createNewTransaction(200,'ALEXHT845SJ5TKCJ2','JENN5BG5DF6HT8NG9');
// bitcoin.createNewTransaction(300,'ALEXHT845SJ5TKCJ2','JENN5BG5DF6HT8NG9');

const previousBlockHash = '87765DA6CCF0668238C1D27C35692E11';
const currentBlockData = [
    {
        amount: 10,
        sender: 'B4CEE9C0E5CD571',
        recipient: '3A3F6E462D48E9',
    }, {
        amount: 30,
        sender: '998798ASDFA',
        recipient: '23847982',
    }, {
        amount: 50,
        sender: 'LJK2J4234234',
        recipient: '3JLJ20934',
    }
]
const nonce = 5382;

console.log(bitcoin)

// bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);

// console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData, nonce))