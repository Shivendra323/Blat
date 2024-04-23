const Web3 = require('web3');
const contractABI = require('./YourContractABI.json'); // Replace with your contract ABI
const contractAddress = '0xbeE4192B5f672B867B13f0EB1d645F9190BDbcF9'; // Replace with your contract address
const ganacheRPC = 'http://127.0.0.1:7545'; // Ganache RPC endpoint

async function main() {
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
}

main().catch(console.error);
