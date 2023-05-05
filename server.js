const express = require('express');
const path = require('path');
const con = require("./db/connect");

const app = express();


app.set("view-engine", "ejs");

app.get("/api/v2/tickers", (req, res) => {
    res.render("index.ejs");
  });


app.listen(3000);