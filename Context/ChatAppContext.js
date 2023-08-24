import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import {
    CheckIfWalletIsConnected, connectWallet, connectingWithContract
} from "../Utils/apiFeature.js"

export const ChatAppContect = React.createContext();

export const ChatAppProvider = ({ children }) => {
    const [account, setAccount] = useState("");
    const [userName, setUserName] = useState("");
    const [friendLists, setFriendLists] = useState([]);
    const [friendMsg, setFriendMsg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userLists, setUserLists] = useState([]);
    const [error, setError] = useState("");

    // User Data
    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUserAddress, setCurrentUserAddress] = useState("");

    const router = useRouter();

    // Date Time of Page Loading
    const fetchData = async () => {
        try {
            // Get Contract
            const contract = await connectingWithContract();

            // Get Account
            const connectAccount = await connectWallet();
            setAccount(connectAccount);

            // Get the user name
            const userName = await contract.getUsername(connectAccount);
            setUserName(userName);

            // Get My Friend List
            const friendLists = await contract.getMyFriendList();
            setFriendLists(friendLists);

            // Get All Users
            const userList = await contract.getAllAppUser();
            setUserLists(userList);

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    // Read Messages
    const readMessage = async (friendAddress) => {
        try {
            const contract = await connectingWithContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        } catch (error) {
            console.log("Currently you have no new Message!");
        }
    };

    // Create Account
    const createAccount = async ({ name, accountAddress }) => {
        try {
            // if (name || accountAddress)
            //     return setError("Name & Account Address cannot be empty!");
            const contract = await connectingWithContract();
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
    const addFriends = async ({ name, accountAddress }) => {
        try {
            // if (name || accountAddress) return setError("Please provide the Name & Friend Address");

            const contract = await connectingWithContract();
            const addMyFriend = await contract.addFriend(accountAddress, name);
            setLoading(true);
            await addMyFriend.wait();
            setLoading(false);
            router.push("/");
            window.location.reload();
        } catch (error) {
            setError("Something went wrong when you tried to add friends!! Try again.");
        }
    };

    // Send message to your friend
    const sendMessage = async ({msg, address}) => {
        try {
            // if (msg || address) return setError("Please enter your message.");

            const contract = await connectingWithContract();
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
        const contract = await connectingWithContract();
        const userName = await contract.getUsername(userAddress);
        setCurrentUserName(userName);
        setCurrentUserAddress(userAddress);
    };


    return (
        <ChatAppContect.Provider value={{
            readMessage,
            createAccount,
            addFriends,
            sendMessage,
            readUser,
            account,
            userName,
            friendLists,
            friendMsg,
            loading,
            userLists,
            error,
            currentUserName, currentUserAddress, connectWallet, CheckIfWalletIsConnected
        }}>
            {children}
        </ChatAppContect.Provider>
    )
}
