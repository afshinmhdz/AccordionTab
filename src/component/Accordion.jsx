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
  const [open, setOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          open={open}
          setOpen={setOpen}
        >
            {item.text}
        </AccordionItem>
        
      ))}
      <AccordionItem
          id="4"
          title={"Another Accordion"}
          open={open}
          setOpen={setOpen}
        >
            <ul>
                <li>
                    I
                </li>
                <li>
                    II
                </li>
                <li>
                    III
                </li>
            </ul>
        </AccordionItem>
    </div>
  );
}

export default Accordion;

function AccordionItem({ id,title, setOpen, open, children }) {
  const isOpen = id === open ? true : false;

  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div className="accordion-item__header" onClick={() => setOpen(id===open ? null : id)}>
        <div>{title}</div>
        <ChevronDownIcon
          className="accordion-item__chevron"
          //   style={{
          //     width: "1.2rem",
          //     transition: "all 0.2s ease-out",
          //     rotate: isOpen ? "180deg" : "0deg",
          //   }}
        />
      </div>
      <div className="accordion-item__content">{children}</div>
    </div>
  );
}
