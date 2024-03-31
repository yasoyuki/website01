import "../globals.css";
import FadeInOnScroll from "./organisms/FadeInOnScroll";

export default function CatchCopy() {
    return (
        <FadeInOnScroll>
        <section className="w-2/3 lg:w-1/2 mx-auto mb-20 tracking-widest text-lg">
            <p>
            当社は、渋谷にある登録制コワーキングスペースです。個人のお客様から法人のお客様まで、多様な使い方のできる新しい時代のコワーキングスペースとなっております。<br />
            周辺の他ワークスペースよりも価格がリーズナブルなのも特徴のうちの一つです。
            </p>
        </section>
        </FadeInOnScroll>
    );
};
