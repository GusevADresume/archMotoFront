import React from "react";
import { useState, useRef } from "react";

export default function BigCarousel({ content }) {
  const [counter, setCounter] = useState(0);
  const [startPosition, setStart] = useState(0);
  const imgBlock = useRef(null);
  const leftArrow = useRef(null);
  const rightArrow = useRef(null);

  const imgOn = () => {
    let opp = 0.1;
    return new Promise(function () {
      let inter = setInterval(() => {
        if (opp >= 1) {
          clearInterval(inter);
        } else {
          opp += 0.01;
          imgBlock.current.style.opacity = `${opp}`;
        }
      }, 0.01);
    });
  };

  const imgOff = () => {
    let opp = 1;
    return new Promise(function (res) {
      let inter = setInterval(() => {
        if (opp <= 0.1) {
          clearInterval(inter);
          res(true);
        } else {
          opp -= 0.01;
          imgBlock.current.style.opacity = `${opp}`;
        }
      }, 0.01);
    });
  };

  async function scroolForward() {
    await imgOff();
    if (counter + 1 < content.length) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
    imgOn();
  }

  async function scrollBack() {
    await imgOff();
    if (counter - 1 < 0) {
      setCounter(content.length - 1);
    } else {
      setCounter(counter - 1);
    }
    imgOn();
  }

  const fixedStartPosition = (e) => {
    e.preventDefault;
    e.dataTransfer.dropEffect = "copy";
    const img = new Image();
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    e.dataTransfer.setDragImage(img, 0, 0);
    setStart(e.screenX);
  };

  const scrollOnDrug = (e) => {
    if (startPosition > e.screenX) {
      scroolForward();
    } else {
      scrollBack();
    }
  };

  const mouseEnter = () => {
    leftArrow.current.children[0].style.opacity = 1;
    leftArrow.current.children[0].style.marginLeft = "25px";
    rightArrow.current.children[0].style.opacity = 1;
    rightArrow.current.children[0].style.marginLeft = "-45px";
  };

  const mouseOwer = () => {
    leftArrow.current.children[0].style.opacity = 0;
    leftArrow.current.children[0].style.marginLeft = "5px";
    rightArrow.current.children[0].style.opacity = 0;
    rightArrow.current.children[0].style.marginLeft = "-27px";
  };

  return (
    <div className="BigCarousel">
      <div className="BigCarouselWraper">
        <div
          onMouseEnter={mouseEnter}
          ref={leftArrow}
          onClick={scrollBack}
          className="BigCarouselWraperArrow BCLEFT"
        >
          <span></span>
        </div>
        <img
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseOwer}
          ref={imgBlock}
          draggable="true"
          onDragStart={fixedStartPosition}
          onDragEnd={scrollOnDrug}
          className="BigCarouselImg"
          src={content[counter]}
        ></img>
        <div
          onMouseEnter={mouseEnter}
          ref={rightArrow}
          onClick={scroolForward}
          className="BigCarouselWraperArrow BCRIGHT"
        >
          <span></span>
        </div>
      </div>
    </div>
  );
}
