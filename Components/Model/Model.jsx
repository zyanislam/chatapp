import React, { useContext, useState } from 'react';
import Image from "next/image";
import Style from "./Model.module.css";
import images from "../../assets";
import { ContextApp } from '../../Context/ChatAppContext';
import { Loader } from '../../Components/index';

const Model = ({openModel, title, head, info, images, functionName}) => {
  return (
    <div>Model</div>
  )
}

export default Model