const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8000;

//middleware configuration 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//route
const numGen = require('./route/api/numgen');

app.use("/api/numgen", numGen);

app.listen(port, () => console.log(`server is up and runing on ${port}`));
