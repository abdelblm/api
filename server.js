const express = require("express");
const app = express();
const port = 3001;
var bodyParser = require("body-parser");
const routes = require("./routes/tea");
const routes = require("./routes/teas");

app.use(bodyParser.json());
// import the routes


app.use("/", routes); //to use the routes

// app.get('/getid', (req, res) => {
//   res.send(array[req.query.name])
// })

//   app.put('/n', (req, res) => {
//     array[req.body.id] = array.body.name
//     res.send(array)
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.delete("/", (req, res) => {
//   let d = array.filter((el) => el !== req.body.name);
//   res.send(array);
// });
