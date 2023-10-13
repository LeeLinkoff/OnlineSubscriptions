// Modules and Globals
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Express Settings
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Controllers & Routes

app.use(express.urlencoded({ extended: true }));

app.use("/subscriptions", require("./controllers/subscriptions"));

app.listen(process.env.PORT, (err) => {
    if (err) console.log("error in server set up: " + err )
  console.log( `start server, Listening on ${process.env.PORT}`);
});