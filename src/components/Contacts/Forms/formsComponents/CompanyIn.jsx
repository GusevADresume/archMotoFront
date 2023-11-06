import React from "react";
import { useState, useRef, useEffect } from "react";
import CountryList from "./CountryList";

export default function CompanyIn({
  changecFirstTip,
  changecSecondTip,
  changeBname,
  changeAddres,
  changeLine2,
  changeRegion,
  changePostal,
  changeCity,
}) {
  const [bName, setbName] = useState("");
  const [addres, setAddress] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postal, setPostal] = useState("");
  const [about, setAbout] = useState("");
  const [brands, setBrands] = useState("");
  const [information, setInformation] = useState("");
  const cFirstTip = useRef("");
  const cSecondTip = useRef("");

  useEffect(() => {
    if (changecFirstTip) {
      cFirstTip.current.style.display = "block";
    }
    if (changecSecondTip) {
      cSecondTip.current.style.display = "block";
    }
  }, [changecFirstTip, changecSecondTip]);

  return (
    <div className="CompanyIn">
      <div className="CompanyFirst">
        <div className="fname">
          Name of your business / company: <h className="RedStar">*</h>{" "}
        </div>
        <input
          value={bName}
          onChange={(e) => {
            setbName(e.target.value);
          }}
          onBlur={(e) => {
            e.target.value.length == 0
              ? (cFirstTip.current.style.display = "block")
              : (cFirstTip.current.style.display = "none");
            changeBname(bName);
          }}
          className="CompanyFirstInput"
          type="text"
        ></input>
        <div ref={cFirstTip} className="tip">
          Enter a value for this field.
        </div>
        <div className="fname">
          Business address: <h className="RedStar">*</h>{" "}
        </div>
        <input
          value={addres}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          onBlur={(e) => {
            e.target.value.length == 0
              ? (cSecondTip.current.style.display = "block")
              : (cSecondTip.current.style.display = "none");
            changeAddres(addres);
          }}
          type="text"
        ></input>
        <div className="fname">
          <p className="fieldsign">Street Address</p>
        </div>
        <input
          value={line2}
          onChange={(e) => {
            setLine2(e.target.value);
          }}
          onBlur={(e) => {
            e.target.value.length == 0
              ? (cSecondTip.current.style.display = "block")
              : (cSecondTip.current.style.display = "none");
            changeLine2(line2);
          }}
          className="CompanySecondInput"
          type="text"
        ></input>
        <p className="fieldsign">Address Line 2</p>
      </div>
      <div className="CompanySecond">
        <div className="inputSecondBlock">
          <input
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            onBlur={(e) => {
              e.target.value.length == 0
                ? (cSecondTip.current.style.display = "block")
                : (cSecondTip.current.style.display = "none");
              changeCity(city);
            }}
            type="text"
          ></input>
          <p className="fieldsign">City</p>
        </div>
        <div className="inputSecondBlock">
          <input
            value={region}
            onChange={(e) => {
              setRegion(e.target.value);
            }}
            onBlur={(e) => {
              e.target.value.length == 0
                ? (cSecondTip.current.style.display = "block")
                : (cSecondTip.current.style.display = "none");
              changeRegion(region);
            }}
            type="text"
          ></input>
          <p className="fieldsign">State/Region/Province</p>
        </div>
        <div className="inputSecondBlock">
          <input
            value={postal}
            onChange={(e) => {
              setPostal(e.target.value);
            }}
            onBlur={(e) => {
              e.target.value.length == 0
                ? (cSecondTip.current.style.display = "block")
                : (cSecondTip.current.style.display = "none");
              changePostal(postal);
            }}
            type="text"
          ></input>
          <p className="fieldsign">Postal / Zip Code</p>
        </div>
        <div className="inputSecondBlock">
          <CountryList visible={false} />
        </div>
      </div>
      <div ref={cSecondTip} className="tip">
        Enter a value for this fields.
      </div>
    </div>
  );
}
