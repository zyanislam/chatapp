import React, { Children, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { CheckIfWalletIsConnected, ConnectMyWallet, ConnectingWithContract, timeConversion } from "../Utils/apiFeature.js"

export const ContextApp = React.createContext();

export const ProviderApp = ({ children }) => {
    const [account, setAccount] = useState("");
    return (
        <ContextApp.Provider value={{ }}>
            {children}
        </ContextApp.Provider>
    )
}