import React from "react";
import { NavLink } from "react-router-dom";

export default function ModalMenu({ visible = false, onChange }) {
  const modalCloseHandler = () => {
    onChange(false);
  };

  return (
    <div className={visible ? "ModalBody" : "invisible"}>
      <div className="MenuButtonsList">
        <div className={visible ? "MenuButton1" : "MenuButton"}>
          <NavLink onClick={modalCloseHandler} className="navL menuNav" to="/">
            HOME
          </NavLink>
        </div>
        <div className={visible ? "MenuButton2" : "MenuButton"}>
          <NavLink onClick={modalCloseHandler} className="navL menuNav" to="/ABOUT">
            ABOUT
          </NavLink>
        </div>
        <div className={visible ? "MenuButton3" : "MenuButton"}>
          <NavLink onClick={modalCloseHandler} className="navL menuNav" to="/BESPOKE">
            BESPOKE
          </NavLink>
        </div>
        <div className={visible ? "MenuButton4" : "MenuButton"}>
          <NavLink onClick={modalCloseHandler} className="navL menuNav" to="/OWNERSHIP">
            OWNERSHIP
          </NavLink>
        </div>
        <div className={visible ? "MenuButton5" : "MenuButton"}>
          <NavLink onClick={modalCloseHandler} className="navL menuNav" to="/KRGT-1">
            KRGT-1
          </NavLink>
        </div>
        <div className={visible ? "MenuButton6" : "MenuButton"}>
          <NavLink onClick={modalCloseHandler} className="navL menuNav" to="/1S">
            1S
          </NavLink>
        </div>
        <div className={visible ? "MenuButton7" : "MenuButton"}>
          <NavLink onClick={modalCloseHandler} className="navL menuNav" to="/METHOD-143">
            METHOD 143
          </NavLink>
        </div>
        <div className={visible ? "MenuButton8" : "MenuButton"}>
          <NavLink onClick={modalCloseHandler} className="navL menuNav" to="https://apparel.archmotorcycle.com/">
            APPAREL
          </NavLink>
        </div>
        <div className={visible ? "MenuButton9" : "MenuButton"}>
          <NavLink onClick={modalCloseHandler} className="navL menuNav" to="/NEWS">
            NEWS
          </NavLink>
        </div>
        <div className={visible ? "MenuButton10" : "MenuButton"}>
          <NavLink onClick={modalCloseHandler} className="navL menuNav" to="/CONTACT">
            CONTACT
          </NavLink>
        </div>
      </div>
      <span className="CloseCross" onClick={modalCloseHandler}>
        ✖
      </span>
    </div>
  );
}
