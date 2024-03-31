import "../globals.css";

export default function Access() {
    return (
        <section id="accessmap">
            <div className="flex items-center justify-center h-16 bg-lightblue text-2xl  mt-20">
                <p>ACCESS MAP</p>
            </div>
            <div className="lg:flex md:gap-8 lg:mx-auto">
                    <iframe
                        className="h-96 w-screen mx-auto lg:h-auto lg:w-2/3 lg:mt-6"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.770164464073!2d139.69905551033756!3d35.65803387248041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b563b00109f%3A0x337328def1e2ab26!2z5riL6LC36aeF!5e0!3m2!1sja!2sjp!4v1711761938073!5m2!1sja!2sjp"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                <div className="flex justify-center w-4/5 gap-8 text-sm md:text-base mx-auto py-9 bg-gray-200 rounded-md border-2 border-lightblue mt-6 lg:w-1/3 lg:flex-col lg:text-lg lg:mr-6">
                    <div className="lg:w-2/3 md:mx-auto pl-2 lg:pl-0">
                        <p>定休日<br />土日祝日・年末年始</p>
                        <br />
                        <p>営業時間<br />8:00〜23:00</p>
                    </div>
                    <div className="lg:w-2/3 md:mx-auto pr-2 lg:pr-0">
                        <p>180-0022<br />東京都渋谷区渋谷町9-99-9<br />渋谷ストラクチャービル9F</p>
                        <br />
                        <p>TEL:XX-XXXX-XXXX<br />e-mail:XXXXX@ggg.com</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
