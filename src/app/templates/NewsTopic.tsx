import "../globals.css";


const newsItems = [
  { date: "2024.02.21", content: "最新のニュース最新のニュース最新のニュース最新のニュース" },
  { date: "2024.01.30", content: "2番目のニュース2番目のニュース2番目のニュース2番目のニュース" },
  { date: "2024.01.01", content: "3番目のニュース3番目のニュース3番目のニュース" },
];

export default function NewsTopic() {
  return (
    <section id="news">
      <div className="flex items-center justify-center h-16 bg-lightblue text-2xl">
        <p>NEWS</p>
      </div>
  <div>
    <dl className="flex flex-col items-start w-10/12 pt-5 pb-9 mx-auto text-sm md:w-2/3 md:text-lg lg:w-3/5">
      {newsItems.map((item, index) => (
        <div key={index} className="flex items-start border-b border-gray-200 last:border-b-0 mt-3">
          <div className="flex items-center mr-4">
            {index === 0 ? <p className="text-red-600">new!</p> : <p className="opacity-0">new!</p>}
          </div>
          <dt className="mr-2">{item.date}</dt>
          <hr />
          <dd>{item.content}</dd>
        </div>
      ))}
    </dl>
  </div>
</section>
  );
}
