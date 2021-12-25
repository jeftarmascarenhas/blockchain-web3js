const Web3 = require("web3");

// I am using Ganache as my blockchain
const url = "http://127.0.0.1:7545";
const address = "0x27A80Ea80f317860a40fb658825Bd71D8097273d";

const web3 = new Web3(url);

// Get your existing account balance on Ganache
web3.eth.getBalance(address, (err, wei) => {
  console.log("err: ", err);

  const balanceEther = web3.utils.fromWei(wei, "ether");
  console.log("balance - Wei to ETH: ", balanceEther, "Ether");

  const balanceWei = web3.utils.toWei(balanceEther);
  console.log("balance - ETH to Gwei: ", balanceWei, "wei");
});
