import React from "react";
import TextAndButtonBlock from "./TextAndButtonBlock";

export default function ImageTextBlockRevers({ content }) {
  return (
    <div className="ImageTextBlockRevers">
      <div className="ImageTextBlockReversContent">
        <TextAndButtonBlock content={content[1]} />
      </div>
      <div className="ImageTextBlockReversPhoto">
        <img className="ImageTextBlockReversImg" src={content[0]} alt="" />
      </div>
    </div>
  );
}
