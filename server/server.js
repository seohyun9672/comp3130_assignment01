const express = require('express');
const cors = require('cors')
var db = require("./create-tables");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let names = [];
let dobs = [];

app.get("/add-user", (req, res) => {
  const name = req.query.name;
  names.push(name);
  console.log(names);

  const dob = req.query.dob;
  dobs.push(dob);
  console.log(dobs);

  // if (!name ) return res.end("please provide name");

  db.run("INSERT INTO UserInfo (FirstName, DOB) VALUES (?, ?)", [name, dob]);

  res.json({ message: "everything saved" });
});

app.get("/add-name", (req, res) => {
  const name = req.query.name;
  names.push(name);
  console.log(names);

  if (!name ) return res.end("please provide name");

  db.run("INSERT INTO UserInfo (FirstName) VALUES (?)", [name]);

  res.json({ message: "name saved" });
});

app.get("/add-dob", (req, res) => {
  const dob = req.query.dob;
  dobs.push(dob);
  console.log(dobs);

  if ( !dob ) return res.end("please provide your dob");

  db.run("INSERT INTO UserInfo (DOB) VALUES (?)", [dob]);

  res.json({ message: "date saved" });
});

app.get("/get-names", (req, res) => {
  res.json({ names })
});

app.get("/userinfo", (req, res) => {
  db.all("SELECT * FROM UserInfo", (err, result) => {
    if (err) {
      console.log(err);
    };

    console.log(result);
    res.send(result);
  });
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

app.get('/get-result', (req, res) => {
  res.json({ signs })
});






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
  console.log(`Server is running on ＄{PORT}`)
})



// app.use(cors());

// const homepagePath = __dirname + "/pages/index.js"
// //need to define where i am by creating const homepagePath

// app.get("/", (req, res) => {
// //    res.send("hello welcome") 
//     res.sendFile(homepagePath);

// });


// //reading userinfo
// app.get("/usertest", (req, res) => {

//   db.each("SELECT * FROM UserInfo", (err, row) => {
//     console.log(row);
//   });

//   res.end();
// });


// //
// let names = [];
// let dates = [];
// let signs = [];


// app.get("/user-info", (req, res) => {
//   const FirstName = req.query.name;
//   const DOB = req.query.DOB;


//   if (!FirstName) return res.end("please provide your name");

//   db.run("INSERT INTO UserInfo (FirstName, DOB) VALUES (?, ?)", [FirstName, DOB]);
//   names.push(FirstName);
//   console.log(FirstName);
//   res.json({ message: "name saved" });

//   db.each("SELECT * FROM ZodiacSigns WHERE (DOB) BETWEEN DateStart AND DateEnd", [DOB], (err, data) => {
//     if (err) return;

//     // Success
//     //console.log(data);
//   });
//   res.send({data});
// });

// // app.get("/user-name", (req, res) => {
// //   const FirstName = req.query.name;

// //   if (!FirstName) return res.end("please provide your name");

// //   db.run("INSERT INTO UserInfo (FirstName) VALUES (?)", [FirstName]);
// //   names.push(FirstName);
// //   console.log(FirstName);
// //   res.json({ message: "name saved" });
// // });

// app.get("/user-date", (req, res) => {
//   const DOB = req.query.DOB;

//   if (!DOB) return res.end("please provide your date of birth");

//   db.run("INSERT INTO UserInfo (DOB) VALUES (?)", [DOB]);

//   dates.push(date);
//   console.log(date);
//   res.json({ message: "date saved" })

// });

// app.get("/get-names", (req, res) => {
//   res.json({ names });

// });

// //test
// app.get("/test", (req, res) => {
//   // this reads all data from ZodiacSigns table
//   db.each("SELECT * FROM ZodiacSigns", (err, row) => {
//     console.log(row);
//   });
//   res.end();
// });

// app.listen(3000);
// var express = require("express");
// var db = require("./create-tables");
// var cors = require('cors');
// const app = express();

// app.use(cors());

// //reading userinfo
// app.get("/usertest", (req, res) => {

//   db.each("SELECT * FROM UserInfo", (err, row) => {
//     console.log(row);
//   });

//   res.end();
// });


// //
// let names = [];
// let dates = [];
// let signs = [];


// app.get("/user-info", (req, res) => {
//   const FirstName = req.query.name;
//   const DOB = req.query.DOB;


//   if (!FirstName) return res.end("please provide your name");

//   db.run("INSERT INTO UserInfo (FirstName, DOB) VALUES (?, ?)", [FirstName, DOB]);
//   names.push(FirstName);
//   console.log(FirstName);
//   res.json({ message: "name saved" });

//   db.each("SELECT * FROM ZodiacSigns WHERE (DOB) BETWEEN DateStart AND DateEnd", [DOB], (err, data) => {
//     if (err) return;

//     // Success
//     //console.log(data);
//   });
//   res.send({data});
// });

// // app.get("/user-name", (req, res) => {
// //   const FirstName = req.query.name;

// //   if (!FirstName) return res.end("please provide your name");

// //   db.run("INSERT INTO UserInfo (FirstName) VALUES (?)", [FirstName]);
// //   names.push(FirstName);
// //   console.log(FirstName);
// //   res.json({ message: "name saved" });
// // });

// app.get("/user-date", (req, res) => {
//   const DOB = req.query.DOB;

//   if (!DOB) return res.end("please provide your date of birth");

//   db.run("INSERT INTO UserInfo (DOB) VALUES (?)", [DOB]);

//   dates.push(date);
//   console.log(date);
//   res.json({ message: "date saved" })

// });

// app.get("/get-names", (req, res) => {
//   res.json({ names });

// });

// //test
// app.get("/test", (req, res) => {
//   // this reads all data from ZodiacSigns table
//   db.each("SELECT * FROM ZodiacSigns", (err, row) => {
//     console.log(row);
//   });
//   res.end();
// });

// app.get("/update", (req, res) => {
//   const id = req.query.id;
//   const columnName = req.query.columnName;
//   const value = req.query.value;

//   if (!columnName || !value || !id) return res.end("");

//   db.run(`UPDATE UserInfo SET ${columnName}=? WHERE id=?`, [value, id]);

//   res.end();
// });

// // app.get("/delete", (req, res) => { 

// //   db.run("DELETE FROM UserInfo WHERE id=null", [req.query.id]);
// //   res.json({ message: "name deleted" });
// // });

// app.listen(3001);