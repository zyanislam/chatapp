import React, { useContext } from 'react'
import Image from "next/image";
import Style from './Friend.module.css';
import Card from './Card/Card';
import Chat from './Chat/Chat';
import { ChatAppContect } from '../../Context/ChatAppContext';



const Friend = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const { sendMessage, account, friendLists, readMessage, readUser, userName, loading, currentUserName, currentUserAddress } = useContext(ChatAppContect)
  return (
    <div>Friend</div>
  )
}

export default Friend