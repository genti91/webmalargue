import React, { useState } from "react";
import { IconContext } from "react-icons";
import { validateInputs } from './FormCotizador/validateInputs'

const TextInput = (props) => {
  const [blur, setBlur] = useState(false);
  const handleChange = (e) => {
    props.setInForm( e.target.name, e.target.value);
  };
  const onBlurFunction = () => {
    setBlur(false);
    let errors = validateInputs(props.form)
    props.setErorrs(errors)
  };
  return (
    // DATA in border_active!!!
    <div className={`input_container ` + (blur && ((props.errors && props.errors[props.name]) ? 'border_active_error' : 'border_active' ))}>
      <IconContext.Provider value={{ className: "input_icon" }}>
        <div className="input_container__icon">{props.icon}</div>
      </IconContext.Provider>
      {props.type !== "select" ? (
        <input
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          // arreglar la clase de error
          className={"input_container__field " + ((props.errors && props.errors[props.name]) &&  "input_container__field_error")}
          onFocus={() => setBlur(!blur)}
          onBlur={() => onBlurFunction()}
          value={props.name === 'originCP' || props.name === 'destinyCP' ? props.form[props.name] : null}
          onChange={(e) => handleChange(e)}
        />
      ) : (
        <>
          <select
            name={props.name} 
            id={props.name}
            className="input_container__field"
            onFocus={() => setBlur(!blur)}
            onBlur={() => setBlur(false)}
            onChange={(e) => handleChange(e)}
          >
            <option value="" selected disabled hidden >{props.placeholder}</option>
            {props.options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};
export default TextInput;
