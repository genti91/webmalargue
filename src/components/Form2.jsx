import React from "react";
import { useNavigate } from "react-router-dom";
import TextInput2 from "./TextInput2";
import { useForm } from "../hooks";
import { form_shipment } from "../constant/forms";
import TextInputArea from "./TextInputArea";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Form = () => {
  const { form, setInForm } = useForm({
    origin: "",
    destiny: "",
    name: "",
    email: "",
    message: "",
  });
  const history = useNavigate();
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
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Debe ingresar una ciudad de origen",
        showConfirmButton: false,
        timer: 1500,
      });
      return false;
    } else if (destiny.length === 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Debe ingresar una ciudad de destino",
        showConfirmButton: false,
        timer: 1500,
      });
      return false;
    } else if (name.length === 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Debe ingresar un nombre",
        showConfirmButton: false,
        timer: 1500,
      });
      return false;
    } else if (email.length === 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Debe ingresar un email",
        showConfirmButton: false,
        timer: 1500,
      });
      return false;
    } else if (message.length === 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Debe ingresar un mensaje",
        showConfirmButton: false,
        timer: 1500,
      });
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
          "service_vv6p4ni",
          "template_sa97o4k",
          form,
          "user_EpLgdCxfdM9GfQOvqBiSt"
        )
        .then(
          (response) => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Formulario enviado correctamente",
              showConfirmButton: false,
              timer: 1500,
            });
            history.push("/gracias");
            resetForm();
          },
          (err) => {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Error al enviar el formulario",
              showConfirmButton: false,
              timer: 1500,
            });
            console.log("FAILED...", err);
          }
        );
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
