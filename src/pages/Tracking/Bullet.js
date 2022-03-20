import React from 'react'

export const Bullet = (fecha) => {


  return (
    
    <div 
        className={ fecha ? ('bullet col-2 completed ') : ('bullet col-2 ') }
    >
    </div>
  )
}
