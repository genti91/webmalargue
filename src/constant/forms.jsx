import {
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaCommentDots,
} from "react-icons/fa";
const form_shipment = [
  {
    name: "origin",
    type: "text",
    placeholder: "*Origen del envío",
    required: true,
    validation: false,
    icon: <FaMapMarkerAlt />,
  },
  {
    name: "destiny",
    type: "text",
    placeholder: "*Destino del envío",
    required: true,
    validation: false,
    icon: <FaMapMarkerAlt />,
  },
  {
    name: "name",
    type: "text",
    placeholder: "*Nombre",
    required: true,
    validation: false,
    icon: <FaUser />,
  },
  {
    name: "email",
    type: "text",
    placeholder: "*Email",
    required: true,
    validation: /^\S+@\S+$/i,
    icon: <FaEnvelope />,
  },
  {
    name: "message",
    type: "text",
    placeholder: "*Mensaje",
    required: true,
    validation: false,
    icon: <FaCommentDots />,
  },
];
export { form_shipment };
