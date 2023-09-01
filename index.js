require('dotenv').config();
const express = require("express");
const{ MongoDB }= require("./config/database");
const ErrorHandler = require("./middleware/ErrorHandler");
const AccountRoute = require("./route/AccountRoute");

const PORT = process.env.PORT || 8000;
const app = express();

MongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/flutter", AccountRoute);

app.use(function (err, req, res, next) {
    ErrorHandler(err, req, res);
  });

app.listen(PORT, () => {
    console.log(`Server started listening on ${PORT}`)
})