const functions = require("firebase-functions");
const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/directory', (req, res) => {
    res.sendFile(__dirname + '/directory.html');
});

app.get('/jobs', (req, res) => {
    res.sendFile(__dirname + '/jobs.html');
});




exports.app = functions.https.onRequest(app);

