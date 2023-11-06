import React, { useRef } from "react";
import { useState } from "react";
import UserData from "./formsComponents/UsersData";
import CompanyIn from "./formsComponents/CompanyIn";
import Marketing from "./formsComponents/Marketing";
import Communications from "./formsComponents/Communications";
import Privacy from "./formsComponents/Privacy";
import postFormsData from "../../../store/postForms";

export default function Represent() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [bName, setbName] = useState("");
  const [addres, setAddress] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postal, setPostal] = useState("");
  const [propos, setPropos] = useState("");
  const [commState, setComm] = useState("");
  const [privaci, setPrivaci] = useState("");

  const [nameTip, setNameTip] = useState(false);
  const [emailTip, setEmailTip] = useState(false);
  const [cFirstTip, setCFirstTip] = useState(false);
  const [cSecondTip, setCSecondTip] = useState(false);
  const [privaciTip, setPrivaciTip] = useState(false);

  const proposTip = useRef("");

  const sendForm = () => {
    const formData = {
      formName:"represent",
      name:name,
      lastName:lastName,
      email:email,
      bName:bName,
      addres:addres,
      line2:line2,
      city:city,
      region:region,
      postal:postal,
      propos:propos,
      commState:commState,
      privaci:privaci,
    }
    postFormsData(formData)
  };

  const chekedForm = () => {
    let checked = true;
    if (name == "" || lastName == "") {
      setNameTip(true);
      checked = false;
    }
    if (email == "") {
      setEmailTip(true);
      checked = false;
    }
    if (privaci == "") {
      setPrivaciTip(true);
      checked = false;
    }
    if (bName == "") {
      setCFirstTip(true);
      checked = false;
    }
    if (addres == "") {
      setCSecondTip(true);
      checked = false;
    }
    if (line2 == "") {
      setCSecondTip(true);
      checked = false;
    }
    if (city == "") {
      setCSecondTip(true);
      checked = false;
    }
    if (region == "") {
      setCSecondTip(true);
      checked = false;
    }
    if (postal == "") {
      setCSecondTip(true);
      checked = false;
    }
    if (checked) {
      sendForm();
    }
  };

  return (
    <div className="form">
      <UserData
        changeFirstName={(e) => {
          setName(e);
        }}
        changeLastName={(e) => {
          setLastName(e);
        }}
        changeEmail={(e) => {
          setEmail(e);
        }}
        changeEmailTip={emailTip}
        changeNameTip={nameTip}
      />
      <div className="formLine"></div>
      <CompanyIn
        changeBname={(e) => {
          setbName(e);
        }}
        changeAddres={(e) => {
          setAddress(e);
        }}
        changeLine2={(e) => {
          setLine2(e);
        }}
        changeRegion={(e) => {
          setRegion(e);
        }}
        changePostal={(e) => {
          setPostal(e);
        }}
        changeCity={(e) => {
          setCity(e);
        }}
        changecFirstTip={cFirstTip}
        changecSecondTip={cSecondTip}
      />
      <div className="formLine"></div>
      <p></p>
      <div className="ProductsText">
        <div className="fname">
          What products or services are you proposing to ARCH Motorcycle?{" "}
          <h className="RedStar">*</h>
        </div>
        <textarea
          value={propos}
          onChange={(e) => {
            setPropos(e.target.value);
          }}
          onBlur={(e) => {
            e.target.value.length > 2
              ? (proposTip.current.style.display = "none")
              : (proposTip.current.style.display = "block");
          }}
        ></textarea>
      </div>
      <div ref={proposTip} className="tip1">
        Enter a value for this field.
      </div>
      <Marketing />
      <Communications
        setCommState={(e) => {
          setComm(e);
        }}
      />
      <Privacy
        changeAccept={() => {
          setPrivaci(true);
        }}
        chageTip={privaciTip}
      />
      <div onClick={chekedForm} className="SubmitButton">
        Submit
      </div>
    </div>
  );
}
