const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./config/keys').dbURI;

mongoose
  .connect(db, { newUserParser: true })
  .then(() => console.log('Connected successfully to DB'))
  .catch(error => console.log(`Cannot connect to DB: ${error}`));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running on port ${port}`));
