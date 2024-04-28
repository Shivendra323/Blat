const Web3 = require('web3'); 
const MyContract = require("../contract/ChannelChat.json"); 
const contractABI = MyContract.abi; 
const contractAddress = '0x0E167e692a63045f655AbAB74796085B6916D1B2'; // Enter your contract address here 
const rpcEndpoint = 'http://127.0.0.1:8545'; // Enter your RPC server endpoint URL here 

const web3 = new Web3(new Web3.providers.HttpProvider(rpcEndpoint)); 
  
const contract = new web3.eth.Contract(contractABI, contractAddress); 

const sendMessage = async (channelId, userId, message, timestamp) => {
  try {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.sendMessage(channelId, userId, message).send({
      from: accounts[0], // Using the first account as the sender, change as per your setup
      gas: 3000000, // Adjust gas value as needed
    });
    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

const setMessages = async (req, res) => {
  try {
    const { channelId, userId, message, timestamp } = req.body;
    // Convert timestamp to seconds
    const timestampInSeconds = Math.floor(timestamp / 1000);
    await sendMessage(channelId, userId, message, timestampInSeconds);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { setMessages };
