import React from "react";
import { useState, useEffect, useRef } from "react";

export default function BusinessAbout({
  changeAbout,
  changeBrands,
  changeInfo,
  changeBisTip,
}) {
  const [about, setAbout] = useState("");
  const [brands, setBrands] = useState("");
  const [information, setInformation] = useState("");
  const bAboutTip = useRef(null);

  useEffect(()=>{
    if(changeBisTip){
      bAboutTip.current.style.display = "block"
    }
  },[changeBisTip])

  return (
    <div className="BusinesAbout">
      <div className="fname">
        What does your business do? <h className="RedStar">*</h>{" "}
      </div>
      <textarea
        value={about}
        onChange={(e) => {
          setAbout(e.target.value);
        }}
        onBlur={(e) => {
          e.target.value.length == 0
            ? (bAboutTip.current.style.display = "block")
            : (bAboutTip.current.style.display = "none");
          changeAbout(about);
        }}
      ></textarea>
      <div ref={bAboutTip} className="tip">
        Enter a value for this field.
      </div>
      <div className="fname">
        What other brands do you manage? <h className="RedStar">*</h>{" "}
      </div>
      <textarea
        value={brands}
        onChange={(e) => {
          setBrands(e.target.value);
        }}
        onBlur={(e) => {
          e.target.value.length == 0
            ? (bAboutTip.current.style.display = "block")
            : (bAboutTip.current.style.display = "none");
          changeBrands(brands);
        }}
      ></textarea>
      <div className="fname">
        Is there any further information that you would like to share with us?{" "}
        <h className="RedStar">*</h>{" "}
      </div>
      <textarea
        value={information}
        onChange={(e) => {
          setInformation(e.target.value);
        }}
        onBlur={(e) => {
          e.target.value.length == 0
            ? (bAboutTip.current.style.display = "block")
            : (bAboutTip.current.style.display = "none");
          changeInfo(brands);
        }}
      ></textarea>
    </div>
  );
}
