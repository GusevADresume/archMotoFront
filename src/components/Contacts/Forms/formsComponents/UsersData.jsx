import React from "react";
import { useState, useRef, useEffect } from "react";

import CountryList from "./CountryList";

export default function UserData({
  changeFirstName,
  changeLastName,
  changeEmail,
  changeNameTip,
  changeEmailTip,
}) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const nameTip = useRef(null);
  const mailTip = useRef(null);
  const mailTip2 = useRef(null);

  const mailValidation = () => {
    mailTip.current.style.display = "none";
    let regexp = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/g;
    String(email).match(regexp) == null
      ? (mailTip2.current.style.display = "block")
      : ((mailTip2.current.style.display = "none"), changeEmail(email));
  };

  const valueCheckHandler = (e) => {
    switch (e.target.parentElement.className) {
      case "UserDataInitialsFristName":
        e.target.value.length == 0
          ? (nameTip.current.style.display = "block")
          : ((nameTip.current.style.display = "none"),
            changeFirstName(e.target.value));

        break;
      case "UserDataInitialsLastName":
        e.target.value.length == 0
          ? (nameTip.current.style.display = "block")
          : ((nameTip.current.style.display = "none"),
            changeLastName(e.target.value));
        break;
      case "UserDataEmail":
        e.target.value.length == 0
          ? (mailTip.current.style.display = "block")
          : mailValidation();
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (changeNameTip) {
      nameTip.current.style.display = "block";
    }
    if(changeEmailTip){
      mailTip.current.style.display = "block"
    }
  }, [changeNameTip, changeEmailTip]);

  return (
    <div className="UserData">
      <div className="UserDataInitials">
        <div className="UserDataInitialsFristName">
          <div className="fname">
            Your name: <h className="RedStar">*</h>{" "}
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => valueCheckHandler(e)}
          />
          First Name
        </div>
        <div className="UserDataInitialsLastName">
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={(e) => valueCheckHandler(e)}
          />
          Last Name
        </div>
      </div>
      <div ref={nameTip} className="tip">
        Enter a value for this field.
      </div>
      <CountryList visible={true} />
      <div>
        <div className="UserDataEmail">
          <div className="fname">
            Email address: <h className="RedStar">*</h>{" "}
          </div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => valueCheckHandler(e)}
          />
        </div>
        <div ref={mailTip} className="tip">
          Enter a value for this field.
        </div>
        <div ref={mailTip2} className="tip">
          Enter a valid email address. (eg: yourname@domain.com)
        </div>
      </div>
    </div>
  );
}
