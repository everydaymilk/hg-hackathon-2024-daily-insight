"use client"

import Link from 'next/link';
import React, { useRef, useState } from 'react';

interface Props {
  buttonText: string;
  href: string;
  isSelected?: boolean;
}


const MenuButton: React.FC<Props> = (props) => {

  return (
    <>
      <Link href={props.href} className='flex items-center justify-center w-full bg-button-bg-default p-2 m-4 rounded-tr-[50px] transform h-10 hover:h-20 transition-transform'>{props.buttonText}</Link>
    </>
  );
}

export default MenuButton;