import React from 'react';
import "../globals.css";
import RightSideFadeIn from './organisms/RightSideFadeIn';
import LeftSideFadeIn from './organisms/LeftSideFadeIn';

export default function Concept() {

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
            <div className="w-full flex flex-col lg:flex-row justify-center items-center py-8">
                <LeftSideFadeIn>
                    <div>
                        <img src="../../003.jpg" alt="コンセプトビュー" className="w-screen object-cover h-60 lg:h-84" />
                    </div>
                </LeftSideFadeIn>
                <RightSideFadeIn>
                    <div>
                        <img src="../../004.jpg" alt="コンセプトビュー" className="w-screen object-cover h-60 lg:h-84" />
                    </div>
                </RightSideFadeIn>
            </div>
        </section>
    );
}

