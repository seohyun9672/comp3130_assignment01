var express = require("express");
var db = require("./create-tables");
var cors = require('cors');
var app = express();

app.use(cors());

let names = [];
let dates = [];

app.get("/user-name", (req, res) => {
  const name = req.query.name;
  names.push(name);
  console.log(name);
  res.json({message: "name saved"})

});

app.get("/user-date", (req, res) => {
  const date = req.query.date;
  dates.push(date);
  console.log(date);
  res.json({message: "date saved"})

});

app.get("/get-names", (req, res) => {
  res.json({ names });

});

//test
app.get("/test", (req, res) => {
  // this reads all data from ZodiacSigns table
  db.each("SELECT * FROM ZodiacSigns", (err, row) => {
    console.log(row);
  });
  res.end();
});



app.listen(3001);