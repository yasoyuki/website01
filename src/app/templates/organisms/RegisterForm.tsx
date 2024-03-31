import React from 'react';
import "../../globals.css";
import Link from 'next/link';

export const RegisterForm = () => {
    return (
        <section className='w-full'>
            <form className='flex flex-col justify-center text-base w-2/3 md:w-3/5 lg:w-2/5 mx-auto text-navy'>
                <div className='flex'>
                    <p className=''>お名前（漢字）</p><p className='text-xs'>※スペースは不要です</p>
                </div>
                <input className="px-3 py-2 mt-2 mb-8" type="text" placeholder='漢字' />
                <div className='flex'>
                    <p className=''>お名前（カナ）</p><p className='text-xs'>※スペースは不要です</p>
                </div>
                <input className="px-3 py-2 mt-2 mb-8" type="text" placeholder='カナ' />
                <p className=''>ご住所</p>
                <input className="px-3 py-2 mt-2 mb-8" type="text" placeholder='都道府県からお願いします' />
                <div className='flex'>
                    <p className=''>電話番号</p><p className='text-xs'>　※ハイフンは不要です</p>
                </div>
                <input className="px-3 py-2 mt-2 mb-8" type="text" placeholder='090XXXXXXXX' />
                <p className=''>メールアドレス</p>
                <input className="px-3 py-2 mt-2 mb-8" type="email" placeholder='メールアドレス' />
                <button className="bg-lightblue hover:bg-navy text-white hover:text-white mt-10 text-xl py-3 px-2 w-auto border border-white hover:border-transparent">
                    <Link href="/register_complete"><div>送信</div></Link></button>
            </form>
            <div className='w-screen text-center'>
            <Link href="/">
                <button className="bg-gray-500 hover:bg-navy text-white hover:text-white mt-20 text-base py-3 px-2 w-1/5 hover:border-transparent rounded-full">TOPに戻る</button></Link>
            </div>
        </section>
    );
};

