import React from "react";
import { useState, useRef } from "react";
import UserData from "./formsComponents/UsersData";
import Marketing from "./formsComponents/Marketing";
import Privacy from "./formsComponents/Privacy";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import postFormsData from "../../../store/postForms";


export default function Intersted() {
  const [name, setName] = useState("");
  const [inquiry, setinquiry] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [privaci, setPrivaci] = useState("");
  const [marketing, setMarketing] = useState({
    email: false,
    phone: false,
    sms: false,
  });
  const [privaciTip, setPrivaciTip] = useState(false);
  const [nameTip, setNameTip] = useState(false);
  const [emailTip, setEmailTip] = useState(false);
  const phoneTip = useRef(null);



  const sendForm = () => {
    const formData = {
      formName:"interested",
      name: name,
      lastName: lastName,
      email: email,
      phone: phone,
      privaci: privaci,
      marketing: marketing,
      country: document.querySelector(".CountryListSelect").value,
      inquiry: inquiry,
    };
    postFormsData(formData)
      //window.location.reload()
  };

  const checkForm = () => {
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
    if (privaci == "") {
      setPrivaciTip(true);
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
      <div className="InterstedTextArea">
        Is there anything else that you'd like to tell us about your inquiry?
        <textarea
          onChange={(e) => {
            setinquiry(e.target.value);
          }}
        ></textarea>
      </div>
      <div>
        <Marketing />
      </div>
      <div>
        I would like to receive marketing communications from ARCH Motorcycle
        via:
        <div>
          <label className="InterstedCheckbox">
            {" "}
            <input
              onClick={() =>
                setMarketing((prev) => {
                  return { ...prev, email: true };
                })
              }
              type="checkbox"
            ></input>{" "}
            Email
          </label>
          <label className="InterstedCheckbox">
            {" "}
            <input
              onClick={() =>
                setMarketing((prev) => {
                  return { ...prev, phone: true };
                })
              }
              type="checkbox"
            ></input>{" "}
            Phone{" "}
          </label>
          <label className="InterstedCheckbox">
            {" "}
            <input
              onClick={() =>
                setMarketing((prev) => {
                  return { ...prev, sms: true };
                })
              }
              type="checkbox"
            ></input>{" "}
            SMS/MMS
          </label>
        </div>
      </div>
      <Privacy
        changeAccept={() => {
          setPrivaci(true);
        }}
        chageTip={privaciTip}
      />
      <div onClick={checkForm} className="SubmitButton">
        Submit
      </div>
    </div>
  );
}
