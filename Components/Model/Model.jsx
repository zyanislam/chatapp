import React, { useContext, useState } from 'react';
import Image from "next/image";
import Style from "./Model.module.css";
import images from "../../assets";
import { ContextApp } from '../../Context/ChatAppContext';
import { Loader } from '../../Components/index';

const Model = ({ openBox, title, head, info, image, functionName, address }) => {
  
  const [name, setName] = useState("");
  const [accountAddress, setAccountAddress] = useState("");
  const { loading } = useContext(ContextApp);
  return (
    <div className={Style.Model}>
      <div className={Style.Model_Box}>
        <div className={Style.Model_Box_left}>
          <Image src={image} alt="buddy" width={700} height={700} />
        </div>
        <div className={Style.Model_Box_right}>
          <h1>
            {title}<span>{head}</span>
          </h1>
          <p>{info}</p>
          <div className={Style.Model_Box_right_name}>
            <div className={Style.Model_Box_right_name_info}>
              <Image src={images.username} alt="user" width={30} height={30} />
              <input type="text" placeholder='Your Name' onClick={(e) => setName(e.target.value)}
              />
            </div>

            <div className={Style.Model_Box_right_name_info}>
              <Image src={images.account} alt="user" width={30} height={30} />
              <input type="text" placeholder={address || "Enter Address"} onClick={(e) => setAccountAddress(e.target.value)}
              />
            </div>

            <div className={Style.Model_Box_right_name_button}>
              <button onClick={()=> functionName({name, accountAddress})}>
                {""}
                <Image src={images.send} alt="send" width={30} height={30} />
                {""}
                Submit
              </button>
              <button onClick={()=> openBox(false)}>
                {""}
                <Image src={images.close} alt="close" width={30} height={30} />
                {""}
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Model