const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv/config');

const PORT = process.env.PORT || 3000;
var corsOptions = {
    origin: '*',
    credentials: false,
    exposedHeaders: ['set-cookie'],
    allowedHeaders: '*'
}

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');

app.use(require('./src/app.js'));

console.clear();
app.listen(PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on localhost port ${PORT}`)
);

module.exports = app;