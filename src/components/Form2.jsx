import React from "react";
import { useForm } from "react-hook-form";
import TextInput2 from "./TextInput2";
import { form_shipment } from "../constant/forms";
import TextInputArea from "./TextInputArea";
const Form = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => console.log(data, e);

  return (
    <div className="container-form-2 text-center">
      <span className="form-title-2">
        Cotizá tu envío completando todos tus datos.
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="wrapper_inputs">
          <div className='input_container_2_wrapper'>
            <TextInput2 {...form_shipment[0]} />
          </div>
          <div className='input_container_2_wrapper'>
            <TextInput2 {...form_shipment[1]} />
          </div>
        </div>

        <TextInput2 {...form_shipment[2]} />
        <TextInput2 {...form_shipment[3]} />
        <TextInputArea {...form_shipment[4]} />
        <span className="helper_text">
          *Recordá completar todos los campos del formulario.
        </span>
        <input
          type="submit"
          className="btn-pill-quote bg-primary"
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
