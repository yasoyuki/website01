import "../globals.css";

export default function Menu_Header() {
    return (
        <section className="text-xl hidden lg:block">
            <ul className="flex w-full gap-8 items-stretch text-center bg-blue-950 text-white justify-around leading-tight cursor-pointer">
                <li className="flex items-center justify-center flex-grow py-3"><a href="#news">NEWS</a></li>
                <li className="flex items-center justify-center flex-grow py-3"><a href="#concept">CONCEPT</a></li>
                <li className="flex items-center justify-center flex-grow py-3"><a href="#spacetype">SPACE TYPE</a></li>
                <li className="flex items-center justify-center flex-grow py-3"><a href="#facility">FACILITY</a></li>
                <li className="flex items-center justify-center flex-grow py-3"><a href="#accessmap">ACCESS MAP</a></li>
                <li className="flex items-center justify-center flex-grow py-3"><a href="#faq">FAQ</a></li>
            </ul>
        </section>
    );
}
