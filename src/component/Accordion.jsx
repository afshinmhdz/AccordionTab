import { useState } from "react";

const data=[
    {
        id:1,
        title:"Accordion One",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, deserunt?"
    },
    {
        id:2,
        title:"Accordion Two",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, deserunt?"
    },
    {
        id:3,
        title:"Accordion Three",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, deserunt?"
    }
]
function Accordion() {
  return (
    <div className="accordion">
      {data.map((item)=>
        <AccordionItem key={item.id} item={item}/>
      )}
    </div>
  );
}

export default Accordion;

function AccordionItem({item}){  
    return(
        <div className="accordion-item" >
        <div className="accordion-item__header">{item.title}</div>
        <div className="accordion-item__content">{item.text}</div>
      </div>
    )
}
