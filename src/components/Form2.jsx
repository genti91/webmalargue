import React from "react";
import { useHistory } from "react-router-dom";
import TextInput2 from "./TextInput2";
import { useForm } from "../hooks";
import { form_shipment } from "../constant/forms";
import TextInputArea from "./TextInputArea";
import emailjs from "emailjs-com";

const Form = () => {
  const { form, setInForm } = useForm({
    origin: "",
    destiny: "",
    name: "",
    email: "",
    message: "",
  });
  const history = useHistory();
  const resetForm = () => {
    setInForm({
      origin: "",
      destiny: "",
      name: "",
      email: "",
      message: "",
    });
  };

  const validate = (form) => {
    const { origin, destiny, name, email, message } = form;
    if (origin.length === 0) {
      alert("Debe ingresar una ciudad de origen");
      return false;
    } else if (destiny.length === 0) {
      alert("Debe ingresar una ciudad de destino");
      return false;
    } else if (name.length === 0) {
      alert("Debe ingresar un nombre");
      return false;
    } else if (email.length === 0) {
      alert("Debe ingresar un correo");
      return false;
    } else if (message.length === 0) {
      alert("Debe ingresar un mensaje");
      return false;
    }
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validate(form)) {
      form.page = "Individuos";
      emailjs
        .send(
          "service_g3igiy4",
          "template_r5h4qbk",
          form,
          "user_PLKNnUdKZUZ6BoWvvvwfQ"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            history.push("/gracias");
            resetForm();
          },
          (err) => {
            console.log("FAILED...", err);
            alert("Algo Fallo");
          }
        );
    } else {
      alert("Por favor llene todos los campos");
    }
  };
  return (
    <div className="container-form-2 text-center">
      <span className="form-title-2">
        Cotizá tu envío completando todos tus datos.
      </span>
      <div>
        <div className="wrapper_inputs">
          <div className="input_container_2_wrapper">
            <TextInput2
              {...form_shipment[0]}
              setInForm={setInForm}
              form={form}
            />
          </div>
          <div className="input_container_2_wrapper">
            <TextInput2
              {...form_shipment[1]}
              setInForm={setInForm}
              form={form}
            />
          </div>
        </div>

        <TextInput2 {...form_shipment[2]} setInForm={setInForm} form={form} />
        <TextInput2 {...form_shipment[3]} setInForm={setInForm} form={form} />
        <TextInputArea
          {...form_shipment[form_shipment.length - 1]}
          setInForm={setInForm}
          form={form}
        />
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
