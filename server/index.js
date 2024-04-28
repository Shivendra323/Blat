const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware
const server = express();
const Messages = require('./Routes/blockchain.route');
const Channels = require('./Routes/channels.route');
const { ethers } = require('ethers');
const mongoose = require('mongoose');

const connectionOptions = {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  dbName: 'BlockchainChannels',
};

//  connect database
const connectionUri = "mongodb+srv://shivendra2023is21:62VznD7V1zgrIMJl@blockchainchannels.qcgefsp.mongodb.net/?retryWrites=true&w=majority&appName=BlockchainChannels";
mongoose.connect(connectionUri, connectionOptions)
.then(() => {
  console.log("Database Connected");
})
.catch(err => console.error(err));



server.use(bodyParser.json());
server.use(cors()); // Use cors middleware

//Messagess get and set
server.use('/api/messages', Messages);
server.use('/api/send-message', Messages);

//Subscriber get and subscribe
server.use('/api/subscribeChannel', Channels);
server.use('/api/getSubscriber', Channels);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
