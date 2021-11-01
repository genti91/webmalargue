import React from "react";
import { useForm } from "../hooks";
import TextInput from "./TextInput";
import { form_shipment } from "../constant/forms";
import TextInputArea from "./TextInputArea";
const Form = () => {
  /*eslint no-unused-vars: "error"*/
  const { form, setInForm }= useForm({
    origin: "",
    destiny: "",
    name: "",
    email: "",
    message: "",
  });
  const submitForm = () => {
    console.log(form);
  };
  return (
    <div className="container-form text-center">
      <span className="form-title">
        Cotizá tu envío completando todos tus datos.
      </span>
      <div>
        <div className="wrapper_inputs">
          <TextInput {...form_shipment[0]} setInForm={setInForm} form={form} />
          <TextInput {...form_shipment[1]} setInForm={setInForm} form={form} />
        </div>
        <div className="wrapper_inputs">
          <TextInput {...form_shipment[2]} setInForm={setInForm} form={form} />
          <TextInput {...form_shipment[3]} setInForm={setInForm} form={form} />
        </div>
        <TextInputArea
          {...form_shipment[4]}
          setInForm={setInForm}
          form={form}
        />
        <span className="helper_text">
          *Recordá completar todos los campos del formulario.
        </span>
        <input
          type="submit"
          className="btn-pill-quote bg-secondary"
          value="Cotizá tu envío"
          onClick={submitForm}
          style={{
            outline: "none",
            border: "none",
          }}
        />
      </div>
    </div>
  );
};
export default Form;
