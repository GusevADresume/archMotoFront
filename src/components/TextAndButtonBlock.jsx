import React from "react";
import { NavLink } from "react-router-dom";

export default function TextAndButtonBlock({ content }) {
  return (
    <div className="TextAndButtonBlock">
      <div className="TextAndButtonBlockContent">
        <h1>{content[0]}</h1>
        <h5>{content[1]}</h5>
        <NavLink
          className="DiscoverButton"
          to={content[2].indexOf("https") == 0 ? content[2] : `/` + content[2]}
        >
          DISCOVER MORE
        </NavLink>
      </div>
    </div>
  );
}
