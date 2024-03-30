"use client";

import React from 'react';
import "../../globals.css";
import { GrLinkTop } from "react-icons/gr";

export const GoToTOP = () => {
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // この行を追加
    });
  };

    return (
        <div
        onClick={scrollToTop} 
        className='bg-lightblue rounded-full w-20 h-20 flex justify-center items-center text-white text-4xl font-extrabold border-2 border-white'>
            <GrLinkTop />
        </div>
    );
};

