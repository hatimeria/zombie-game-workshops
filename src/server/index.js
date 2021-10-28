const { resolve } = require('path');
const history = require('connect-history-api-fallback');
const express = require('express');
const configureAPI = require('./configure');
const app = express();

const { PORT = 3001 } = process.env;

configureAPI(app);

const publicPath = resolve(__dirname, '../../dist');

app.use(express.static(publicPath));
app.use('/', history());

app.listen(PORT, () => console.log(`App running on port ${PORT}!`));