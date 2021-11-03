import React from "react";
import TextInput2 from "./TextInput2";
import { useForm } from "../hooks";
import { form_shipment } from "../constant/forms";
import TextInputArea from "./TextInputArea";
const Form = () => {
  const { form, setInForm } = useForm({
    origin: "",
    destiny: "",
    name: "",
    email: "",
    message: "",
  });
  const submitForm = (e) => {
    console.log(form);
  };
  return (
    <div className="container-form-2 text-center">
      <span className="form-title-2">
        Cotizá tu envío completando todos tus datos.
      </span>
      <div>
        <div className="wrapper_inputs">
          <div className='input_container_2_wrapper'>
            <TextInput2 {...form_shipment[0]} setInForm={setInForm} form={form}  />
          </div>
          <div className='input_container_2_wrapper'>
            <TextInput2 {...form_shipment[1]} setInForm={setInForm} form={form}  />
          </div>
        </div>

        <TextInput2 {...form_shipment[2]} setInForm={setInForm} form={form}  />
        <TextInput2 {...form_shipment[3]} setInForm={setInForm} form={form}  />
        <TextInputArea {...form_shipment[4]} setInForm={setInForm} form={form}  />
        <span className="helper_text">
          *Recordá completar todos los campos del formulario.
        </span>
        <input
          type="submit"
          className="btn-pill-quote bg-primary"
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
