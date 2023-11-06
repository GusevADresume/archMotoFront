import React from "react";
import FooterBlockSocialTable from "./FooterBlockSocialTable";
import FooterBlocksButton from "./FooterBlocksButton";
import uuid from 'react-uuid';

export default function FooterBlock({ blocks }) {
  return (
    <>
      {blocks.map((obj, index) => {
        const len = Object.keys(obj[Object.keys(obj)]).length;
        return (
          <div key={uuid()} className="FooterBlock">
            <div className="FooterBlockHeader">{Object.keys(obj)}</div>
            {Object.keys(obj[Object.keys(obj)]).length > 1 ? (
              <FooterBlockSocialTable blocks={obj[Object.keys(obj)]} />
            ) : (
              <FooterBlocksButton button={obj[Object.keys(obj)]} />
            )}
          </div>
        );
      })}
    </>
  );
}

//{Object.keys(obj[Object.keys(obj)])}
