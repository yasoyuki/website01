import "../globals.css";

export default function Access() {
    return (
        <section id="accessmap">
            <div className="flex items-center justify-center h-16 bg-lightblue text-2xl">
                <p>ACCESS MAP</p>
            </div>
            <img src="../../map.jpg" alt="マップ" className="w-3/4 mx-auto md:w-1/2" />
            <div className="grid grid-cols-10 gap-4 text-lg justify-items-center py-9 md:flex md:justify-center md:gap-20 md:text-xl">
                <div className="col-span-4">
                    <p>定休日<br />土日祝日・年末年始</p>
                    <br />
                    <p>営業時間<br />8:00〜23:00</p>
                </div>
                <div className="col-span-6">
                    <p>180-0022<br />東京都渋谷区渋谷町9-99-9<br />渋谷ストラクチャービル9F</p>
                    <br />
                    <p>TEL:XX-XXXX-XXXX<br />e-mail:XXXXX@ggg.com</p>
                </div>
            </div>
        </section>
    );
}
