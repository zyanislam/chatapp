![logo](https://github.com/zyanislam/chatapp/assets/89903034/057df948-46ef-47c5-81e3-81b517352fb0)

# Blockchain-Based Chat Application using Hardhat

Ripples is a decentralized chat application built based on the Ethereum blockchain using Hardhat, a development environment for Ethereum smart contracts. The application allows users to communicate with each other in a secure and private manner, leveraging the transparency and immutability of blockchain technology. This is excellent for use in firms where privacy is of essential importance and needs a platform to communicate without the constant fear and worry of having their work or conversation being leaked or commercialized by entities like Meta (Facebook, WhatsApp, Instagram etc) and Google.

## Features

- 🗼 **Decentralized Messaging**: Messages are stored on the Ethereum blockchain, ensuring data integrity and censorship resistance (simulated using HardHat).

- 🔒 **Secure Communication**: Messages are encrypted to maintain user privacy and security.

- 🧑🏻 **Peer-to-Peer Architecture**: Direct communication between users, avoiding centralized intermediaries.

- 🦊 **Metamask Integration**: Users can interact with the application through the Metamask browser extension.

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
   
### Note:
#### You must have all the prerequisities in your local device before you can use this application. Read above to see if you have them installed or not.

7. Create your own local network first on MetaMask wallet or else the ethereum won't be shown on your wallet after importing the accounts.

8. Visit [`http://localhost:3000`](http://localhost:3000) in your web browser.

9. Connect your Metamask wallet to the application and start chatting with other users.
    
10. Remember to reset your account everytime you change the account in Metamask extension to make sure there is no sort of error in the transaction.
    To do that:
    
    Open up **Metamask extension**.
    
    Go to **Seetings** > **Advanced** > **'Reset account' button**.


## Contributing

Contributions to this project are now closed. But you can always download the repository yourself and add some cool new features.

## Screenshots

![Starting](https://github.com/zyanislam/chatapp/assets/89903034/66493616-46d8-4cff-9070-455552198904)

#### Fig 1: Metamask wallet is triggered and the user is asked to enter his/her credentials to open the digital wallet.

<br>

![2](https://github.com/zyanislam/chatapp/assets/89903034/5fe3e157-fd3e-4020-bae6-c3553a8ee990)

#### Fig 2: This is the Login Page where the user has to enter their name to enter the platform.

<br>

![3](https://github.com/zyanislam/chatapp/assets/89903034/e968b604-fe9a-4292-afd9-8f7ce4d7a456)

#### Fig 3: This is the homepage when the user logins in here they can see all the users who are authorized to use this platform by the organization and add them as their friend to chat.

<br>

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration & etc.
  
---

**Important:** This project is intended for educational and demonstration purposes only. Do not use real funds or sensitive information in this development environment.
