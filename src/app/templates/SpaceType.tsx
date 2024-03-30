import "../globals.css";

export default function SpaceType() {
    return (
        <section id="spacetype">
            <div className="flex items-center justify-center h-16 bg-lightblue text-2xl">
                <p>SPACE TYPE</p>
            </div>

            <div className="mb-16">
                <div className="relative">
                    <img className="w-full h-72 object-cover lg:h-96" src="../../single.jpg" alt="タイプ１" />
                    <div className="absolute bottom-5  right-0 flex items-center justify-center bg-blue-950 opacity-85 h-20 w-52 lg:h-36 lg:w-72 lg:tracking-widest">
                        <p className="px-12 text-white text-base lg:text-2xl">1名様用/1h<br />
                            ¥990~</p>
                    </div>
                </div>
                <div>
                    <p className="text-xl text-center pt-5 pb-3">＼こんなお客様におすすめ！／</p>
                </div>
                <div className="flex justify-around md:justify-center md:gap-16">
                    <div className="bg-round-shadow  bg-blue-950 h-32 w-32 lg:h-48 lg:w-48  rounded-full flex items-center justify-center size-up">
                        <p className="text-white p-3 text-xs lg:text-base">集中力を最大限に高めてタスクをこなしたい方</p>
                    </div>
                    <div className="bg-round-shadow  bg-blue-950 h-32 w-32 lg:h-48 lg:w-48  rounded-full flex items-center justify-center  size-up">
                        <p className="text-white p-4 text-xs lg:text-base">出先で作業がしたい個人事業主・フリーランスの方</p>
                    </div>
                    <div className="bg-round-shadow bg-blue-950 h-32 w-32 lg:h-48 lg:w-48 rounded-full flex items-center justify-center  size-up">
                        <p className="text-white p-4 text-xs lg:text-base">プライベートな空間でオンライン通話や電話がしたい方</p>
                    </div>
                </div>
            </div>
            <div className="mb-16">
                <div className="relative">
                    <img className="w-full h-72 object-cover lg:h-96" src="../../afew.jpg" alt="タイプ１" />
                    <div className="absolute bottom-5  right-0 flex items-center justify-center bg-blue-950 opacity-85 h-20 w-52 lg:h-36 lg:w-72 lg:tracking-widest ">
                        <p className="px-12 text-white text-base lg:text-2xl">3~4名様用/1h<br />
                            ¥2990~</p>
                    </div>
                </div>
                <div>
                    <p className="text-xl text-center pt-5 pb-3">＼こんなお客様におすすめ！／</p>
                </div>
                <div className="flex justify-around md:justify-center md:gap-16">
                    <div className="bg-round-shadow  bg-blue-950 h-32 w-32 lg:h-48 lg:w-48 rounded-full flex items-center justify-center size-up">
                        <p className="text-white p-4 text-xs lg:text-base">コンパクトなオフィスを探しているスタートアップの方</p>
                    </div>
                    <div className="bg-round-shadow  bg-blue-950 h-32 w-32 lg:h-48 lg:w-48  rounded-full flex items-center justify-center  size-up">
                        <p className="text-white p-4 text-xs lg:text-base">アイディアを共有したいクリエイターの方々</p>
                    </div>
                    <div className="bg-round-shadow  bg-blue-950 h-32 w-32 lg:h-48 lg:w-48  rounded-full flex items-center justify-center  size-up">
                        <p className="text-white p-4 text-xs lg:text-base">チームワークを育みたいと考えている会社の小規模チーム</p>
                    </div>
                </div>
            </div>
            <div className="mb-16">
                <div className="relative">
                    <img className="w-full h-72 object-cover lg:h-96" src="../../manypeople.jpg" alt="タイプ１" />
                    <div className="absolute bottom-5  right-0 flex items-center justify-center bg-blue-950 opacity-85 h-20 w-52 lg:h-36 lg:w-72 lg:tracking-widest">
                        <p className="px-12 text-white text-base lg:text-2xl">5~10名様用/1h<br />
                            ¥5800~</p>
                    </div>
                </div>
                <div>
                    <p className="text-xl text-center pt-5 pb-3">＼こんなお客様におすすめ！／</p>
                </div>
                <div className="flex justify-around md:justify-center md:gap-16">
                    <div className="bg-round-shadow bg-blue-950 h-32 w-32 lg:h-48 lg:w-48  rounded-full flex items-center justify-center size-up">
                        <p className="text-white p-3 text-xs lg:text-base">大規模プロジェクトの打ち合わせをしたい方</p>
                    </div>
                    <div className="bg-round-shadow bg-blue-950 h-32 w-32 lg:h-48 lg:w-48 rounded-full flex items-center justify-center size-up">
                        <p className="text-white p-4 text-xs lg:text-base">プロジェクターや音響等、柔軟に駆使したいイベンターの方</p>
                    </div>
                    <div className="bg-round-shadow bg-blue-950 h-32 w-32 lg:h-48 lg:w-48 rounded-full flex items-center justify-center  size-up">
                        <p className="text-white p-4 text-xs lg:text-base">複数チームでの意見交換の場をお探しの方</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-lightblue hover:bg-blue-500 text-white mb-10 text-xl py-3 w-72 h-12 lg:w-80 lg:h-20 lg:text-2xl border-white hover:border-transparent rounded-xl mx-auto" >ご予約はこちら</button>
            </div>

        </section>
    );
}
