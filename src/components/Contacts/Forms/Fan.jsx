import React, { useRef } from "react";
import { useState } from "react";
import UserData from "./formsComponents/UsersData";
import Marketing from "./formsComponents/Marketing";
import Privacy from "./formsComponents/Privacy";
import postFormsData from "../../../store/postForms";

export default function Fan() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comm, setComm] = useState("");
  const [privaci, setPrivaci] = useState("");
  const [privaciTip, setPrivaciTip] = useState(false);
  const [nameTip, setNameTip] = useState(false);
  const [emailTip, setEmailTip] = useState(false);
  const ref = useRef("");

  const sendForm = () => {
    const formData = {
      formName:"fan",
      name: name,
      lastName: lastName,
      email: email,
      privaci: privaci,
      country: document.querySelector(".CountryListSelect").value,
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
    if (comm == "") {
      ref.current.style.display = "block";
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
      <Marketing />
      <div>
        <p>
          I would like to receive marketing communications from ARCH Motorcycle
          via:
        </p>
        <input
          onClick={() => {
            setComm(true);
            ref.current.style.display = "none";
          }}
          type="checkbox"
        ></input>
        Email
        <div ref={ref} className="tip1">
          You must accept the terms and conditions.
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
