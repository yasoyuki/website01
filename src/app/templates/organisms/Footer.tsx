import React from 'react';
import "../../globals.css";

export const Footer = () => {
    return (
        <section>
            <hr style={{ borderWidth: "10px", borderColor: "#FFD31D" }} />
            <div className=" bg-blue-950 h-auto">
                <div className="flex flex-col items-center justify-between text-white text-2xl px-3">
                    <button className="bg-transparent hover:bg-blue-500 text-white hover:text-white mt-10 text-xl py-3 px-2 w-80 md:w-96 border border-white hover:border-transparent rounded-full" >ご予約はこちら</button>
                    <button className="bg-transparent hover:bg-blue-500 text-white hover:text-white mt-4 text-lg md:text-xl py-3 px-2 w-80 md:w-96 border border-white hover:border-transparent rounded-full" >免責事項・プライバシーポリシー</button>
                    <button className="bg-transparent hover:bg-blue-500 text-white hover:text-white mt-4 text-xl py-3 px-2 w-80 md:w-96 border border-white hover:border-transparent rounded-full" >採用情報</button>
                    <p className='mt-10 mb-20'>SHIBUYA<br />BUSINESS</p>
                </div>
            </div>
        </section>
    );
};

