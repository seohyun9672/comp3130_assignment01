const express = require('express');
const cors = require('cors')
var db = require("./create-tables");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let names = [];
let dobs = [];
let signs = [];

app.get("/add-user", (req, res) => {
  const name = req.query.name;
  const dob = req.query.dob;

  if (!name || !dob) return res.end("please provide name and date of birth");
  db.run("INSERT INTO UserInfo (FirstName, DOB) VALUES (?, ?)", [name, dob]);

  names.push(name);
  dobs.push(dob);

  res.json({ message: "everything saved" });
});

app.get("/get-name", (req, res) => {
  res.json({ names })
});

app.get("/userinfo", (req, res) => {
  db.each("SELECT * FROM UserInfo", (err, result) => {
    if (err) {
      console.log(err);
    };
    console.log(result);
  });
  res.json({ message: "data shown" })
});

// Route to get all signs info
app.get("/get-signs", (req, res) => {
  // this reads all data from ZodiacSigns table
  db.each(`SELECT * FROM ZodiacSigns WHERE id = 1`, (err, result) => {
    console.log(result);
    signs.push(result);

  });
  res.json({ signs })
});

app.get('/get-result', (req, res) => {
  res.json({ signs })
});

//this is just for me for ref
// Route to get one post
// app.get("/get-result/id:", (req, res) => {

//   const id = req.params.id;
//   db.query("SELECT * FROM ZodiacSigns WHERE id = ?", id,
//     (err, result) => {
//       if (err) {
//         console.log(err)
//       }
//       res.send(result)
//     });
// });

// // Route for creating the post
// app.post('/api/create', (req, res) => {

//   const sign = req.body.sign;
//   const src = req.body.src;
//   const startDate = req.body.startDate;
//   const endDate = req.body.endDate;
//   const description = req.body.description;

//   db.query("SELECT * (DateStart, DateEnd, SignName, ImgSrc, Description ) VALUES (?,?,?)", [title, text, username], (err, result) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log(result);
//   });
// })

// // Route to delete a post

// app.delete('/api/delete/:id', (req, res) => {
//   const id = req.params.id;

//   db.query("DELETE FROM posts WHERE id= ?", id, (err, result) => {
//     if (err) {
//       console.log(err)
//     }
//   })
// })

app.listen(PORT, () => {
  console.log(`"Server is running on ${PORT}`)
})


