'use strict';

const serverless = require('serverless-http');
const express = require('express');
const request = require('request');
const app = express();

const REASON_URL = `https://s3.ap-south-1.amazonaws.com/idontlikework/wfh-reasons.json`;

app.post('/get-reason', function(req, res) {
  request(REASON_URL, (err, response, body) => {
    const reasons = JSON.parse(body);

    const reasonCount = reasons.length;
    const randomReasonIndex = Math.floor(Math.random() * reasonCount);

    const reason = reasons[randomReasonIndex].text;

    res.set('Content-Type', 'application/json');

    res.send(
      JSON.stringify({
        speech: reason,
        displayText: reason,
      }),
    );
  });
});

module.exports.handler = serverless(app);
