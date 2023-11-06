import React from "react";
import { useState } from "react";
import PhotoModalView from "./PhotoModalView";
import uuid from 'react-uuid';
import loupe from "../../assets/images/loupe.png";

export default function SmallGalery({ content, size }) {
  const [modalUrl, setModalUrl] = useState("");
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleZoomButtonIn = (e) => {
    let opp = 0;
    let int = setInterval(() => {
      if (opp > 0.9) {
        clearInterval(int);
      } else {
        opp += 0.015;
        e.target.style.opacity = `${opp}`;
        e.target.children[0].style.opacity = `${opp}`;
      }
    });
  };
  const handleZoomButtonOut = (e) => {
    let opp = 1;
    let int = setInterval(() => {
      if (opp < 0) {
        clearInterval(int);
      } else {
        opp -= 0.015;
        e.target.style.opacity = `${opp}`;
        e.target.children[0].style.opacity = `${opp}`;
      }
    });
  };

  const openImgHandle = (e) => {
    if (e.target.previousElementSibling.tagName == "IMG") {
      setModalUrl(e.target.previousElementSibling.src);
      setModalDisplay(true);
    }
  };

  const dellUrl = ()=>{
    setModalUrl("")
    setModalDisplay(false)
    `SmallGaleryImgWraper`
  }

  return (
    <div className="SmallGalery">
      <PhotoModalView url={modalUrl} disp={modalDisplay} callBack={dellUrl}/>
      <div className="SmallGaleryText">
        <h1 className="SmallGaleryTextHeader">{content[0]}</h1>
        <p className="SmallGaleryTextText">{content[1]}</p>
      </div>
      <div className="SmallGaleryWraper">
        <div className="SmallGaleryImgs">
          {content[2].map((element, index) => {
            return (
              <>
                <div key={uuid()} className={`SmallGaleryImgWraper ${size}`}>
                  <img
                    className={`SmallGaleryImg ${size}`}
                    id={index}
                    key={uuid()}
                    src={element}
                    alt=""
                  />
                  <div
                    onMouseEnter={handleZoomButtonIn}
                    onMouseLeave={handleZoomButtonOut}
                    onClick={openImgHandle}
                    key={uuid()}
                    className={`SmallGaleryImgZoomButton ${size}`}
                  >
                    <img
                      key={uuid()}
                      className="SmallGaleryImgZoomloupe"
                      src={loupe}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
