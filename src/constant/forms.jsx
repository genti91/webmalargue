import {
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaShippingFast,
  FaWeight,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { IoBusinessSharp } from "react-icons/io5";
const form_shipment = [
  {
    name: "name",
    type: "text",
    // placeholder: "*Nombre",
    required: true,
    errorMessage: "Por favor completa este campo",
    validation: false,
    // icon: <FaUser />,
  },
  {
    name: "email",
    type: "email",
    // placeholder: "*Email",
    required: true,
    errorMessage: "Por favor completa este campo",
    validation: /^\S+@\S+$/i,
    // icon: <FaEnvelope />,
  },
  {
    name: "tel",
    type: "tel",
    // placeholder: "*Teléfono / celular",
    required: true,
    errorMessage: "Por favor completa este campo",
    validation: /^[0-9]+$/i,
    // icon: <FaEnvelope />,
  },
  {
    name: "origin",
    type: "text",
    // placeholder: "*Origen del envío",
    required: true,
    errorMessage: "Por favor completa este campo",
    validation: false,
    // icon: <FaMapMarkerAlt />,
  },
  {
    name: "destiny",
    type: "text",
    // placeholder: "*Destino del envío",
    required: true,
    errorMessage: "Por favor completa este campo",
    validation: false,
    // icon: <FaMapMarkerAlt />,
  },
  {
    name: "locality",
    type: "text",
    // placeholder: "*Localidad",
    required: true,
    errorMessage: "Por favor completa este campo",
    validation: /^\S+@\S+$/i,
    // icon: <FaMapMarkedAlt />,
  },
  {
    name: "company",
    type: "text",
    // placeholder: "*Empresa",
    required: true,
    errorMessage: "Por favor completa este campo",
    validation: /^\S+@\S+$/i,
    // icon: <IoBusinessSharp />,
  },
  {
    name: "qtyShipment",
    type: "select",
    options: [
      {
        value: "De 1 a 30 envíos",
        name: "De 1 a 30 envíos",
      },
      {
        value: "De 31 a 50 envíos",
        name: "De 31 a 50 envíos",
      },
      {
        value: "De 51 a 100 envíos",
        name: "De 51 a 100 envíos",
      },
      {
        value: "Más de 100 envíos",
        name: "Más de 100 envíos",
      },
    ],
    placeholder: "*Cantidad Envíos Semanales:",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: /^\S+@\S+$/i,
    // icon: <FaShippingFast />,
  },
  {
    name: "weight",
    type: "select",
    options: [
      {
        value: "Hasta 1kg",
        name: "Hasta 1kg",
      },
      {
        value: "Desde 1kg hasta 5kg",
        name: "Desde 1kg hasta 5kg",
      },
      {
        value: "Desde 5kg hasta 10kg",
        name: "Desde 5kg hasta 10kg",
      },
      {
        value: "Más de 10kg",
        name: "Más de 10kg",
      },
    ],
    placeholder: "*Peso promedio por ",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: /^\S+@\S+$/i,
    // icon: <FaWeight />,
  },
  {
    name: "service",
    type: "select",
    options: [
      {
        value: "mudanza",
        name: "Mudanza",
      },
      {
        value: "encomiendas",
        name: "Encomiendas",
      },
      {
        value: "Recepcion",
        name: "recepcion",
      },
      {
        value: "otros",
        name: "Otros",
      },
    ],
    placeholder: "Mudanza",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: /^\S+@\S+$/i,
    // icon: <FaWeight />,
  },
  {
    name: "pago",
    type: "select",
    options: [
      {
        value: "efectivo",
        name: "Efectivo",
      },
      {
        value: "transferencia",
        name: "Transferencia",
      },
    ],
    placeholder: "Efectivo",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: /^\S+@\S+$/i,
    // icon: <FaWeight />,
  },
  {
    name: "seguro",
    type: "select",
    options: [
      {
        value: "si",
        name: "Si",
      },
      {
        value: "no",
        name: "No",
      },
    ],
    placeholder: "Si",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: /^\S+@\S+$/i,
    // icon: <FaWeight />,
  },
  {
    name: "message",
    type: "text",
    // placeholder: "*Mensaje",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: false,
    // icon: <FaCommentDots />,
  },
];
export { form_shipment };
