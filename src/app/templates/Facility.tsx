import "../globals.css";
import { FaCar } from "react-icons/fa";
import { FaSmoking } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { CgCopy } from "react-icons/cg";
import { FaShower } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

export default function Facility() {
    return (
        <section id="facility">
            <div className="flex items-center justify-center h-16 bg-lightblue text-2xl mt-20">
                <p>FACILITY</p>
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-3 w-2/3 md:w-1/2 mx-auto gap-8 mt-10 mb-20">
                <li className="bg-gray-300 flex flex-col justify-center items-center w-full rounded-md  text-navy py-3">
                    <div className="text-7xl">
                        <FaCar />
                    </div>
                    <p className="text-xl">駐車場</p>
                </li>
                <li className="bg-gray-300 flex flex-col justify-center items-center w-full  rounded-md  text-navy py-3">
                    <div className="text-7xl">
                        <FaSmoking />
                    </div>
                    <p className="text-xl mt-2">喫煙室</p>
                </li>
                <li className="bg-gray-300 flex flex-col justify-center items-center w-full  rounded-md  text-navy py-3">
                    <div className="text-7xl">
                        <FaWifi />
                    </div>
                    <p className="text-xl">Wi-Fi</p>
                </li>
                <li className="bg-gray-300 flex flex-col justify-center items-center w-full rounded-md  text-navy py-3">
                    <div className="text-7xl">
                        <CgCopy />
                    </div>
                    <p className="text-xl mt-2">コピー機</p>
                </li>
                <li className="bg-gray-300 flex flex-col justify-center items-center w-full  rounded-md  text-navy py-3">
                    <div className="text-7xl">
                        <FaShower />
                    </div>
                    <p className="text-xl mt-1">シャワー</p>
                </li>
                <li className="bg-gray-300 flex flex-col justify-center items-center w-full  rounded-md  text-navy py-3">
                    <div className="text-7xl">
                        <MdFastfood />
                    </div>
                    <p className="text-xl mt-2">軽食販売</p>
                </li>
            </ul>
            <div className="flex flex-col items-start w-2/3 md:w-1/2 mx-auto tracking-wide">
                <p>※駐車可能台数は限られております。ご入用の際はご予約がおすすめです。</p>
                <br />
                <p>※お食事は指定の指定のスペースでお願いいたします。</p>
            </div>
        </section>
    );
}
