const functions = require("firebase-functions");
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const date = new Date();
    const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
    res.send(`
    <!doctype html>
    <head>
      <title>Time</title>
<!--      <link rel="stylesheet" href="/style.css">-->
<!--      <script src="/script.js"></script>-->
    </head>
    <body>
        <p>test</p>
    </body>
  </html>`);
});

app.get('/directory', (req, res) => {
    const date = new Date();
    const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
    res.send(`
    <!doctype html>
    <head>
      <title>Time</title>
<!--      <link rel="stylesheet" href="/style.css">-->
<!--      <script src="/script.js"></script>-->
    </head>
    <body>
        <p>Directroy</p>
    </body>
  </html>`);
});


exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
