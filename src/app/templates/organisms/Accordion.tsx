"use client";

import { useState } from "react";

interface Question {
    title: string;
    text: string;
}

interface AccordionProps {
    questions: Question[];
}

const Accordion = ({ questions }: AccordionProps) => {
    return (
        <div className="px-3">
            {questions.map((question, index) => (
                <AccordionItem key={index} title={question.title} text={question.text} />
            ))}
        </div>
    )
};

const AccordionItem = ({ title, text }: Question) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    }

    return (
            <div className="border border-gray-500 p-3 mt-3 rounded-lg">
                <div className="flex justify-between">
                    <p>{title}</p><button onClick={toggleAccordion}
                    className="animation-rotate">▼</button>
                </div>
                {isOpen && (
                    <div>
                        <hr />
                        <div className="pt-5">
                            {text}
                        </div>
                    </div>
                )}
            </div>
    )

};

export default Accordion;