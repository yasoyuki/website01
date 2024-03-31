import "../globals.css";


const newsItems = [
  { date: "2024.02.21", content: "3~4名様用スペースの料金を改定いたしました。詳しくはご予約ページを参照ください", image: "../../news001.jpg" },
  { date: "2024.01.30", content: "シブヤサンドイウィッチとのコラボメニューを販売", image: "../../news002.jpg" },
  { date: "2024.01.01", content: "雑誌「maison」で弊社が紹介されました！", image: "../../news003.jpg" },
  { date: "2023.12.23", content: "規約改定のお知らせを会員様のメールアドレス宛に送付しました" , image: "../../news004.jpg"}
];

export default function NewsTopic() {
  return (
    <section id="news">
      <div className="flex items-center justify-center h-16 bg-lightblue text-2xl">
        <p>NEWS</p>
      </div>
  <div>
    <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:flex-row px-12 pt-8 pb-9 mx-auto gap-5 text-base md:w-5/6 md:text-base ">
      {newsItems.map((item, index) => (
        <div key={index} className="flex flex-col border-gray-200 mt-3">
          <img src={item.image} alt="News" className="h-60 object-cover" /> 
          <dt>{item.date}</dt>
          <hr />
          <dd>{item.content}</dd>
        </div>
      ))}
    </dl>
  </div>
</section>
  );
}
