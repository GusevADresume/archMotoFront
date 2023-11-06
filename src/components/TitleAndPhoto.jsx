import React from 'react'

export default function TitleAndPhoto({Photo}) {
  return (
    <div className='TitleAndPhoto'>
      <h2 className='TitleAndPhotoTitle'>Inspired by the ride. Crafted with passion. Tailored to you.</h2>
      <div className='TitleAndPhotoPhoto'>
      <img className='TitleAndPhotoPhoto' src={Photo} ></img>
      </div>
    </div>
  )
}

