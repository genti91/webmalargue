import React, { useState } from "react";
import { IconContext } from "react-icons";
const TextInputArea = (props) => {
  const [blur, setBlur] = useState(false);
  const handleChange = (e) => {
    props.setInForm( e.target.name, e.target.value);
  };

  return (
    <div className={`input_area_container ${blur && "border_active"}`}>
      <IconContext.Provider value={{ className: "input_icon" }}>
        <div className="input_area_container__icon">{props.icon}</div>
      </IconContext.Provider>
      <textarea
        multiline="true"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className="input_container__field"
        onFocus={() => setBlur(!blur)}
        onBlur={() => setBlur(false)}
        onChange={(e)=>handleChange(e)}
      />
    </div>
  );
};
export default TextInputArea;
