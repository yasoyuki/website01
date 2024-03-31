import React from 'react';
import "../../globals.css";
import Link from 'next/link';

export const ContactForm = () => {
    return (
        <section className='mt-20'>
            <p className='text-center mb-3'>お問い合わせフォーム</p>
            <form className='flex flex-col justify-center items-center gap-2 text-base w-screen text-navy'>
                <input className="w-2/3 md:w-1/3 lg:w-1/3 px-3 py-1" type="text" placeholder='ご氏名' />
                <input className="w-2/3 md:w-1/3 lg:w-1/3 px-3 py-1" type="text" placeholder='メールアドレス' />
                <textarea className="w-2/3 md:w-1/2 lg:w-1/3 px-3 py-1 h-40" placeholder='ご用件' />
                <button className="bg-transparent hover:bg-blue-500 text-white hover:text-white mt-3 text-xl py-3 px-2 w-72 md:w-96 border border-white hover:border-transparent">
                <Link href="/inquiry_complete"><div>送信</div></Link></button>
                    
            </form>
        </section>
    );
};

