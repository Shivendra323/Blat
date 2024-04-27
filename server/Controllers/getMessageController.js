const Web3 = require('web3'); 
const MyContract = require("../contract/ChannelChat.json"); 
const contractABI = MyContract.abi; 
const contractAddress = '0x1e9c67F4E6B057b2e69163BeA43978c21f45cc81'; // Enter your contract address here 
const rpcEndpoint = 'http://127.0.0.1:8545'; // Enter your RPC server endpoint URL here 

const web3 = new Web3(new Web3.providers.HttpProvider(rpcEndpoint)); 
  
const contract = new web3.eth.Contract(contractABI, contractAddress); 

const getMessage = async (req, res) => {
    try {
        const { channelId } = req.query;
        // Call the getMessages function of the contract
        const result = await contract.methods.getMessages(channelId).call();
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error('Error getting messages:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { getMessage };
