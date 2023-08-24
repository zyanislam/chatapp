![logo](https://github.com/zyanislam/chatapp/assets/89903034/dcf6ad2f-c46e-4cc8-b54f-8fed344595e4)

# Blockchain-Based Chat Application using Hardhat

This is a decentralized chat application built on the Ethereum blockchain using Hardhat, a development environment for Ethereum smart contracts. The application allows users to communicate with each other in a secure and private manner, leveraging the transparency and immutability of blockchain technology.

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

### Installation

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

4. Create a new file named `.env` in the root directory and add the following variables:

   ```env
   INFURA_API_KEY=your_infura_api_key
   MNEMONIC=your_metamask_mnemonic
   ```

   Note: Make sure you have funded your test Ethereum wallet with some Ether for deploying and interacting with the smart contracts.

### Usage

1. Compile the smart contracts:
   ```bash
   npx hardhat compile
   ```

2. Deploy the smart contracts to your local blockchain:
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Visit `http://localhost:3000` in your web browser.

5. Connect your Metamask wallet to the application and start chatting with other users.

### Testing

To run the smart contract tests, use the following command:

```bash
npx hardhat test
```

## Contributing

Contributions to this project are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.

---

**Important:** This project is intended for educational and demonstration purposes only. Do not use real funds or sensitive information in this development environment.
