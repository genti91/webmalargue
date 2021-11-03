const express = require("express");
const router = express.Router();

//CONTROLADORES
const emailController = require("../controllers/emailController.js");

router.route("/send").post(emailController.send);

module.exports = router;
