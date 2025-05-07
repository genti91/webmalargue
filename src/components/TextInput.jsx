import React, { useState } from "react";
import { IconContext } from "react-icons";
import { validateInputs } from './FormCotizador/validateInputs'

const TextInput = (props) => {
    const [blur, setBlur] = useState(false);
    const handleChange = (e) => {
        props.setInForm(e.target.name, e.target.value);
    };
    const onBlurFunction = () => {
        setBlur(false);
        if (props.errors) {
            let errors = validateInputs(props.form)
            props.setErorrs(errors)
        }
    };
    return (
        // DATA in border_active!!!
        <div className="tw-flex tw-flex-col">
            <div className={`input_container ` + (blur && (((props.errors && props.errors[props.name]) || props.error) ? 'border_active_error' : 'border_active'))}>
                <IconContext.Provider value={{ className: "input_icon" }}>
                    <div className="input_container__icon">{props.icon}</div>
                </IconContext.Provider>
                {props.type !== "select" ? (
                    <input
                        name={props.name}
                        type={props.type}
                        placeholder={props.placeholder}
                        className={"input_container__field " + (((props.errors && props.errors[props.name]) || props.error) && "input_container__field_error")}
                        onFocus={() => setBlur(!blur)}
                        onBlur={() => onBlurFunction()}
                        value={props.name === 'originCP' || props.name === 'destinyCP' ? props.form[props.name] : props.value}
                        onChange={(e) => handleChange(e)}
                        id={props.name}
                    />
                ) : (
                    <>
                        <select
                            name={props.name}
                            id={props.name}
                            className={"input_container__field " + ((props.errors && props.errors[props.name]) && "input_container__field_error")}
                            onFocus={() => setBlur(!blur)}
                            onBlur={() => setBlur(false)}
                            value={props.form[props.name]}
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
            <div className="tw-mb-[2em]">
                {(props.error) && (
                    <span className="tw-text-red-500 tw-text-xs">{props.error}</span>
                )}
            </div>
        </div >
    );
};
export default TextInput;
