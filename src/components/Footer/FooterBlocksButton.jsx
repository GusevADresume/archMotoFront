import React from 'react';
import { NavLink } from "react-router-dom";

export default function FooterBlocksButton({button}) {
  return (
    <div className='footerLinks'>
      <NavLink className='footerLinks' to={`${button[Object.keys(button)]}`}>{Object.keys(button)}</NavLink>
    </div>
  )
}
