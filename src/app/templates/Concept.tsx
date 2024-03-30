"use client"

import React, { useEffect, useRef } from 'react';
import "../globals.css";

export default function Concept() {
    const leftImageRef = useRef<HTMLImageElement | null>(null);
    const rightImageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!leftImageRef.current || !rightImageRef.current) return;
            
            const leftImagePos = leftImageRef.current.getBoundingClientRect().top;
            const rightImagePos = rightImageRef.current.getBoundingClientRect().top;
            const screenPos = window.innerHeight;

            if (leftImagePos < screenPos) {
                leftImageRef.current.classList.add('animate-slide-in-left');
            }

            if (rightImagePos < screenPos) {
                rightImageRef.current.classList.add('animate-slide-in-right');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="concept">
            <div className="flex items-center justify-center h-16 bg-lightblue text-2xl mt-16">
                <p>CONCEPT</p>
            </div>
            <div className="relative">
                <img src="../../002.jpg" alt="コンセプトビュー" className="w-screen object-cover h-96" />
                <div className="absolute flex w-11/12 md:w-2/3 bg-semi-transparent-black py-5 bottom-8 right-0 lg:w-1/2">
                    <p className="px-10 text-white lg:text-xl custom-line-height">創造と交流が交差する空間…あなたのアイデアと未来を形作るコワーキングスペース。<br>
                    </br>ここでは、多様なバックグラウンドを持つ人々が集い、互いに刺激を受けながら、新たなプロジェクトやビジネスを生み出すための理想的な環境を提供します。</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center py-8">
                <div ref={leftImageRef} className="hidden-slide-left md:w-1/2">
                    <img src="../../003.jpg" alt="コンセプトビュー" className="w-screen object-cover h-60 lg:h-84" />
                </div>
                <div ref={rightImageRef} className="hidden-slide-right md:w-1/2">
                    <img src="../../004.jpg" alt="コンセプトビュー" className="w-screen object-cover h-60 lg:h-84" />
                </div>
            </div>
        </section>
    );
}

