import React from "react";

export default function KeySpec({ content, color }) {
  return (
    <div className={`KeySpec ${color}`}>
      <div className="KeySpecImg">
        <img className="KeySpecImg" src={content[0]} alt="" />
      </div>
      <div className="KeySpecData">
        <div className="KeySpecDataHeader">
          <h1>KEY SPECIFICATIONS</h1>
        </div>
        <div className="KeySpecDataTable">
          <div className="KeySpecDataTableRow">
            <div className="KeySpecDataTableNumbers">
              {content[1]["Displacement (cc)"]}
            </div>
            <div className="KeySpecDataTableKeys">Displacement (cc)</div>
          </div>
          <div className="KeySpecDataTableRow">
            <div className="KeySpecDataTableNumbers">
              {content[1]["Dry Weight (lbs.)"]}
            </div>
            <div className="KeySpecDataTableKeys">Dry Weight (lbs.)</div>
          </div>
          <div className="KeySpecDataTableRow">
            <div className="KeySpecDataTableNumbers">
              {content[1]["Torque (ftlb @ RPM)"]}
            </div>
            <div className="KeySpecDataTableKeys">Torque (ftlb @ RPM)</div>
          </div>
          <div className="KeySpecDataTableRow">
            <div className="KeySpecDataTableNumbers">
              {content[1]["Tank Capacity (Gallons US)"]}
            </div>
            <div className="KeySpecDataTableKeys">
              Tank Capacity (Gallons US)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
