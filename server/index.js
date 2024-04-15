const Web3 = require('web3');
const contractABI = require('./HelloworldABI.json'); // Replace with your contract ABI
const contractAddress = '0xd8b934580fcE35a11B58C6D73aDeE468a2833fa8'; // Replace with your contract address
const ganacheRPC = 'http://127.0.0.1:8545'; // Ganache RPC endpoint

async function main() {
    const web3 = new Web3(ganacheRPC);
    const accounts = await web3.eth.getAccounts();
    
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Call getMessage() method
    const message = await contract.methods.getMessage().call();
    console.log('Current message:', message);

    // Set a new message
    const newMessage = 'Hello, Ganache!';
    await contract.methods.setMessage(newMessage).send({ from: accounts[0] });
    console.log('New message set to:', newMessage);

    // Call getMessage() again to verify
    const updatedMessage = await contract.methods.getMessage().call();
    console.log('Updated message:', updatedMessage);
}

main().catch(console.error);
