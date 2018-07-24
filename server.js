const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', (req, res) => {
  fs.readFile("./index.html", function (err, data) {
    res.status(200);
    res.setHeader( 'content-type', 'text/html; charset=utf-8' );
    res.send(data);
  });
});

app.get('/styles.css', (req, res) => {
  fs.readFile("./styles.css", function (err, data) {
    res.status(200);
    res.setHeader( 'content-type', 'text/css; charset=utf-8' );
    res.send(data);
  });
})

// app.get('/that', (req, res) => {
//   fs.readFile("./client/that.html", function (err, data) {
//     res.status(200);
//     res.set({ 'content-type': 'text/html; charset=utf-8' });
//     res.send(data);
//   });
// });
//
// app.get('/fancy', (req, res) => {
//   fs.readFile("./client/fancy.html", function (err, data) {
//     res.status(200);
//     res.setHeader( 'content-type', 'text/html; charset=utf-8' );
//     res.send(data);
//   });
// });
//

//
// app.use((req, res, next) => {
//   fs.readFile("./client/404.html", function (err, data) {
//     res.status(404);
//     res.set({ 'content-type': 'text/html; charset=utf-8' });
//     res.send(data);
//   });
// })

app.listen(3000);
