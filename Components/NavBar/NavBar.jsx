import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Style from "./NavBar.module.css";
import { ContextApp } from '../../Context/ChatAppContext';
import { Model, Error } from "../index";
import images from "../../assets";
import { useContext } from "react";

const NavBar = () => {
    const menuItems = [
        {
            menu: "ALL USERS",
            link: "allusers",
        },
        {
            menu: "CHAT",
            link: "/",
        },
        {
            menu: "CONTACT",
            link: "/",
        },
        {
            menu: "SETTING",
            link: "/",
        },
        {
            menu: "FAQS",
            link: "/",
        },
        {
            menu: "TERMS OF USE",
            link: "/",
        },
  ];
  
    // Use State
    const [active, setActive] = useState(2);
    const [open, setOpen] = useState(false);
    const [openModel, setOpenModel] = useState(false);

    const { account, userName, ConnectMyWallet, createAccount, error } = useContext(ContextApp);
    return (
        <div className={Style.NavBar}>
            <div className={Style.NavBar_Box}>
              <div className={Style.NavBar_Box_left}>
                <Image src={images.logo} alt="logo" width={175} height={80}/>
              </div>
            <div className={Style.NavBar_Box_right}>
            
              {/* //DESKTOP */}
              <div className={Style.NavBar_Box_right_menu}>
                {menuItems.map((el, i)=> (
                  <div
                    onClick={() => setActive(i + 1)}
                    key={i + 1}
                    className={`${Style.NavBar_Box_right_menu_items} ${active == i + 1 ? Style.active_btn : ""
                    }`}
                    >
                    <Link
                      className={Style.NavBar_Box_right_menu_items_link}
                        href={el.link}
                        >
                            {el.menu}
                    </Link>
                  </div>
                ))}
            
              </div>
            
              {/* //MOBILE */}
              {open && (
                <div className={Style.mobile_menu}>
                {menuItems.map((el, i)=> (
                    <div onClick={()=> setActive(i + 1)} key={i+1} 
                    className={`${Style.mobile_menu_items} ${
                        active == i + 1 ? Style.active_btn : ""
            
                    }`}
                    >
                        <Link className={Style.mobile_menu_items_link}
                        href={el.link}>
                          {el.menu}
                        </Link>
                    </div>
                ))}

                  <p className={Style.mobile_menu_btn}>
                      <Image
                        src={images.close}
                        alt="close"
                        width={50}
                        height={50}
                        onClick={()=> setOpen(false)}
                      />
                  </p>
                </div>
              )}
            
             {/* CONNECT WALLET */}
             <div className={Style.NavBar_Box_right_connect}>
             {account== "" ? (
                <button onClick={()=> ConnectMyWallet()}>
                {""}
                <span>Connect My Wallet</span> 
                </button>
             ) : (
                <button onClick={()=> setOpenModel(true)}>
                    {""}
                    <Image src={userName ? images.accountName : images.create2}
                    alt="Account Image"
                    width={20}
                    height={20} 
                    />
                    {''}
                    <small>{userName || "Create Account"}</small>
                </button>
             )}   
            </div> 
            <div
             className={Style.NavBar_Box_right_open}
                onClick={()=> setOpen(true)}
            >
                <Image src={images.open} alt="open" width={30} height={30}/>
            </div>

            </div>
        </div>

        {/* Model Component */}
        {!openModel && (
          <div className={Style.modelBox}>
            <Model
              openBox={setOpenModel}
              title="Welcome to"
              head="Ripples"
              info="In a world where data privacy and security are paramount, Ripples takes a giant leap forward by utilizing the inherent security features of blockchain. Every conversation, message, and media shared on our platform is encrypted, tamper-proof, and stored across a distributed network, ensuring that your personal and sensitive information remains truly private."
              image={images.hero}
              functionName={createAccount}
              address={account}
            />
          </div>
        )}
        {error == "" ? "" : <Error error={error} />}
      </div>
    );
};


export default NavBar;
