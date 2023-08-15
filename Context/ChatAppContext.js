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
            
        } catch (error) {
            setError("Please Install & Connect Your Wallet!");
        }
     }


    return (
        <ContextApp.Provider value={{ }}>
            {children}
        </ContextApp.Provider>
    )
}