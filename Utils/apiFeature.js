import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { ChatAppAddress, ChatAppABI } from "../Context/constants";

// General Functions required to have a connection & communication with the SmartContract

// Checks whether the user's Wallet is connected or not
export const CheckIfWalletIsConnected = async () => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
    }
    catch (error) {
        console.log(error);
    }
};

// Connects the user's Ethereum Wallet
export const connectWallet = async () => {
    try {
        if (!window.ethereum) return console.log("Install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log(error);
    }
};

const fetchContract = (signerOrProvider) => new ethers.Contract(ChatAppAddress, ChatAppABI, signerOrProvider);

export const connectingWithContract = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);

        return contract;
    } catch (error) {
        console.log(error);
    }
};

// Curates the Readable timestamp for the messages
export const converTime = (time) => {
    const newTime = new Date(time.toNumber());
    const realTime =
        newTime.getHours() + ":" +
        newTime.getMinutes() + ":" +
        newTime.getSeconds() + "  Date:" +
        newTime.getDate() + "/" +
        (newTime.getMonth() + 1) + "/" +
        newTime.getFullYear();
    
    return realTime;
};