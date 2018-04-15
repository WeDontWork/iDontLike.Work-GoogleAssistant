'use strict';

const serverless = require('serverless-http');
const express = require('express');

const app = express();

app.get('/get-reason', function(req, res) {});

module.exports.handler = serverless(app);
