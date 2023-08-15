import React, { Children, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { CheckIfWalletIsConnected, ConnectMyWallet, ConnectingWithContract, timeConversion } from "../Utils/apiFeature.js"

export const ContextApp = React.createContext();

export const ProviderApp = ({ children }) => {
    const [account, setAccount] = useState("");
    const [userName, setUserName] = useState("");
    const [friendList, setFriendList] = useState("");
    const [friendMsg, setFriendMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [userLists, setUserLists] = useState("");
    const [error, setError] = useState("");

    //User Data
    const [currentUsername, setCurrentUsername] = useState("");
    const [currentUsernameAddress, setCurrentUsernameAddress] = useState("");

    const router = useRouter();

    //Date Time of Page Loading
    const fetchData = async () => {
        try {
            // Get the contract
            const contract = await ConnectingWithContract();

            // Get the account
            const account = await ConnectMyWallet();
            setAccount(account);

            // Get the user name
            const userName = await contract.getUserName(account)
            setUsername(userName);

            // Get my friend list
            const friendList = await contract.listOfMyFriends()
            setFriendList(friendList);

            // Get all users list
            const userList = await contract.getAllChatAppUsers()
            setFriendList(userList);

        } catch (error) {
            setError("Please Install & Connect Your Wallet!");
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    // Read Messages
    const readMessage = async (friendAddress) => {
        try {
            const contract = await ConnectingWithContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        } catch (error) {
            setError("Currently you have no messages to read")
        }
    };

    // Create Account
    const createAccount = async ({ name, accountAddress }) => { 
        try {
            if (name || accountAddress) return setError("Name & Account Address cannot be empty!")
            const contract = await ConnectingWithContract();
            const getCreatedUser = await contract.createAccount(name);
            setLoading(true);
            await getCreatedUser.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("ERROR!! Please create your account first!");
        }
    }
    return (
        <ContextApp.Provider value={{ readMessage, createAccount }}>
            {children}
        </ContextApp.Provider>
    )
}