import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { CheckIfWalletIsConnected, ConnectMyWallet, ConnectingWithContract } from "../Utils/apiFeature.js"

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
    };

    // Add your friends
    const addFriends = async ({name, accountAddress}) => {
        try {
            if (name || accountAddress) return setError("Please provide the Name & Friend Address");

            const contract = await ConnectingWithContract();
            const addMyFriend = await contract.addFriend(accountAddress, name);
            setLoading(true);
            await addMyFriend.wait();
            setLoading(false);
            router.push('/');
            window.location.reload();
        } catch (error) {
            setError("Something went wrong when you tried to add friends!! Try again.");
        }
    };

    // Send message to your friend
    const sendMessage = async ({msg, address}) => {
        try {
            if (msg || address) return setError("Please enter your message.");

            const contract = await ConnectingWithContract();
            const addMessage = await contract.sendMessage(address, msg);
            setLoading(true);
            await addMessage.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("Something went wrong!! Try again.");
        }
    };

    // Read user info
    const readUser = async (userAddress) => {
        const contract = await ConnectingWithContract();
        const userName = await contract.getUsername(userAddress);
        setCurrentUsername(userName);
        setCurrentUsernameAddress(userAddress)
        setLoading(true);
        await addMessage.wait();
        setLoading(false);
        window.location.reload();
       
    };


    return (
        <ContextApp.Provider value={{ readUser, readMessage, createAccount, addFriends, ConnectMyWallet, CheckIfWalletIsConnected, sendMessage, account, userName, friendList, friendMsg, loading, userLists, error }}>
            {children}
        </ContextApp.Provider>
    )
}