import React from 'react';
import "../../globals.css";
import Menu_Header from '../Menu_Header';


export const Header = () => {
    return (
        <section>
            <div className=" bg-blue-950 h-24">
                <div className="flex items-center justify-between text-white text-3xl px-5 pt-2 h-24">
                    <h2>SHIBUYA<br />BUISINESS</h2>
                    <div>
                        <Menu_Header />
                    </div>
                    <div className='flex'>
                        <img src="../../x-logo.png" alt="x" className='w-7 h-7' />
                        <img src="../../insta-logo.png" alt="x" className='w-8 h-8 ml-3' />
                    </div>
                </div>
            </div>

        </section>
    )
}

