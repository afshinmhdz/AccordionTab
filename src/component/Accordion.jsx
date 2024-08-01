import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const data = [
  {
    id: 1,
    title: "Accordion One",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, deserunt?",
  },
  {
    id: 2,
    title: "Accordion Two",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, deserunt?",
  },
  {
    id: 3,
    title: "Accordion Three",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, deserunt?",
  },
];
function Accordion() {
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>{item.title}</div>
        <ChevronDownIcon className="accordion-item__chevron"
        //   style={{
        //     width: "1.2rem",
        //     transition: "all 0.2s ease-out",
        //     rotate: isOpen ? "180deg" : "0deg",
        //   }}
        />
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
}
