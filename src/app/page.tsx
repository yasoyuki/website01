import Footer from "./templates/organisms/Footer";
import Header from "./templates/organisms/Header";


const Home = () => {
  return (
    <div>
      <Header />
      <div className="w-2/3 mx-auto">
        <section className="text-2xl flex flex-col items-center px-3 py-5 h-auto w-80 mx-auto mt-20">
          <p className="border-b-4 border-red-500 pb-2 mb-5">ABOUT</p>
          <img
            className=""
            src="../icon.jpg" alt="自分の写真" />
          <span className="text-base">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</span>
        </section>

        <section className="text-2xl  px-3 py-5 h-auto w-80 mx-auto mt-20">
          <div className="flex flex-col items-center mb-8">
            <p className="border-b-4 border-red-500 pb-2 mb-5">WEB SITE</p>
            <img
              className=""
              src="../icon.jpg" alt="Webサイトサムネ" />
            <div className="mt-3">
              <p className="text-xl text-left">タイトル01</p>
              <span className="text-base">テキストテキストテキストテキストテキストテキストテキストテキスト</span>
            </div>
          </div>
          <div className="flex flex-col items-center mb-8">
            <img
              className=""
              src="../icon.jpg" alt="Webサイトサムネ" />
            <div className="mt-3">
              <p className="text-xl text-left">タイトル02</p>
              <span className="text-base">テキストテキストテキストテキストテキストテキストテキストテキスト</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className=""
              src="../icon.jpg" alt="Webサイトサムネ" />
            <div className="mt-3">
              <p className="text-xl text-left">タイトル03</p>
              <span className="text-base">テキストテキストテキストテキストテキストテキストテキストテキスト</span>
            </div>
          </div>
        </section>

        <section className="text-2xl  px-3 py-5 h-auto w-96 md:w-11/12 mx-auto mt-20">
          <div className="flex flex-col items-center mb-8">
            <p className="border-b-4 border-red-500 pb-2 mb-5">BANNER</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img src="../banner.jpg" alt="" />
              <img src="../banner.jpg" alt="" />
              <img src="../banner.jpg" alt="" />
              <img src="../banner.jpg" alt="" />
            </div>
          </div>
        </section>

        <section className="text-2xl  px-3 py-5 h-auto w-96 md:w-10/12 mx-auto mt-20">
          <div className="flex flex-col items-center mb-8">
            <p className="border-b-4 border-red-500 pb-2 mb-5">SKILL SET</p>
            <div className="">
              <p>HTML,CSS</p>
              <p>React(Next.js)</p>
              <p>Tailwind CSS</p>
              <p>Photoshop,Illustrator</p>
              <p>Github</p>
              <p>Figma</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
