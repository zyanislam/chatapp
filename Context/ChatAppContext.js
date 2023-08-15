import React, { Children, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { CheckIfWalletIsConnected, ConnectMyWallet, ConnectingWithContract, timeConversion } from "../Utils/apiFeature.js"

export const Context = React.createContext();

export const Provider = ({ children }) => {
    const title = "Hey"
}