import Link from "next/link";
import "../globals.css";
import { RiMailDownloadLine } from "react-icons/ri";

export default function RegitserComplete() {
  return (
    <section
      id="news"
      className="bg-gray-200 h-screen "
      style={{ paddingBottom: '100px' }}
    >
      <div className="flex items-center justify-center h-16 bg-lightblue text-2xl">
        <p>会員登録</p>
      </div>
      <div className="flex flex-col justify-center items-center m-20 text-base md:text-lg">
        <p>お客様のメールアドレス宛に登録に関するメールをお送りしました。</p>
        <p>記載のURLから登録を完了させていただきますようお願いいたします。</p>
        <div className="text-8xl text-white mt-10">
          <RiMailDownloadLine />
        </div>
        
      </div>
      <div className='w-screen text-center'>
            <Link href="/">
                <button className="bg-gray-500 hover:bg-navy text-white hover:text-white mt-20 text-base py-3 px-2 w-1/5 hover:border-transparent rounded-full">TOPに戻る</button></Link>
            </div>
    </section>
  );
}
