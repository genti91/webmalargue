require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const router = require("./routes/index.js");

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use(express.static("client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = 3002;
const host = 'localhost';

app.listen(port, host, () =>
  console.log(`App listening on port 3002`)
);
