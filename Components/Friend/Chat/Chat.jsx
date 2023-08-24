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
        <div className={Style.Chat_user_info}>
          <Image
            src={images.accountName}
            alt='image'
            width={70}
            height={70}
          />
          <div className={Style.Chat_user_info_box}>
            <h4>{currentUserName}</h4>
            <p className={Style.show}>{currentUserAddress}</p>
          </div>
        </div>
      ) : ("")}
      <div className={Style.Chat_box_box}>
        <div className={Style.Chat_box}>
          <div className={Style.Chat_box_left}>
            {
              friendMsg.map((el, i) => (
                <div>
                  
                </div>
                ))
            }
          </div>
          <div className={Style.Chat_box_left}>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Chat;