import React from 'react'

export default function PrevImg({img, callBack}) {
  return (
    <img onClick = {callBack} className='NewsPrevImg' src={img} alt='ups' />
  )
}
