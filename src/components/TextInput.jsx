import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IconContext } from "react-icons";
const TextInput = (props) => {
  const [blur, setBlur] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className={`input_container ${blur && "border_active"}`}>
      <IconContext.Provider value={{ className: "input_icon" }}>
        <div className="input_container__icon">{props.icon}</div>
      </IconContext.Provider>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        {...register(props.name, {
          required: props.required,
          pattern: props.validation,
        })}
        className="input_container__field"
        onFocus={() => setBlur(!blur)}
        onBlur={() => setBlur(false)}
      />
      {errors[props.name] && errors[props.name].types && (
        <p>{errors[props.name].types.required}</p>
      )}
    </div>
  );
};
export default TextInput;
