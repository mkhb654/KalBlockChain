const sha256 = require ('sha256');
function Blockchain(){
    this.chain = [];
    this.pendingTransaction = [];
}

Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
	const newBlock = {
		index: this.chain.length + 1,
		timestamp: Date.now(),
		transactions: this.pendingTransactions,
		nonce: nonce,
		hash: hash,
		previousBlockHash: previousBlockHash
	};

	this.pendingTransactions = [];
	this.chain.push(newBlock);

	return newBlock;
};

Blockchain.prototype.getLastBlock = function(){
    return test.chain(this.chain.length -1);
}
Blockchain.prototype.createNewTransaction = function(amount, sender, recipents){
    //create new transaction objects 
    //amount , sender , recipents 
    //pending transaction are not recorded, until a new block in mined.  After Proof of Stake
    const newTransaction = {
     amount: amount,
     sender: sender,
     recipents: recipents, 
    };
    this.pendingTransactions.push(newTransaction);
     return this.getLastBlock()['index'];
  
}
Blockchain.prototype.hashBlock = function (previousBlockHash,currentBlockData, nonce ){
    const dataAsAString = previousBlockHash + nonce+toString() +JSON.stringify(currentBlockData);
    const hash =sha256(dataAsAString);
    return hash;
}



module.exports = Blockchain;
