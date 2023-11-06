import React from 'react';
import uuid from 'react-uuid';

export default function TextAndImageCarouselSmalle({content}) {

  return (
    <div className='TextAndImageCarouselSmalle' >
        <h2>{content[0]}</h2>

        {content[1].map((element, index)=>{
           return(
            <div key={uuid()}>
            <h3  className='TextAndImageCarouselSmalleText'>{element[0]}</h3>
            <p  className='TextAndImageCarouselSmalleText'>{element[1]}</p>
            <img  className='TextAndImageCarouselSmalleImage' src={element[2]} alt="" />
            </div>
           )
        })}
      
    </div>
  )
}
