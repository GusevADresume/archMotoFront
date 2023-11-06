import React from "react";
import { useState } from "react";
import ContactsHeaderBlock from "../components/Contacts/ContactsHeaderBlock";
import Img from "../assets/images/ownership/ARCH SOCIAL/img_own_34-copy.jpg";
import ContactsButtonsBlock from "../components/Contacts/ContactsButtonsBlock";
import Intersted from "../components/Contacts/Forms/Intersted";
import Fan from "../components/Contacts/Forms/Fan";
import Established from "../components/Contacts/Forms/Established";
import Represent from "../components/Contacts/Forms/Represent";

export default function Contact() {
  const [form, setForm] = useState(0);
  const formChoiseHandler = (e) => {
    console.log("id", e);
    setForm(e);
  };

  const formsList =[
    <Intersted/>,
    <Fan/>,
    <Established/>,
    <Represent />
  ]


  return (
    <div className="Contact">
      <img className="ContactHeaderImg" src={Img} />
      <ContactsHeaderBlock />
      <div className="ContactActiveBlock">
        <ContactsButtonsBlock callback={formChoiseHandler} />
        {formsList[form]}
      </div>
    </div>
  );
}
