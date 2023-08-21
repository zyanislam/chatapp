import React, { useState, useEffect, useContext} from 'react';

//Internal Import
import { UserCard } from "../Components/index";
import Style from '../styles/allusers.module.css';
import { ChatAppContect } from "../Context/ChatAppContext";

const allusers = () => {

  const {userLists addFriends } = userContext(ChatAppContext);
  return (
    <div>
      <div className={Style.alluser_info}>
        <h1>Find Your Friends </h1>
      </div>
      <div className={Style.alluser}>
        {userLists.map((el, i)=>(
          <UserCard key={i + 1} el={el} i={i} addFriends={addFriends}/>
        ))}
      </div>
    </div>
  )
}

export default allusers
