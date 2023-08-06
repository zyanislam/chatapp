import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { ChatAppAddress, ChatAppABI } from "../Context/constants";

export const CheckIfWalletIsConnected = async () => {
    try {
        if (!window.ethereum) return console.log("First Install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
    }
    catch (error) {
        
    }
 };