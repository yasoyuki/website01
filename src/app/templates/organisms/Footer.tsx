import React from 'react';
import "../../globals.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { ContactForm } from './ContactForm';

export const Footer = () => {
    return (
        <section>
            <hr style={{ borderWidth: "10px", borderColor: "#CA4883" }} />
            <div className=" bg-blue-950 h-auto">
                <div className="flex flex-col items-center justify-between text-white text-2xl px-3">
                    <ContactForm />
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

