import React from 'react';
import "../../globals.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Form } from './Form';

export const Footer = () => {
    return (
        <section>
            <hr style={{ borderWidth: "10px", borderColor: "#CA4883" }} />
            <div className=" bg-blue-950 h-auto">
                <div className="flex flex-col items-center justify-between text-white text-2xl px-3">
                    {/* <button className="bg-transparent hover:bg-blue-500 text-white hover:text-white mt-10 text-xl py-3 px-2 w-80 md:w-96 border border-white hover:border-transparent rounded-full" >ご予約はこちら</button> */}
                    <Form />
                    <div className='flex gap-3 mt-5 text-4xl'>
                    <a href="#top-header"><FaInstagram /></a>
                    <a href="#top-header"> <FaFacebookSquare /></a>
                    <a href="#top-header"><IoLogoYoutube /></a>
                    </div>
                    <h2 className='mt-10 custom-line-height'>SHIBUYA<br />BUSINESS</h2>
                    <p className='mt-8 mb-5 text-xs'>© 2024 SB Inc.</p>
                </div>
            </div>
        </section>
    );
};

