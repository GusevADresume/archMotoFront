import React from "react";
import { useRef, useEffect } from "react";

export default function Privacy({changeAccept,chageTip}) {
  const ref = useRef(null);
  useEffect(
    ()=>{if(chageTip){
      ref.current.style.display = "block"
    } else{
      ref.current.style.display = "none"
    }},[chageTip]
  )
  return (
    <div className="Privacy">
      <div className="fname">
        Privacy Policy: <h className="RedStar">*</h>{" "}
      </div>
      <input onClick={() =>{changeAccept(),ref.current.style.display = "none"}} type="checkbox"></input>ARCH Motorcycle agrees to respect your
      privacy and process your data in accordance with our Privacy Policy. I
      have read and accept the Privacy Policy
      <div ref={ref} className="tip1">
        You must accept the terms and conditions.
      </div>
    </div>
  );
}
