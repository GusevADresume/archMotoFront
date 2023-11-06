import React from "react";
import { useState } from "react";

export default function Communications({ setCommState }) {
  const [comm, setComm] = useState({
    email: false,
    telephone: false,
    sms: false,
    mail: false,
  });
  return (
    <div className="inputsBlock">
      I would like to receive marketing communications from ARCH Motorcycle via:
      <div>
        <input
          onClick={() => {
            setComm((prev) => {
              return { ...prev, email: true };
            });
            setCommState(comm);
          }}
          type="checkbox"
        ></input>
        Email
      </div>
      <div>
        <input
          onClick={() => {
            setComm((prev) => {
              return { ...prev, telephone: true };
            });
            setCommState(comm);
          }}
          type="checkbox"
        ></input>
        Telephone
      </div>
      <div>
        <input
          onClick={() => {
            setComm((prev) => {
              return { ...prev, sms: true };
            });
            setCommState(comm);
          }}
          type="checkbox"
        ></input>
        SMS/MMS
      </div>
      <div>
        <input
          onClick={() => {
            setComm((prev) => {
              return { ...prev, mail: true };
            });
            setCommState(comm);
          }}
          type="checkbox"
        ></input>
        Mail
      </div>
    </div>
  );
}
