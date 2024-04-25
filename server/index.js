const {Web3} = require('web3');
const contractABI = require('./Blat.json'); // Replace with your contract ABI
const contractAddress = '0xf643af9B9e60dEBa7168fd6D9b2150406D66E79c'; // Replace with your contract address
const ganacheRPC = 'http://127.0.0.1:8545'; // Ganache RPC endpoint

async function main() {
    try {
        const web3 = new Web3(ganacheRPC);
        const accounts = await web3.eth.getAccounts();
        
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Register a new user with email
        const userEmail = 'example@example.com';
        await contract.methods.register(userEmail).send({ from: accounts[0] });
        console.log('User registered with email:', userEmail);

        // Subscribe user to a channel
        const channelName = 'example_channel';
        await contract.methods.subscribe(channelName).send({ from: accounts[0] });
        console.log('User subscribed to channel:', channelName);

        // Request latest feed for the subscribed channel
        await contract.methods.requestLatestFeed(channelName).send({ from: accounts[0] });
        console.log('Latest feed requested for channel:', channelName);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
