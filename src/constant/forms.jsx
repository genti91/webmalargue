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
    name: "origin",
    type: "text",
    placeholder: "*Origen del envío",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: false,
    icon: <FaMapMarkerAlt />,
  },
  {
    name: "destiny",
    type: "text",
    placeholder: "*Destino del envío",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: false,
    icon: <FaMapMarkerAlt />,
  },
  {
    name: "name",
    type: "text",
    placeholder: "*Nombre",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: false,
    icon: <FaUser />,
  },
  {
    name: "email",
    type: "email",
    placeholder: "*Email",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: /^\S+@\S+$/i,
    icon: <FaEnvelope />,
  },
  {
    name: "locality",
    type: "text",
    placeholder: "*Localidad",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: /^\S+@\S+$/i,
    icon: <FaMapMarkedAlt />,
  },
  {
    name: "company",
    type: "text",
    placeholder: "*Empresa",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: /^\S+@\S+$/i,
    icon: <IoBusinessSharp />,
  },
  {
    name: "qtyShipment",
    type: "select",
    options: [
      {
        value: "1",
        name: "1",
      },
      {
        value: "2",
        name: "2",
      },
      {
        value: "3",
        name: "3",
      },
      {
        value: "4",
        name: "4",
      },
    ],
    placeholder: "*Cantidad Envíos Semanales:",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: /^\S+@\S+$/i,
    icon: <FaShippingFast />,
  },
  {
    name: "weight",
    type: "select",
    options: [
      {
        value: "1",
        name: "1",
      },
      {
        value: "2",
        name: "2",
      },
      {
        value: "3",
        name: "3",
      },
      {
        value: "4",
        name: "4",
      },
      {
        value: "5",
        name: "5",
      },
    ],
    placeholder: "*Peso promedio",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: /^\S+@\S+$/i,
    icon: <FaWeight />,
  },
  {
    name: "message",
    type: "text",
    placeholder: "*Mensaje",
    required: true,
    errorMessage: "Por favor completa este campo para cotizar",
    validation: false,
    icon: <FaCommentDots />,
  },
];
export { form_shipment };
