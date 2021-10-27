import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import { form_shipment } from "../constant/forms";
const Form2 = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="container-form text-center">
      <span className='form-title'>Cotizá tu envío completando todos tus datos.</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex align-items-center">
          <TextInput {...form_shipment[0]} />
          <TextInput {...form_shipment[1]} />
        </div>
        <div className="d-flex flex-column my-4">
          <TextInput {...form_shipment[2]} />
          <TextInput {...form_shipment[3]} />
        </div>
        <TextInput {...form_shipment[4]} />
        <input
          type="submit"
          class="btn-pill bg-primary d-inline-block "
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
export default Form2;
