import React from "react";
import uuid from 'react-uuid';
import { useRef } from "react";

export default function ContactsButtonsBlock({callback}) {
  const ref = useRef(null);
  const buttonsContent = [
    "I am interested in purchasing an ARCH Motorcycle and would like more information.",
    "I am a fan of ARCH Motorcycle and would like to receive newsletters or company updates.",
    "I have an established business and am interested in adding ARCH distribution to my portfolio.",
    "I represent a product or service that may benefit ARCH Motorcycle or ARCH Motorcycle Apparel.",
  ];

  const deactivateButtonsHandler = () => {
    for (let i = 0; i < ref.current.children.length; i++) {
      ref.current.children[i].className = "ContactsButtonsBlockButton";
    }
  };

  const activeButtonHandler = (e) => {
    deactivateButtonsHandler();
    e.target.className = `${e.target.className} ContactsButtonsActive`;
    callback(e.target.id)
  };

  return (
    <div ref={ref} className="ContactsButtonsBlock">
      {buttonsContent.map((element, index) => {
        return (
          <div
            onClick={activeButtonHandler}
            key={uuid()}
            id={index}
            className={
              index == 0
                ? `ContactsButtonsBlockButton ContactsButtonsActive`
                : `ContactsButtonsBlockButton`
            }
          >
            {element}
          </div>
        );
      })}
    </div>
  );
}
