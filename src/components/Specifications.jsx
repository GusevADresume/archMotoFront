import React from "react";

export default function Specifications({ content }) {
  return (
    <div className="Specifications">
      <div className="SpecificationsHeader">FULL SPECIFICATIONS</div>
      <table className="SpecificationsTable">
        <tr>
          <td className="SpecificationsTableRowHader">Engine</td>
          <td className="SpecificationsTableRowData">{content["Engine"]}</td>
        </tr>
        <tr>
          <td className="SpecificationsTableRowHader">Displacement</td>
          <td>{content["Displacement"]}</td>
        </tr>
        <tr>
          <td className="SpecificationsTableRowHader">Drivetrain</td>
          <td className="SpecificationsTableRowData">
            {content["Drivetrain"]}
          </td>
        </tr>
        <tr>
          <td className="SpecificationsTableRowHader">Chassis</td>
          <td className="SpecificationsTableRowData">{content["Chassis"]}</td>
        </tr>
        <tr>
          <td className="SpecificationsTableRowHader">Front Suspension</td>
          <td className="SpecificationsTableRowData">
            {content["FrontSuspension"]}
          </td>
        </tr>
        <tr>
          <td className="SpecificationsTableRowHader">Rear Suspension</td>
          <td className="SpecificationsTableRowData">
            {content["RearSuspension"]}
          </td>
        </tr>
        <tr>
          <td className="SpecificationsTableRowHader">Front Brakes</td>
          <td className="SpecificationsTableRowData">
            {content["FrontBrakes"]}
          </td>
        </tr>
        <tr>
          <td className="SpecificationsTableRowHader">Rear Brakes</td>
          <td className="SpecificationsTableRowData">
            {content["RearBrakes"]}
          </td>
        </tr>
        <tr>
          <td className="SpecificationsTableRowHader">ABS</td>
          <td className="SpecificationsTableRowData">{content["ABS"]}</td>
        </tr>
        <tr>
          <td className="SpecificationsTableRowHader">ABS</td>
          <td className="SpecificationsTableRowData">{content["ABS"]}</td>
        </tr>
        <tr>
          <td className="SpecificationsTableRowHader">Front Wheel</td>
          <td className="SpecificationsTableRowData">
            {content["FrontWheel"]}
          </td>
        </tr>
        <tr>
          <td className="SpecificationsTableRowHader">Rear Wheel</td>
          <td className="SpecificationsTableRowData">{content["RearWheel"]}</td>
        </tr>
        <tr>
          <td className="SpecificationsTableRowHader">Front Tire</td>
          <td className="SpecificationsTableRowData">{content["FrontTire"]}</td>
        </tr>
        <tr>
          <td className="SpecificationsTableRowHader">Rear Tire</td>
          <td>{content["RearTire"]}</td>
        </tr>
        <tr>
          <td className="SpecificationsTableRowHader">Foot Controls</td>
          <td>{content["FootControls"]}</td>
        </tr>
      </table>

      <div className="SpecificationsFooter">
        CARB / EPA compliant; ABS standard equipment on 2021-later 1s models
      </div>
    </div>
  );
}
