![logo](https://github.com/zyanislam/chatapp/assets/89903034/dcf6ad2f-c46e-4cc8-b54f-8fed344595e4)

# Blockchain-Based Chat Application using Hardhat

Ripples is a decentralized chat application built based on the Ethereum blockchain using Hardhat, a development environment for Ethereum smart contracts. The application allows users to communicate with each other in a secure and private manner, leveraging the transparency and immutability of blockchain technology. This is excellent for use in firms where privacy is of essential importance and needs a platform to communicate without the constant fear and worry of having their work or conversation being leaked or commercialized by entities like Meta (Facebook, WhatsApp, Instagram etc) and Google.

## Features

- **Decentralized Messaging**: Messages are stored on the Ethereum blockchain, ensuring data integrity and censorship resistance (simulated using HardHat).

- **Secure Communication**: Messages are encrypted to maintain user privacy and security.

- **Peer-to-Peer Architecture**: Direct communication between users, avoiding centralized intermediaries.

- **Metamask Integration**: Users can interact with the application through the Metamask browser extension.

## Getting Started

Follow these instructions to set up and run the chat application locally on your machine.

### Prerequisites

- Node.js and npm installed. [Download Node.js](https://nodejs.org/en/download/)
  
- Metamask browser extension installed. [Get Metamask](https://metamask.io/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zyanislam/chatapp.git
   ```

2. Change into the project directory:
   ```bash
   cd chatapp
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Initiate the Hardhat Nodes to get the locally deployed accounts with Ethereum.
   ```bash
   npx hardhat node
   ```
   
5. Next, deploy the Smart Contract and move the JSON file (ChatApp.json) in the artifacts/contracts directory to Context directory. Use the following command to deploy the contract.
   ```bash
   npx hardhat run --network localhost scripts/deploy.js
   ```

6. Lastly, to run the application and start the developement server use the following code:
   ```bash
   npm run dev
   ```
   
### Note

7. Create your own local network first on MetaMask wallet or else the ethereum won't be shown on your wallet after importing the accounts.

8. Visit [`http://localhost:3000`](http://localhost:3000) in your web browser.

9. Connect your Metamask wallet to the application and start chatting with other users.
    
10. Remember to reset your account everytime you change the account in Metamask extension to make sure there is no sort of error in the transaction.
    To do that:
    
    Open up **Metamask extension**.
    
    Go to **Seetings** > **Advanced** > **'Reset account' button**.


## Contributing

Contributions to this project are now closed. But you can always download the repository yourself and add some cool new features.


## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration & etc.
  
---

**Important:** This project is intended for educational and demonstration purposes only. Do not use real funds or sensitive information in this development environment.
