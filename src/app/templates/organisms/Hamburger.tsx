import Link from "next/link";
import "../../globals.css";
import { IoIosCloseCircle } from "react-icons/io";

export default function Hamburger({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (isOpen: boolean) => void }) {
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    
    const menuClass = isMenuOpen ? "hamburger open" : "hamburger";

    return (
        <section className={menuClass}>
            <div className="bg-lightblue h-auto">
                <div className="flex items-center justify-between text-white text-3xl px-6 lg:px-12 h-24">
                <a href="/"><h2 className='custom-line-height'>SHIBUYA<br />BUISINESS</h2></a>
                    <div>
                    </div>
                    <div className='text-5xl'>
                        <IoIosCloseCircle onClick={closeMenu}/>
                    </div>
                </div>
                <ul className="flex flex-col w-full items-stretch text-white leading-tight cursor-pointer pt-4 pb-10 text-lg md:text-xl">
                <li className="flex items-center justify-center flex-grow py-4 hover:bg-white hover:text-lightblue" onClick={closeMenu}><a href="#news">NEWS</a></li>
                <li className="flex items-center justify-center flex-grow py-4 hover:bg-white hover:text-lightblue" onClick={closeMenu}><a href="#spacetype">SPACE TYPE</a></li>
                <li className="flex items-center justify-center flex-grow py-4 hover:bg-white hover:text-lightblue" onClick={closeMenu}><a href="#facility">FACILITY</a></li>
                <li className="flex items-center justify-center flex-grow py-4 hover:bg-white hover:text-lightblue" onClick={closeMenu}><a href="#accessmap">ACCESS MAP</a></li>
                <li className="flex items-center justify-center flex-grow py-4 hover:bg-white hover:text-lightblue" onClick={closeMenu}><a href="#faq">FAQ</a></li>
            </ul>
            <Link href="/register" className="flex justify-center">
                <button className="bg-white hover:bg-navy text-navy hover:text-white text-base py-2 px-10 hover:border-transparent rounded-full mb-10 w-auto">会員登録へ</button></Link>
            </div>
        </section>
    );
}
