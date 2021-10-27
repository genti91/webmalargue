import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IconContext } from "react-icons";
const TextInputArea = (props) => {
  const [blur, setBlur] = useState(false);
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="input_area_container">
      <IconContext.Provider value={{ className: "input_icon" }}>
        <div className="input_area_container__icon">{props.icon}</div>
      </IconContext.Provider>
      <textarea
        multiline
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        {...register(props.name, { required: props.required, maxLength: 80 })}
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
export default TextInputArea;
