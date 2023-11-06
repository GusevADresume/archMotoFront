import React from "react";

export default function PhotoModalView({ url, disp, callBack }) {
  return (
    <div className={disp ? "PhotoModalView" : "PhotoModalViewInvisible"}>
      <div className="PhotoModalViewImg">
        <img className="PhotoModalViewPick" src={url} />
      </div>
      <span onClick={callBack} className="CloseCross">
        ✖
      </span>
    </div>
  );
}
