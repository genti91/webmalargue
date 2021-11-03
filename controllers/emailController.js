const nodemailer = require("nodemailer");
const creds = require("../config");
let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "localhost", // Don’t forget to replace with the SMTP host of your provider
  port: 3002,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});
module.exports = {
  send: async function (req, res) {
    for (const property in req.body) {
      if (req.body[property] === "") {
        res.status(202).json({
          [property]: "Por favor completa este campo para cotizar",
        });
      }
    }
    const origin = req.body.origin;
    const destiny = req.body.destiny;
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const content = ` Email de contacto: ${email}\n Consulta: ${message}\n Origen del Envío: ${origin}\n Destino del Envío: ${destiny} `;
    const mail = {
      from: name,
      to: "mfgomez.810@gmail.com", // Change to email address that you want to receive messages on
      subject: `Solicitud de cotizacion de ${name}`,
      text: content,
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: "fail",
        });
      } else {
        res.json({
          status: "success",
        });
      }
    });
  },
};
