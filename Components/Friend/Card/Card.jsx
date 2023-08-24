import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Style from './Card.module.css';
import images from '../../../assets';

const Card = ({ readMessage, el, i, readUser}) => {
  return (
    <Link
      href={{ pathname: '/', query: `${el.name}` }}
    />
  )
}

export default Card