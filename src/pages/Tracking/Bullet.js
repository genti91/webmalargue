import React from 'react'

export const Bullet = (fecha, index) => {

  console.log(index)

  return (
    
    <div
      id={index}
        className={ fecha ? ('bullet col-2 completed ') : ('bullet col-2 ') }
    >
    </div>
  )
}
