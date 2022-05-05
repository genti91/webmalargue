import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useForm } from "../hooks";
import TextInput from "./TextInput";
import { form_shipment } from "../constant/forms";
import TextInputArea from "./TextInputArea";

import '../pages/Cotiza/Cotiza.scss'

const FormCotizacion = (props) => {
  const { form, setInForm } = useForm({
    origin: "",
    destiny: "",
    name: "",
    email: "",
    message: "",
    service: "",
    pago: "",
    seguro: "",
  });
  const history = useNavigate();
  const resetForm = () => {
    setInForm({
      name: "",
      email: "",
      tel: "",
      origin: "",
      destiny: "",
      message: "",
      service: "",
      pago: "",
      seguro: "",
    });
  };
  const validate = (form) => {
    const {
      origin,
      destiny,
      name,
      email,
      tel,
      message,
      service,
      pago,
      seguro,
    } = form;
    if (name.length === 0) {
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
    } else if (tel.length === 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Debe ingresar un teléfono",
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
    <section>
      <Row>
        <Container>
          <form id="contact-form" onSubmit={submitForm} method="POST">
            <Row
              className="justify-content-md-center"
            >
              <Col
                md={10}
              >
                <Row>
                    <Col
                      xs={12}
                      md={9}
                    >
                      <h2>Completá el formulario y nos pondremos en contacto con vos</h2>
                    </Col>
                    <Col
                      md={6}
                      >
                      <label>Nombre</label>
                      <TextInput {...form_shipment[0]} setInForm={setInForm} form={form} />
                    </Col>
                    <Col
                      md={6}
                      >
                      <label>Email</label>
                      <TextInput {...form_shipment[1]} setInForm={setInForm} form={form} />
                    </Col>
                    <Col
                      md={6}
                      >
                      <label>Teléfono</label>
                      <TextInput {...form_shipment[2]} setInForm={setInForm} form={form} />
                    </Col>
                    <Col
                      md={6}
                      >
                      <label>Origen</label>
                      <TextInput {...form_shipment[3]} setInForm={setInForm} form={form} />
                    </Col>
                    <Col
                      md={6}
                      >
                      <label>Destino</label>
                      <TextInput {...form_shipment[4]} setInForm={setInForm} form={form} />
                    </Col>
                    <Col
                      md={6}
                      >
                      <label>Tipo de pago</label>
                      <TextInput {...form_shipment[10]} setInForm={setInForm} form={form} />
                    </Col>
                    <Col
                      xs={12}
                      >
                      <label>Tipo de servicio</label>
                      <TextInput {...form_shipment[9]} setInForm={setInForm} form={form} />
                    </Col>
                    <Col
                      xs={12}
                      >
                      <label>Seguro propio</label>
                      <TextInput {...form_shipment[11]} setInForm={setInForm} form={form} />
                    </Col>
                    <Col
                    XS={12}
                    >
                      <label>Tu mensaje</label>
                      <TextInputArea
                        {...form_shipment[form_shipment.length - 1]}
                        setInForm={setInForm}
                        form={form}
                        />
                      {/* <span className="helper_text">
                        *Recordá completar todos los campos del formulario.
                      </span> */}
                      <input
                        type="submit"
                        className="btn btn-primary bg-primary"
                        value="Cotizá tu envío"
                        style={{
                          outline: "none",
                          border: "none",
                        }}
                        />
                    </Col>
                </Row>
              </Col>
            </Row>
          </form>
        </Container>
      </Row>
    </section>
  );
};
export default FormCotizacion;
