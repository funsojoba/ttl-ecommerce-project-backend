const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) =>
  res.send({
    name: "John",
      country: "Nigeria",
        age: 32
  })
);

app.listen(3000);
