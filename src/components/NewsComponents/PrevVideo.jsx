import React from "react";
import videoPrew from "../../assets/images/News/allVideoPrev.png";

export default function PrevVideo({ img, callBack }) {
  return (
    <div className="NewsPrevVideoWraper">
      <div className="NewsPrevVideo">
        <img onClick={callBack} className="NewsPrevVideobtn" src={videoPrew} />
        <img onClick={callBack} className="NewsPrevVideoimg" src={img} alt="" />
      </div>
    </div>
  );
}
