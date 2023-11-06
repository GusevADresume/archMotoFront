import React from "react";
import DiscoverMotoComp from "./DiscoverMotoComp";

import Disc1S from "../assets/images/1s_DISCOVER.jpg";
import DiscKRGT1 from "../assets/images/KRGT-1_DISCOVER.jpg";
import DiscMethod143 from "../assets/images/METHOD143_DISCOVER.jpg";

export default function MotorcuclesComp() {
  const imgs = [
    { "KRGT-1": DiscKRGT1 },
    { "1S": Disc1S },
    { "METHOD-143": DiscMethod143 },
  ];
  return (
    <div className="MotorcuclesComp">
      <div className="MotorcuclesHeader">
        <h2>MOTORCYCLES</h2>
      </div>
      <div className="MotorcuclesCompContent">
        {imgs.map((Object) => {
          return <DiscoverMotoComp photo={Object} />;
        })}
      </div>
    </div>
  );
}
