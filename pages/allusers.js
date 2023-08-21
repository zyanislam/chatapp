import React, { useState, useEffect, useContext} from 'react';

//Internal Import
import { UserCard } from "../Components/index";
import Style from '../styles/allusers.module.css';
import { ChatAppContect } from "../Context/ChatAppContext";

const allusers = () => {

  const {userLists addFriends } = userContext(ChatAppContext);
  return (
    <div>
      <dev className={Style.alluser_info}>
        <h1>Find Your Friends </h1>
      </dev>
      <dev className={Style.alluser}>
        {userLists.map((el, i)=>(
          <UserCard key={i + 1} el={el} i={i} addFriends={addFriends}/>
        ))}
      </dev>
      </div>
  )
}

export default allusers