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
    <div className="input_container">
      <IconContext.Provider value={{ className: "input_icon" }}>
        <div className="input_container__icon">{props.icon}</div>
      </IconContext.Provider>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        {...register(props.name, { required: props.required, maxLength: 80 })}
        className="input_container__field"
        onFocus={() => setBlur(!blur)}
        onBlur={() => setBlur(false)}
      />
    </div>
  );
};
export default TextInput;
