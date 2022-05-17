import React from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useForm } from "../hooks";
import TextInput from "./TextInput";
import { form_shipment } from "../constant/forms";
import TextInputArea from "./TextInputArea";
import { Col, Container, Row } from "react-bootstrap";




const Form = (props) => {
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
      name: "",
      email: "",
      tel:"",
      origin: "",
      destiny: "",
      message: "",
    });
  };
  const validate = (form) => {
    const { origin, destiny, name, email, tel, message } = form;
    if (name.length === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Debe ingresar un nombre",
        showConfirmButton: false,
        timer: 1500,
      });
      return false;
    } else if (email.length === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Debe ingresar un email",
        showConfirmButton: false,
        timer: 1500,
      });
      return false;
    } else if (tel.length === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Debe ingresar un teléfono",
        showConfirmButton: false,
        timer: 1500,
      });
      return false;
    } else if (message.length === 0) {
      Swal.fire({
        position: "center",
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
              position: "center",
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
              position: "center",
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
    // <div className="container-form text-center"> 
     

      <form id="contact-form" onSubmit={submitForm} method="POST">
        <Row
          className="justify-content-md-center"
        >
          <Col 
            md={12}
          >
            <label>Nombre<span>*</span></label>
            <TextInput {...form_shipment[0]} setInForm={setInForm} form={form} />
          </Col>
          <Col
            ms={6}
            >
            <label>Email<span>*</span></label>
            <TextInput {...form_shipment[1]} setInForm={setInForm} form={form} />
          </Col>
          <Col
            md={6}
            >
            <label>Teléfono / celular<span>*</span></label>
            <TextInput {...form_shipment[2]} setInForm={setInForm} form={form} />
          </Col>
          {/* <Col
            md={6}
            >
            <label>Asunto<span>*</span></label>
            <TextInput {...form_shipment[3]} setInForm={setInForm} form={form} />
          </Col> */}
        </Row>
        <label>Tu mensaje<span>*</span></label>
        <TextInputArea
          {...form_shipment[form_shipment.length - 1]}
          setInForm={setInForm}
          form={form}
          />
        {/* <span className="helper_text">
          *Recordá completar todos los campos del formulario.
        </span> */}

          <Row
            className="justify-content-end"
            >
            <Col
              md={4}
              xs={12}
            >
              <input
                type="submit"
                className="btn btn-primary bg-primary"
                value="Cotizá tu envío"
                style={{
                  outline: "none",
                  border: "none",
                  width: '100%'
                }}
                />
            </Col>
          </Row>

      </form>

  );
};
export default Form;
