import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Style from './Chat.module.css';
import images from '../../../assets';
import { converTime } from "../../../Utils/apiFeature";
import { Loader } from "../../index";

const Chat = ({ functionName, readMessage, friendMsg, account, userName, loading, currentUserName, currentUserAddress }) => {
  const [message, setMessage] = useState('');
  const [chatData, setChatData] = useState({
    name: "",
    address: "",
  });
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    setChatData(router.query);
  }, [router.isReady]);

  return (
    <div className={Style.Chat}>
      {currentUserName && currentUserAddress ? (
        <div>
          
        </div>
      )}
    </div>
  )
};

export default Chat;