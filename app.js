const express = require('express');
const app = express();
const router = require('./router');

app.use('/', router);

app.get("*", (req, res) => {
    res.send("dd");
});

app.listen('3000', () => {
    console.log("connected 3000 port!");
});