import React from "react";
import { useState, useRef } from "react";

export default function TextAndImgCarousel({ content }) {
  const [counter, setCounter] = useState(0);
  const [visibleIng, setVisibleImg] = useState(true);
  const [outPosition, setOutPosition] = useState(1000)
  const [inPosition, setOutPositiom] = useState(55);
  const [moveSpeed, setMoveSpeed] = useState(5)
  const textBlock = useRef(null);
  const imgBlock = useRef(null);

  const blocksOutHandler = () => {
    let position = inPosition;
    return new Promise(function (rres) {
      let inter = setInterval(() => {
        setVisibleImg(false);
        if (position >= outPosition) {
          textBlock.current.style.opacity = `0`;
          imgBlock.current.style.opacity = `0`;
          textBlock.current.style.display = "none";
          imgBlock.current.style.display = "none";

          rres(true);
          clearInterval(inter);
        } else {
          position = position + moveSpeed;
          textBlock.current.style.left = `-${position}px`;
          imgBlock.current.style.right = `-${position}px`;
        }
      }, 0.01);
    });
  };

  const blocksInHandler = () => {
    let position = -outPosition;
    let inter = setInterval(() => {
      if (position >= inPosition) {
        clearInterval(inter);
        setVisibleImg(true);
      } else {
        textBlock.current.style.opacity = `100`;
        imgBlock.current.style.opacity = `100`;
        textBlock.current.style.display = "flex";
        imgBlock.current.style.display = "flex";
        position = position + moveSpeed;
        textBlock.current.style.left = `${position}px`;
        imgBlock.current.style.right = `${position}px`;
      }
    }, 0.01);
  };

  async function swipeRightHandler() {
    await blocksOutHandler();
    if (counter + 1 < content[1].length) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
    blocksInHandler();
  }

  async function swipeLeftHandler() {
    await blocksOutHandler();
    if (counter - 1 < 0) {
      setCounter(content[1].length - 1);
    } else {
      setCounter(counter - 1);
    }
    blocksInHandler();
  }
  return (
    <div className="TextAndImgCarousel">
      <h1 className="TextAndImgCarouselHeader">{content[0]}</h1>
      <div className="TextAndImgCarouselContent">
        <div
          onClick={swipeLeftHandler}
          className="TextAndImgCarouselArrow Left"
        >
          <span></span>
        </div>
        <div className="TextAndImgCarouselText">
          <div className="TextAndImgCarouselTexContent">
            <div ref={textBlock} className="TextAndImgCarouselTextmovableblock">
              <h2>{content[1][counter][0]}</h2>
              <p>{content[1][counter][1]}</p>
            </div>
          </div>
          <div className="TextAndImgCarouselimgMovableBlock">
            <img
              ref={imgBlock}
              className={"TextAndImgCarouselimgPic"}
              src={content[1][counter][2]}
              alt=""
            />
          </div>
        </div>
        <div
          onClick={swipeRightHandler}
          className="TextAndImgCarouselArrow Right"
        >
          <span></span>
        </div>
      </div>
    </div>
  );
}
