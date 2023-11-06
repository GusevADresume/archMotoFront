import React from "react";
import TextAndButtonBlock from "./TextAndButtonBlock";

export default function ImageTextBlock({ content }) {
  return (
    <div className={`ImageTextBlock${content[2]}`}>
      <div className="ImageTextBlockImg">
        <img className="ImageTextBlockWalp" src={content[0]} alt="" />
      </div>
      <div className={`ImageTextBlockText${content[2]}`}>
      <TextAndButtonBlock content={content[1]}/>
      </div>
    </div>
  );
}