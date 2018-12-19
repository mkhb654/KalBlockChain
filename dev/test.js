const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

console.log(bitcoin);
const previousBlockHash = '097767657635535533';
const currentBlockData =[
  {
      amount: 10,
      sender: 'N64356643546746644A',
      recipient:'968764456464746466'

  },  
  {
    amount: 13,
    sender: 'N643534335&67466446',
    recipient:'968764756464746466'
   }, 
];
const nounce =1000;


console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
