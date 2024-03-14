import "../globals.css";
import Accordion from "./organisms/Accordion";
import questionData from '../json/question.json';

export default function Faq() {
    return (
        <section id="faq">
            <div className="flex items-center justify-center h-16 bg-lightblue text-2xl">
                <p>FAQ</p>
            </div>
            <div className="w-4/5 mx-auto">
                <Accordion questions={Array.isArray(questionData) ? questionData : []} />
            </div>
        </section>
    );
};
