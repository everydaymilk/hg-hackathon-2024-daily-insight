"use client"

import Link from 'next/link';
import React, { useRef, useState } from 'react';

interface Props {
}


const Menu: React.FC<Props> = (props) => {
  return (
    <>
      <div className="flex justify-between items-end h-20 m-2">
        <Link href="/prompts/prompt1" className='flex items-center justify-center w-full bg-button-bg-default p-2 m-4 rounded-tr-[50px] transform h-10 hover:h-20 transition-transform'>Today</Link>
        <Link href="/previousPrompts" className='flex items-center justify-center w-full bg-button-bg-default p-2 m-4 rounded-tr-[50px] transform h-10 hover:h-20 transition-transform'>Previous Prompts</Link>
        <Link href="/" className='flex items-center justify-center w-full bg-button-bg-default p-2 m-4 rounded-tr-[50px] transform h-10 hover:h-20 transition-transform'>Page 3</Link>
        <Link href="/" className='flex items-center justify-center w-full bg-button-bg-default p-2 m-4 rounded-tr-[50px] transform h-10 hover:h-20 transition-transform'>Page 4</Link>
      </div>
    </>
  );
}

export default Menu;