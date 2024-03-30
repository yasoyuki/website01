import React from 'react';
import "../globals.css";
import FadeInOnScroll from './organisms/FadeInOnScroll';

export default function SpaceType() {
    const images = [
        { src: "../../spacetype001.jpg", hoverEffect: "hover-effect-1", description: "1名様用のフリースペース" },
        { src: "../../spacetype002.jpg", hoverEffect: "hover-effect-2", description: "2~4名様用の小会議室" },
        { src: "../../spacetype003.jpg", hoverEffect: "hover-effect-3", description: "5名様以上用の大会議室" }
        // 他の画像データも同様に追加
    ];

    return (
        <section id="spacetype">
            <div className="flex items-center justify-center h-16 bg-lightblue text-2xl mt-20">
                <p>SPACE TYPE</p>
            </div>
            <div>
                {images.map((image, index) => (
                    <div className={`image-container ${image.hoverEffect}`} key={index}>
                        <img src={image.src} alt={`image-container ${index}`} />
                        <div className="overlay text-2xl">
                            {image.description}
                        </div>
                    </div>
                ))}
            </div>
            <h3 className='text-center mt-8 pb-2 border-b-2 border-lightblue text-base md:text-lg'>各種プラン</h3>
            <FadeInOnScroll>
                <div className="grid grid-cols-4 grid-rows-6 w-11/12 md:w-7/8 lg:w-4/5 mx-auto mt-4 text-sm md:text-base fadeInUp">
                    <div className="p-1 md:p-3 border flex justify-center items-center"></div>
                    <div className="p-1 md:p-3 border flex justify-center items-center">フリースペース</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center">小会議室</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center">大会議室</div>

                    <div className="p-1 md:p-3 border flex justify-center items-center">人数</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center">1名様</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center">2~4名様</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center">5名様以上</div>

                    <div className="p-1 md:p-3 border flex justify-center items-center">1人あたりの料金(/時間)</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center text-lg md:text-2xl font-extrabold">¥990</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center text-lg md:text-2xl font-extrabold">¥1,200</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center text-lg md:text-2xl font-extrabold">¥1,500</div>

                    <div className="p-1 md:p-3 border flex justify-center items-center">予約</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center">不要</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center">要</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center">要</div>

                    <div className="p-1 md:p-3 border flex justify-center items-center">同伴者可能</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center text-lg md:text-2xl font-extrabold">⚪︎</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center text-lg md:text-2xl font-extrabold">×</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center text-lg md:text-2xl font-extrabold">×</div>

                    <div className="p-1 md:p-3 border flex justify-center items-center">決済方法</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center">現金<br />クレジットカード</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center">クレジットカード</div>
                    <div className="p-1 md:p-3 border flex justify-center items-center">クレジットカード</div>
                </div>
            </FadeInOnScroll>
        </section>
    );
}