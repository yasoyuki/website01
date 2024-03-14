import "../globals.css";

export default function Facility() {
    return (
        <section id="facility">
            <div className="flex items-center justify-center h-16 bg-lightblue text-2xl">
                <p>FACILITY</p>
            </div>

            {/* 表 */}
            <div className="mx-auto p-10 lg:w-2/3">
                <div className="text-center border border-gray-300">
                    <div className="grid grid-cols-2 divide-x divide-y divide-gray-300">
                        <div className="py-2 px-4 bg-blue-950 text-white text-lg">駐車場</div>
                        <div className="py-2 px-4 bg-blue-950 text-white text-lg">喫煙所</div>
                        <div className="py-2 px-4 text-3xl">⚪︎</div>
                        <div className="py-2 px-4 text-4xl">⚪︎</div>

                        <div className="py-2 px-4 bg-blue-950 text-white text-lg">駐輪場</div>
                        <div className="py-2 px-4 bg-blue-950 text-white text-lg">ロッカー</div>
                        <div className="py-2 px-4 text-3xl">×</div>
                        <div className="py-2 px-4 text-4xl">⚪︎</div>
                        
                        <div className="py-2 px-4 bg-blue-950 text-white text-lg">複合機・シュレッダー</div>
                        <div className="py-2 px-4 bg-blue-950 text-white text-lg">Wi-fi・電源</div>
                        <div className="py-2 px-4 text-3xl">⚪︎</div>
                        <div className="py-2 px-4 text-4xl">⚪︎</div>

                        <div className="py-2 px-4 bg-blue-950 text-white text-lg">自動販売機</div>
                        <div className="py-2 px-4 bg-blue-950 text-white text-lg">オフィスコンビニ</div>
                        <div className="py-2 px-4 text-3xl">⚪︎</div>
                        <div className="py-2 px-4 text-4xl">×</div>
                    
                    </div>
                </div>
            </div>
        </section>
    );
}
