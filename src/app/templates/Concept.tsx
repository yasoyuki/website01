import "../globals.css";

export default function Concept() {
    return (
        <section id="concept">
            <div className="flex items-center justify-center h-16 bg-lightblue text-2xl">
                <p>CONCEPT</p>
            </div>
            <div className="relative">
                <img src="../../002.jpg" alt="コンセプトビュー" className="w-screen object-cover lg:h-96" />
                <div className="absolute bottom-10 left-40">
                    <p className="px-10 text-white text-lg">ここにテキストここにテキストここにテキストここにテキストここにテキストここにテキストここにテキストここにテキスト</p>
                </div>
            </div>
            <div className="lg:flex">
                <img src="../../003.jpg" alt="コンセプトビュー" className="object-cover mr-auto w-5/6 mt-8 h-64" />
                <img src="../../004.jpg" alt="コンセプトビュー" className="object-cover ml-auto w-5/6 mt-8 h-64" />
            </div>
        </section>
    );
}
