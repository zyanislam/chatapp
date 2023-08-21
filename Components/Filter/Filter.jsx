import React, { useState, useContext } from 'react';
import Image from "next/image";

//Internal Import
import Style from './Filter.module.css';
import images from '../../assets';
import {ChatAppContect} from '../../Context/ChatAppContext';
import {Model} from "../index";

const Filter = () => {
  const {account, addFriends } = useContext(ChatAppContect);
  const { } = useContext(ChatAppContect);
  //USESTATE
  const [addFriend, setFriend] = useState(false);
  return (
    <div className={Style.Filter}>
      <div className={Style.Filter_box}>
        <div className={Style.Filter_box_left}>
          <div className={Style.Filter_box_left_search}>
            <Image src={images.search} alt="image" width={20} height={20}
            <input type="text" placeholder="search.." />
          </div>
        </div>
        <div className={Style.Filter_box_right}>
          <button>
            <Image src={images.clear} alt="clear" width={20} height={20}
            CLEAR CHAT
          </button>
          <button onClick={()=> setAddFriend(true)}>
            <Image src={images.clear} alt="clear" width={20} height={20}
            ADD FRIEND
          </button>
        </div>
      </div>
      {/* // Model Component */}
      {addFriend && (
        <div className={Style.Filter_model}>
          <Model
            openBox={setAddFriend}
            title="WELCOME TO"
              head="CHAT BUDDY"
              info="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ea adipisci fugiat est optio laudantium praesentium repudiandae vitae 
              voluptatibus quae, animi odit architecto? Voluptatum blanditiis quasi ipsum. 
              Qui adipisci magnam eaque." 
              smallInfo="Kindly Select Your Friend Name & Address.."
              image={images.hero}
              functionName={addFriends}
          />
        </div>
      )}
    </div>
  );
};

export default Filter