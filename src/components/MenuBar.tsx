"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";

interface Props { }

const Menu: React.FC<Props> = (props) => {
  return (
    <>
      <div className="flex justify-between items-end h-20 m-2">
        {/* Added a hover option for the button to change color, please check if it works 
        added shadow property*/}
        <Link
          href="/prompts/prompt1"
          className="flex items-center justify-center w-full bg-button-bg-default p-2 m-4 rounded-tr-[50px] transform h-10 shadow-md hover:h-12 transition-transform hover:bg-button-hover"
        >
          Today
        </Link>
        <Link
          href="/previousPrompts"
          className="flex items-center justify-center w-full bg-button-bg-default p-2 m-4 rounded-tr-[50px] transform h-10 shadow-md hover:h-12 transition-transform hover:bg-button-hover"
        >
          Previous Prompts
        </Link>
        <Link
          href="/profile"
          className="flex items-center justify-center w-full bg-button-bg-default p-2 m-4 rounded-tr-[50px] transform h-10 shadow-md hover:h-12 transition-transform hover:bg-button-hover"
        >
          Profile
        </Link>
        <Link
          href="/settings"
          className="flex items-center justify-center w-full bg-button-bg-default p-2 m-4 rounded-tr-[50px] transform h-10 shadow-md hover:h-12 transition-transform hover:bg-button-hover"
        >
          Settings
        </Link>
      </div>
    </>
  );
};

export default Menu;
