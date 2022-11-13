const express = require("express");
const cors = require("cors");
var db = require("./create-tables");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/add-user", (req, res) => {
  const name = req.body.name;
  const dob = req.body.dob;

  // if (!name || !dob) return res.end("please provide name");
  db.run(
    "INSERT INTO UserInfo (FirstName, DOB) VALUES (?, ?)",
    [name, dob],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

app.get("/get-name", (req, res) => {
  db.each(
    "SELECT FirstName FROM UserInfo ORDER BY ID DESC LIMIT 1",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result.FirstName);
      }
    }
  );
});

app.get("/get-date", (req, res) => {
  db.each(
    "SELECT DOB FROM UserInfo ORDER BY ID DESC LIMIT 1",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result.DOB);
      }
    }
  );
});

app.get("/userinfo", (req, res) => {
  db.each("SELECT * FROM UserInfo", (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
  res.end(result);
});

app.get("/get-signs", (req, res) => {
  db.each("SELECT * FROM ZodiacSigns", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log(`Server is running on 3001`);
});
