import React, { useState, useContext } from 'react'
import Image from "next/image";
import Style from './Friend.module.css';
import Card from "./Card/Card";
import Chat from "./Chat/Chat";
import images from "../../assets";
import { ChatAppContect } from '../../Context/ChatAppContext';



const Friend = () => {
  const {
    sendMessage,
    account,
    friendLists,
    friendMsg,
    readMessage,
    readUser,
    userName,
    loading,
    currentUserName,
    currentUserAddress } = useContext(ChatAppContect)
  return (
    <div className={Style.Friend}>
      <div className={Style.Friend_Box}>
        <div className={Style.Friend_Box_left}>
          {friendLists.map((el, i) => (
            <Card
              key={i + 1}
              el={el}
              i={i}
              readMessage={readMessage}
              readUser={readUser}
            />
          ))}
        </div>
        <div className={Style.Friend_Box_right}>
          <Chat
            functionName={sendMessage}
            readMessage={readMessage}
            friendMsg={friendMsg}
            account={account}
            userName={userName}
            loading={loading}
            currentUserName={currentUserName}
            currentUserAddress={currentUserAddress}
            readUser={readUser}
          />
        </div>
      </div>
    </div>
  )
}

export default Friend