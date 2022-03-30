import React, { useState } from 'react'


export const GuiaNoEncontrada = ({trackingSteps, trackingInput }) => {

  console.log(trackingInput)
  console.log(trackingSteps.length)

 const status = ''

  // const errorMsg = ()=> {if (trackingInput !== 'Guia' && trackingSteps.length == 0){
  //   status='ok'}else{
  //   status='no'
  //  }}
  

  return (

    <>
      <h1>{status}</h1>
    </>
  )
}
