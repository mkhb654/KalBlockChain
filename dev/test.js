const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash = '097767657635535533';
const currentBlockData =[
  {
      amount: 10,
      sender: 'N643566435467466446',
      recipient:'968764756464746466'

  },  
  {
    amount: 13,
    sender: 'N643534335467466446',
    recipient:'968764756464746466'
   }, 
];
const nounce =1000;


console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nounce));
