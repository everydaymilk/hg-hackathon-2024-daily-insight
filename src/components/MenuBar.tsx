"use client"

import Link from 'next/link';
import MenuButton from './MenuButton';
import React, { useRef, useState } from 'react';

interface Props {
}


const Menu: React.FC<Props> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div className="flex justify-between items-end h-20 m-2">
        <Link href="/prompt1" className='flex items-center justify-center w-full bg-button-bg-default p-2 m-4 rounded-tr-[50px] transform h-10 hover:h-20 transition-transform'>Page 1</Link>
        <Link href="/prompt2" className='flex items-center justify-center w-full bg-button-bg-default p-2 m-4 rounded-tr-[50px] transform h-10 hover:h-20 transition-transform'>Page 2</Link>
        <Link href="/prompt3" className='flex items-center justify-center w-full bg-button-bg-default p-2 m-4 rounded-tr-[50px] transform h-10 hover:h-20 transition-transform'>Page 3</Link>
        <Link href="/prompt4" className='flex items-center justify-center w-full bg-button-bg-default p-2 m-4 rounded-tr-[50px] transform h-10 hover:h-20 transition-transform'>Page 4</Link>
      </div>
    </>
  );
}

export default Menu;