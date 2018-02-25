const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Vannya's app!");
});

app.listen(5000);