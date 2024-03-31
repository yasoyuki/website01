"use client"

import React, { useState } from 'react';
import "../../globals.css";
import { CiMenuFries } from "react-icons/ci";
import Link from 'next/link';
import Hamburger from './Hamburger';
import Menu_Header from './Menu_Header';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const hamburgerStyle = {
        transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)", 
        opacity: isMenuOpen ? 1 : 0,
        visibility: isMenuOpen ? 'visible' : 'hidden',
        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
    };

    return (
        <section id='top-header'>
            <div className="hamburger" style={hamburgerStyle as React.CSSProperties}>
                <Hamburger setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
            </div>
            <div className="bg-navy h-20">
                <div className="flex items-center justify-between text-white text-3xl px-6 lg:px-12 h-20">
                    <h2 className='custom-line-height'>SHIBUYA<br />BUISINESS</h2>
                        <Menu_Header />
                    <Link href="/register">
                        <button className="text-lg bg-transparent hover:bg-blue-500 text-white hover:text-white py-2 px-4 border border-white hover:border-transparent rounded hidden lg:block">会員登録</button>
                    </Link>
                    <div className='ci-menu-fries-icon text-5xl lg:hidden cursor-pointer' onClick={toggleMenu}>
                        <CiMenuFries />
                    </div>
                </div>
            </div>
        </section>
    );
}