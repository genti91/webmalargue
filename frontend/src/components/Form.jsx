import React from "react";
import axios from "axios";
import { useForm } from "../hooks";
import TextInput from "./TextInput";
import { form_shipment } from "../constant/forms";
import TextInputArea from "./TextInputArea";
const Form = () => {
  const { form, setInForm }= useForm({
    origin: "",
    destiny: "",
    name: "",
    email: "",
    message: "",
  });
  const resetForm = () => {
    setInForm({
      origin: "",
      destiny: "",
      name: "",
      email: "",
      message: "",
    });
  }
  const submitForm = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  form
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Mensaje enviado");
        resetForm()
      } else if (response.data.status === 'fail') {
        alert("El envío del mensaje falló")
      }
    })
  };
  return (
    <div className="container-form text-center">
      <span className="form-title">
        Cotizá tu envío completando todos tus datos.
      </span>
      <form id="contact-form" onSubmit={submitForm} method="POST">
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
          style={{
            outline: "none",
            border: "none",
          }}
        />
      </form>
    </div>
  );
};
export default Form;
