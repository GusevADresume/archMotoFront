import React from "react";

export default function Tailored({color}) {
  return (
    <div className={`Tailored ${color}`}>
        <div className="Tailoredheader">
      <h1>TAILORED TO YOU</h1>
      </div>
      <div className="TailoredText">
      <span>
        The ARCH 1s features a bespoke aesthetic and ergonomic package tailoring
        the fit and finish of the motorcycle to its owner. Tailoring begins with
        the creation of your aesthetic package followed by an ergonomic fitting.
        Seat, foot and hand control adjustments result in an organic connection
        with the motorcycle. Assembled at ARCH Motorcycle’s Los Angeles
        facility, each ARCH 1s is built to order.
      </span>
      </div>
    </div>
  );
}
