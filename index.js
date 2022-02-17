const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv/config');

//settings
const PORT = process.env.PORT || 3000;
var corsOptions = {
    origin: '*',
    credentials: false,
    exposedHeaders: ['set-cookie'],
    allowedHeaders: '*'
}

//headers
app.use(cors(corsOptions));

//middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require('./src/app.js'));

//Server Start
console.clear();
app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on localhost port ${PORT}`)
);