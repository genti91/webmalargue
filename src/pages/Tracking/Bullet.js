import React from 'react'

export const Bullet = (fecha, index) => {
  return (
    <div
      className={fecha ? 'bullet col-2  ' : 'bullet col-2 '}
      // className='bullet col-2'
    ></div>
  )
}
