import React from 'react'

export default function PhotoAndText({content}) {
  return (
    <div className={`PhotoAndText ${content[1]} ${content[3]}`}>
      <div className='PhotoAndTextPhoto'>
      <img className='PhotoAndTextPhotoImg' src={content[0]} />
      </div>
      <div className='PhotoAndTextContent'>
        <h1>{content[2][0]}</h1>
        <p>{content[2][1]}</p>
      </div>
    </div>
  )
}

//<img className='PhotoAndTextPhotoImg' src={content[0]} />