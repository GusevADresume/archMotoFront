import React from 'react';
import { NavLink } from "react-router-dom";

export default function DiscoverMotoComp({photo}) {
  return (
    <>
    <div className='DiscoverPhoto'>
      <img className='DiscoverImg' src={Object.values(photo)} alt="" />
      <NavLink className='DiscoverButton' to={`/`+Object.keys(photo)}>DISCOVER MORE</NavLink>
     
    </div>
   
    </>
  )
}
