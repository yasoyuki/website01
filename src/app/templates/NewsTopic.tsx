import "../globals.css";


const newsItems = [
  { date: "2024.02.21", content: "3~4名様用スペースの料金を改定いたしました。詳しくはご予約ページを参照ください" },
  { date: "2024.01.30", content: "シブヤサンドイウィッチとのコラボメニューを販売" },
  { date: "2024.01.01", content: "お得な月額プランがスタートします！個人・法人どなたでもご利用いただけるお得なプランです" },
  { date: "2024.01.01", content: "規約改定のお知らせを会員様のメールアドレス宛に送付しました" }
];

export default function NewsTopic() {
  return (
    <section id="news">
      <div className="flex items-center justify-center h-16 bg-lightblue text-2xl">
        <p>NEWS</p>
      </div>
  <div>
    <dl className="flex flex-col md:flex-row px-12 pt-5 pb-9 mx-auto gap-10 text-sm md:w-5/6 md:text-base ">
      {newsItems.map((item, index) => (
        <div key={index} className="flex flex-col border-gray-200 mt-3">
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
