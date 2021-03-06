const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');

const { env } = require('@/config/app');

const app = express();

if (env !== 'test') {
  app.use(logger('dev'));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('@/routes/api'));

module.exports = app;
