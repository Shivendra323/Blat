const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware
const server = express();
const Messages = require('./Routes/blockchain.route');
const { ethers } = require('ethers');



server.use(bodyParser.json());
server.use(cors()); // Use cors middleware

server.use('/api/messages', Messages);
server.use('/api/send-message', Messages);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
