import React from "react";
import uuid from 'react-uuid';

export default function FooterBlockSocialTable({ blocks }) {
  return (
    <div className="FooterBlockSocialTable">
      {Object.keys(blocks).map((obj, index) => {
        return(
        <a key={uuid()} href={blocks[obj][0]}> <img className="LinkImg" src={blocks[obj][1]} color={'white'}/></a>
        )
      })}
    </div>
  );
}
