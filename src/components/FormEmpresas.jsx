import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks";
import TextInput from "./TextInput";
import { form_shipment } from "../constant/forms";
import TextInputArea from "./TextInputArea";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
const FormEmpresas = (props) => {
  const { form, setInForm } = useForm({
    origin: "",
    destiny: "",
    name: "",
    email: "",
    locality: "",
    company: "",
    qtyShipment: "",
    weight: "",
    message: "",
  });
  const history = useNavigate();
  const resetForm = () => {
    setInForm({
      origin: "",
      destiny: "",
      name: "",
      email: "",
      locality: "",
      company: "",
      qtyShipment: "",
      weight: "",
      message: "",
    });
  };
  const validate = (form) => {
    const { origin, destiny, name, email, message, qtyShipment, weight } =
      form;
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
    } else if (qtyShipment.length === 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Debe ingresar una cantidad de envios",
        showConfirmButton: false,
        timer: 1500,
      });
      return false;
    } else if (weight.length === 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Debe ingresar un peso",
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
      form.page = "Empresas";
      emailjs
        .send(
          "service_vv6p4ni",
          "template_a5on8fl",
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
    <div className="mt-5">
      <div className="container-form text-center">
        <span className="form-title">
          Cotizá tu envío completando todos tus datos. EMPRESAS
        </span>
        <form id="contact-form" onSubmit={submitForm} method="POST">
          <div className="wrapper_inputs">
            <TextInput
              {...form_shipment[0]}
              setInForm={setInForm}
              form={form}
            />
            <TextInput
              {...form_shipment[1]}
              setInForm={setInForm}
              form={form}
            />
          </div>
          <div className="wrapper_inputs">
            <TextInput
              {...form_shipment[2]}
              setInForm={setInForm}
              form={form}
            />
            <TextInput
              {...form_shipment[3]}
              setInForm={setInForm}
              form={form}
            />
          </div>
          <div className="wrapper_inputs">
            <TextInput
              {...form_shipment[4]}
              setInForm={setInForm}
              form={form}
            />
            <TextInput
              {...form_shipment[5]}
              setInForm={setInForm}
              form={form}
            />
          </div>
          <div className="wrapper_inputs">
            <TextInput
              {...form_shipment[6]}
              setInForm={setInForm}
              form={form}
            />
            <TextInput
              {...form_shipment[7]}
              setInForm={setInForm}
              form={form}
            />
          </div>
          <TextInputArea
            {...form_shipment[8]}
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
    </div>
  );
};
export default FormEmpresas;
