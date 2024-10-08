# Blat DApp - Blockchain-Based Open Discussion Forum

Blat is a decentralized discussion platform that utilizes blockchain technology to enable secure, immutable, and transparent conversations on various topics. The DApp (Decentralized Application) allows users to engage in open discussions in themed channels such as Cinema, Sports, Food, Travel, and Technology. Each message is stored on a blockchain, ensuring that conversations are tamper-proof and accessible only to the community.

## Features

- **Decentralized Chat**: Each conversation is secured using blockchain, ensuring no third-party manipulation.
- **Channels for Topics**: Predefined categories (Cinema, Sports, Food, Travel, Technology) make it easy for users to participate in discussions relevant to their interests.
- **Immutable Conversations**: Messages cannot be altered once posted, maintaining transparency and trust within the community.
- **Secure Messaging**: All conversations are encrypted and stored on the blockchain for maximum security and privacy.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js
- **Blockchain**: Ganache, Truffle for local Ethereum blockchain
- **Database**: MongoDB for off-chain storage
- **Smart Contracts**: Solidity
- **Development Tools**: Truffle, Web3.js

## Installation and Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (>= 12.0.0)
- **Ganache** for local blockchain testing
- **Truffle** framework
- **MongoDB** for off-chain data management

### Clone the Repository

```bash
git clone https://github.com/Shivendra323/Blat.git
cd blat-dapp
```

### Install Dependencies

```bash
npm install
cd client
npm install
```

### Smart Contract Setup

1. **Start Ganache** (or any local blockchain provider):
   ```bash
   ganache-cli
   ```
2. **Deploy Smart Contracts**:
   ```bash
   truffle compile
   truffle migrate --reset
   ```

### Start MongoDB

```bash
mongod --dbpath /your/path/to/mongo/data
```

### Run the Application

In the project root directory, run:

```bash
npm run start
```

This will start both the backend server and the frontend app.

### Access the DApp

Once the app is running, you can access the discussion platform at `http://localhost:3000`.

## Usage

1. **Connect Wallet**: Connect to MetaMask to interact with the DApp.
2. **Select a Channel**: Choose one of the five available channels: Cinema, Sports, Food, Travel, Technology.
3. **Post a Message**: Add your message to the selected channel. The message will be stored on the blockchain.
4. **View Messages**: All messages within a channel are displayed in a chronological order. Messages cannot be edited or deleted.

## Contribution

Feel free to fork the repository and submit pull requests for any features or bug fixes. Please ensure that all changes are tested before submission.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## Contact Information

For any queries or further information, please contact:

**Name**: [Shivendra Singh Thakur]  
**Email**: [Shivendra323@gmail.com]  
**LinkedIn**: [www.linkedin.com/in/shivendra-singh-thakur-09a36a1b0]

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
