import React from "react";

export const Bullet = (fecha, index) => {
  console.log(fecha.indexOf);
  return (
    <div
      className={fecha ? "bullet col-2  " : "bullet col-2 "}
      // className='bullet col-2'
    ></div>
  );
};
