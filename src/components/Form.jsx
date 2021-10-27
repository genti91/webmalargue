import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import { form_shipment } from "../constant/forms";
import TextInputArea from "./TextInputArea";
const Form = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e, ) => console.log(data, e);;

  return (
    <div className="container-form text-center">
      <span className='form-title'>Cotizá tu envío completando todos tus datos.</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="wrapper_inputs">
          <TextInput {...form_shipment[0]} />
          <TextInput {...form_shipment[1]} />
        </div>
        <div className="wrapper_inputs">
          <TextInput {...form_shipment[2]} />
          <TextInput {...form_shipment[3]} />
        </div>
        <TextInputArea {...form_shipment[4]} />
        <span className="helper_text">*Recordá completar todos los campos del formulario.</span>
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
