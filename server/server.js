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
  db.get(
    "SELECT FirstName FROM UserInfo ORDER BY ID DESC LIMIT 1",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(result);
        res.send(result.FirstName);
      }
    }
  );
});

app.get("/get-date", (req, res) => {
  db.get("SELECT DOB FROM UserInfo ORDER BY ID DESC LIMIT 1", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      res.send(result.DOB);
    }
  });
});

// app.get("/userinfo", (req, res) => {
//   db.each("SELECT * FROM UserInfo", (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });
//   res.end(result);
// });

app.get("/get-sign", (req, res) => {
  const sign = req.query.sign;
  db.get(
    "SELECT * FROM ZodiacSigns WHERE SignName=?",
    [sign],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        return console.log(result);
      }
    }
  );
});

// // Route to get all signs info
// app.get("/get-result", (req, res) => {
//   db.each("SELECT * FROM ZodiacSigns", (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     res.send(result);
//   });
// });

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

app.listen(3001, () => {
  console.log(`Server is running on 3001`);
});
