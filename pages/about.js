import React, {useEffect, useState, useContext} from 'react'
import Style from '../styles/about.module.css';



const index = () => {
    return (
        <div>
        <div className={Style.about_info}>
            <h1 className={Style.about_h1}> Ripples !</h1>
        </div>
        <div className={Style.alluser}>
            <h3>A Blockchain based Chat Application!</h3>
                <p className={Style.about_us}>Ripples is a decentralized chat application built based on the Ethereum blockchain using Hardhat, a development environment for Ethereum smart contracts. The application allows users to communicate with each other in a secure and private manner, leveraging the transparency and immutability of blockchain technology. This is excellent for use in firms where privacy is of essential importance and needs a platform to communicate without the constant fear and worry of having their work or conversation being leaked or commercialized by entities like <strong>Meta</strong> (Facebook, WhatsApp, Instagram etc) and <strong>Google</strong>.
                </p>
                <br />
                <p className={Style.about_gitp}>Check Our <a href="https://github.com/zyanislam/chatapp" target="_blank"><strong className={Style.about_git}>GitHub Repository </strong></a> for latest updates</p>
        </div>
    </div>
    );
};

export default index;