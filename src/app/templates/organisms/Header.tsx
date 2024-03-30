import React from 'react';
import "../../globals.css";
import Menu_Header from '../Menu_Header';
import { CiMenuFries } from "react-icons/ci";


export const Header = () => {
    return (
        <section id='top-header'>
            <div className="bg-navy h-24">
                <div className="flex items-center justify-between text-white text-3xl px-8 h-24">
                    <h2 className='custom-line-height'>SHIBUYA<br />BUISINESS</h2>
                    <div>
                        <Menu_Header />
                    </div>
                    <div className='text-5xl md:hidden'>
                    <CiMenuFries />
                    </div>
                </div>
            </div>

        </section>
    )
}

