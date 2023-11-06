import React from "react";
import { useState } from "react";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import ModalMenu from "./ModalMenu";

export default function topBar() {
  const [popup, setpopup] = useState(false)

  const modalOpen = () => setpopup(true)
  const modalClose = () => setpopup(false)

  return (
    <>
    <div className="topBar">
      <div className="logo_container">
        <NavLink to="/">
          <img className="logo" src={Logo}></img>
        </NavLink>
      </div>
      <div onClick={modalOpen} className="menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <ModalMenu visible={popup} onChange={modalClose}/>
    </>
    
  );
}

{/*  */}
