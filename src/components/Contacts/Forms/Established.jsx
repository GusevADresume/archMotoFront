import React from "react";
import { useState, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import UserData from "./formsComponents/UsersData";
import CompanyIn from "./formsComponents/CompanyIn";
import BusinessAbout from "./formsComponents/BusinessAbout";
import Marketing from "./formsComponents/Marketing";
import Communications from "./formsComponents/Communications";
import Privacy from "./formsComponents/Privacy";
import postFormsData from "../../../store/postForms";

export default function Established() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [privaci, setPrivaci] = useState("");
  const [bName, setbName] = useState("");
  const [addres, setAddress] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postal, setPostal] = useState("");
  const [about, setAbout] = useState("");
  const [brands, setBrands] = useState("");
  const [information, setInformation] = useState("");
  const [comm, setComm] = useState("");

  const [privaciTip, setPrivaciTip] = useState(false);
  const [nameTip, setNameTip] = useState(false);
  const [emailTip, setEmailTip] = useState(false);
  const [cFirstTip, setCFirstTip] = useState(false);
  const [cSecondTip, setCSecondTip] = useState(false);
  const [bisTip, setBisTip] = useState(false);
  const phoneTip = useRef(null);

  const sendForm = ()=>{
    const formData={
      formName:"established",
      name:name,
      lastName:lastName,
      email:email,
      phone:phone,
      privaci:privaci,
      bName:bName,
      addres:addres,
      line2:line2,
      city:city,
      region:region,
      postal:postal,
      about:about,
      brands:brands,
      information:information,
      comm:comm
    }
    postFormsData(formData)
    //window.location.reload()
  }

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
    if (phone == "") {
      phoneTip.current.style.display = "block";
      checked = false;
    }
    if (phone == "") {
      phoneTip.current.style.display = "block";
      checked = false;
    }
    if (privaci == "") {
      setPrivaciTip(true);
      checked = false;
    }
    if (bName == "") {
      setCFirstTip(true);
      console.log("setCFirstTip", cFirstTip);
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
    if (about == "") {
      setBisTip(true);
      checked = false;
    }
    if (checked) {
      console.log("here");
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
      <div className="fname">
        Phone number: <h className="RedStar">*</h>{" "}
      </div>
      <PhoneInput
        onBlur={(value) => {
          value.target.value.length > 2
            ? (phoneTip.current.style.display = "none")
            : (phoneTip.current.style.display = "block");

          setPhone(value.target.value);
        }}
        enableSearch={true}
        country="us"
      />

      <div ref={phoneTip} className="tip1">
        Enter a value for this field.
      </div>
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
      <BusinessAbout
        changeAbout={(e) => {
          setAbout(e);
        }}
        changeBrands={(e) => {
          setBrands(e);
        }}
        changeInfo={(e) => {
          setInformation(e);
        }}
        changeBisTip={bisTip}
      />
      <Marketing />
      <p></p>
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
