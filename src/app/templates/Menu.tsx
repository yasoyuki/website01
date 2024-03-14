import "../globals.css";

export default function Menu() {
    return (
        <section className="lg:hidden">
            <ul className="flex w-full items-stretch text-center bg-blue-950 text-white justify-around leading-tight cursor-pointer">
                <li className="flex items-center justify-center flex-grow hover:bg-lightblue py-3"><a href="#news">NEWS</a></li>
                <li className="flex items-center justify-center flex-grow hover:bg-lightblue py-3"><a href="#concept">CONCEPT</a></li>
                <li className="flex items-center justify-center flex-grow hover:bg-lightblue py-3"><a href="#spacetype">SPACE<br />TYPE</a></li>
                <li className="flex items-center justify-center flex-grow hover:bg-lightblue py-3"><a href="#facility">FACILITY</a></li>
                <li className="flex items-center justify-center flex-grow hover:bg-lightblue py-3"><a href="#accessmap">ACCESS<br />MAP</a></li>
                <li className="flex items-center justify-center flex-grow hover:bg-lightblue py-3"><a href="#faq">FAQ</a></li>
            </ul>
        </section>
    );
}
