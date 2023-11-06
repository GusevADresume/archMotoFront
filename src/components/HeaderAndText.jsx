import React from 'react'

export default function HeaderAndText({content}) {
  return (
    <div className='HeaderAndTextWraper'>
      <h1 className='HeaderAndTextHeader'>{content[0]}</h1>
      <p  className='HeaderAndTextText'>{content[1]}</p>
    </div>
  )
}
